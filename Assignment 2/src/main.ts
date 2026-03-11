import "./style.css";
import { cubicRoot } from "./cubicsolver.ts";

const inputs: NodeListOf<HTMLInputElement> =
  document.querySelectorAll<HTMLInputElement>("input[type='number']");

const submitBtn: HTMLInputElement = document.getElementById(
  "submittedform",
) as HTMLInputElement;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled: boolean = Array.from(inputs).every(
      (input) => input.value !== "",
    );

    submitBtn.disabled = !allFilled;
  });
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const a: number = Number(
    (document.getElementById("a") as HTMLInputElement).value,
  );
  const b: number = Number(
    (document.getElementById("b") as HTMLInputElement).value,
  );
  const c: number = Number(
    (document.getElementById("c") as HTMLInputElement).value,
  );
  const d: number = Number(
    (document.getElementById("d") as HTMLInputElement).value,
  );
  const roots: number[] = cubicRoot(a, b, c, d);
  for (let i = 0; i < 3; i++) {
    const xCell = document.getElementById(
      `Root${i + 1}x`,
    ) as HTMLTableCellElement;
    const yCell = document.getElementById(
      `Root${i + 1}y`,
    ) as HTMLTableCellElement;

    if (isFinite(roots[i])) {
      xCell.textContent = roots[i].toFixed(2);
      yCell.textContent = "0";
    } else {
      xCell.textContent = "Complex";
      yCell.textContent = "Complex";
    }
  }
  (document.getElementById("p") as HTMLTableCellElement).textContent =
    roots[3].toFixed(5);
  (document.getElementById("q") as HTMLTableCellElement).textContent =
    roots[4].toFixed(5);
  (
    document.getElementById("discriminant") as HTMLTableCellElement
  ).textContent = roots[5].toFixed(5);
  drawGraph(a, b, c, d);
  (document.getElementById("Function") as HTMLHeadingElement).textContent =
    `Solving For: ${nameFunction(a, b, c, d)}`;
});

function nameFunction(a: number, b: number, c: number, d: number): string {
  let terms: string[] = [];

  function formatTerm(coef: number, variable: string) {
    if (coef === 0) return;

    const sign: string = coef > 0 ? "+" : "-";
    const abs: number = Math.abs(coef);

    let term: string = "";

    if (terms.length === 0) {
      // first term doesn't need leading +
      if (coef < 0) term += "-";
    } else {
      term += ` ${sign} `;
    }

    if (abs !== 1 || variable === "") {
      term += abs;
    }

    term += variable;

    terms.push(term);
  }

  formatTerm(a, "x³");
  formatTerm(b, "x²");
  formatTerm(c, "x");
  formatTerm(d, "");

  return terms.join("");
}

function drawGraph(a: number, b: number, c: number, d: number): void {
  const canvas: HTMLCanvasElement = document.getElementById(
    "graph",
  ) as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  // wipe canvas to maek sure its claer
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // declare begining and end of the graph and then calculate for the scale
  const xMin: number = -15;
  const xMax: number = 15;
  const yMin: number = -15;
  const yMax: number = 15;

  const xScale: number = canvas.width / (xMax - xMin);
  const yScale: number = canvas.height / (yMax - yMin);

  // draw the axis
  ctx.beginPath();
  ctx.strokeStyle = "black";
  // x axis
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);

  // y axis
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  ctx.strokeStyle = "gray";

  // draw the grid
  for (let x: number = xMin; x <= xMax; x++) {
    const xPixel: number = (x - xMin) * xScale;

    ctx.beginPath();
    ctx.moveTo(xPixel, 0);
    ctx.lineTo(xPixel, canvas.height);
    ctx.stroke();
  }
  for (let y: number = yMin; y <= yMax; y++) {
    const yPixel: number = canvas.height - (y - yMin) * yScale;

    ctx.beginPath();
    ctx.moveTo(0, yPixel);
    ctx.lineTo(canvas.width, yPixel);
    ctx.stroke();
  }

  // Begin drawing the function by calculating the values
  ctx.beginPath();
  ctx.strokeStyle = "red";
  let starting: boolean = true;
  for (let i: number = 0; i < canvas.width; i++) {
    const x: number = xMin + i / xScale; // math to turn the pixel into the scale
    const y: number = a * x ** 3 + b * x ** 2 + c * x + d; // fidn the y value for hte fucntion
    const canvasY: number = canvas.height / 2 - y * yScale;
    if (starting) {
      ctx.moveTo(i, canvasY);
      starting = false;
    } else {
      ctx.lineTo(i, canvasY);
    }
  }
  ctx.stroke();

  // darken the roots with circle
  const roots: number[] = cubicRoot(a, b, c, d);
  console.log(roots);
  ctx.fillStyle = "blue";

  for (let i = 0; i < 3; i++) {
    const r: number = roots[i];
    const xPixel: number = (r - xMin) * xScale;
    const yPixel: number = canvas.height / 2; // y = 0
    if (!isFinite(r)) continue;
    ctx.beginPath();
    ctx.arc(xPixel, yPixel, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}
