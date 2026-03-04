import "./style.css";
import { cubicRoot } from "./cubicsolver.ts";

function f(a: number, b: number, c: number, d: number, x: number) {
  return a * x ** 3 + b * x ** 2 + c * x + d;
}

const inputs = document.querySelectorAll<HTMLInputElement>(
  "input[type='number']",
);
const submitBtn = document.getElementById("submittedform") as HTMLInputElement;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(inputs).every((input) => input.value !== "");

    submitBtn.disabled = !allFilled;
  });
});
const btn = document.getElementById("submittedform") as HTMLInputElement;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const a = Number((document.getElementById("a") as HTMLInputElement).value);
  const b = Number((document.getElementById("b") as HTMLInputElement).value);
  const c = Number((document.getElementById("c") as HTMLInputElement).value);
  const d = Number((document.getElementById("d") as HTMLInputElement).value);
  console.log(a);
  console.log(cubicRoot(a, b, c, d));
  const roots = cubicRoot(a, b, c, d);
  (document.getElementById("Root1x") as HTMLTableCellElement).textContent =
  isFinite(roots[0]) ? roots[0] : "Complex";
  (document.getElementById("Root2x") as HTMLTableCellElement).textContent =
  isFinite(roots[1]) ? roots[1] : "Complex";
  (document.getElementById("Root3x") as HTMLTableCellElement).textContent =
  isFinite(roots[2]) ? roots[2] : "Complex";
  (document.getElementById("Root1y") as HTMLTableCellElement).textContent =
    isFinite(roots[0]) ? "0" : "Complex";
  (document.getElementById("Root2y") as HTMLTableCellElement).textContent =
    isFinite(roots[1]) ? "0" : "Complex";
  (document.getElementById("Root3y") as HTMLTableCellElement).textContent =
    isFinite(roots[2]) ? "0" : "Complex";
  (document.getElementById("p") as HTMLTableCellElement).textContent = roots[3];
  (document.getElementById("q") as HTMLTableCellElement).textContent = roots[4];
  (
    document.getElementById("discriminant") as HTMLTableCellElement
  ).textContent = roots[5];
  drawGraph(a, b, c, d);
  (document.getElementById("Function") as HTMLHeadingElement).textContent =
    `Solving For: ${findfunction(a, b, c, d)}`;
});

function findfunction(a: number, b: number, c: number, d: number) {
  let terms: string[] = [];

  function formatTerm(coef: number, variable: string) {
    if (coef === 0) return;

    const sign = coef > 0 ? "+" : "-";
    const abs = Math.abs(coef);

    let term = "";

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

function drawGraph(a: number, b: number, c: number, d: number) {
  const canvas = document.getElementById("graph") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  // wipe canvas to maek sure its claer
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // declare begining and end of the graph and then calculate for the scale
  const xMin = -15;
  const xMax = 15;
  const yMin = -15;
  const yMax = 15;

  const xScale = canvas.width / (xMax - xMin);
  const yScale = canvas.height / (yMax - yMin);

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
  for (let x = Math.ceil(xMin); x <= xMax; x++) {
    const xPixel = (x - xMin) * xScale;

    ctx.beginPath();
    ctx.moveTo(xPixel, 0);
    ctx.lineTo(xPixel, canvas.height);
    ctx.stroke();
  }
  for (let y = Math.ceil(yMin); y <= yMax; y++) {
    const yPixel = canvas.height - (y - yMin) * yScale;

    ctx.beginPath();
    ctx.moveTo(0, yPixel);
    ctx.lineTo(canvas.width, yPixel);
    ctx.stroke();
  }

  // Begin drawing the function by calculating the values
  ctx.beginPath();
  ctx.strokeStyle = "red";
  let starting = true;
  for (let i = 0; i < canvas.width; i++) {
    const x = xMin + i / xScale; // math to turn the pixel into the scale
    const y = f(a, b, c, d, x); // fidn the y value for hte fucntion
    const canvasY = canvas.height / 2 - y * yScale;
    if (starting) {
      ctx.moveTo(i, canvasY);
      starting = false;
    } else {
      ctx.lineTo(i, canvasY);
    }
  }
  ctx.stroke();

  // darken the roots
  const roots = cubicRoot(a, b, c, d);
  console.log(roots);
  ctx.fillStyle = "blue";

  for (let i = 0; i < 3; i++) {
    let r = roots[i];
    const xPixel = (r - xMin) * xScale;
    const yPixel = canvas.height / 2; // y = 0
    if (!isFinite(r)) return;
    ctx.beginPath();
    ctx.arc(xPixel, yPixel, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}
