import { useEffect, useRef } from "react";
import { cubicRoot } from "../utils/cubicsolver";
import type { equationProps } from "../utils/types";
import { localMaxMin } from "../utils/localMaxMin";

export function CubicGraph({ a, b, c, d }: equationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return
    };

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const xMin = -15;
    const xMax = 15;
    const yMin = -15;
    const yMax = 15;

    const xScale = canvas.width / (xMax - xMin);
    const yScale = canvas.height / (yMax - yMin);

    // axes
    ctx.beginPath();
    ctx.strokeStyle = "black";

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();

    // grid
    ctx.strokeStyle = "gray";

    for (let x = xMin; x <= xMax; x++) {
      const xPixel = (x - xMin) * xScale;

      ctx.beginPath();
      ctx.moveTo(xPixel, 0);
      ctx.lineTo(xPixel, canvas.height);
      ctx.stroke();
    }

    for (let y = yMin; y <= yMax; y++) {
      const yPixel = canvas.height - (y - yMin) * yScale;

      ctx.beginPath();
      ctx.moveTo(0, yPixel);
      ctx.lineTo(canvas.width, yPixel);
      ctx.stroke();
    }

    // function
    ctx.beginPath();
    ctx.strokeStyle = "red";

    let starting = true;

    for (let i = 0; i < canvas.width; i++) {
      const x = xMin + i / xScale;
      const y = a * x ** 3 + b * x ** 2 + c * x + d;
      const canvasY = canvas.height / 2 - y * yScale;

      if (starting) {
        ctx.moveTo(i, canvasY);
        starting = false;
      } else {
        ctx.lineTo(i, canvasY);
      }
    }

    ctx.stroke();

    // roots
    const roots = cubicRoot(a, b, c, d);
    ctx.fillStyle = "#000000";

    for (let i = 0; i < 3; i++) {
      const r = roots[i];
      if (!isFinite(r)) {
        continue;
      }

      const xPixel = (r - xMin) * xScale;
      const yPixel = canvas.height / 2;

      ctx.beginPath();
      ctx.arc(xPixel, yPixel, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    // Turning Points
    const minmax = localMaxMin(a, b, c, d);
    ctx.fillStyle = "blue";

    for (let i = 0; i < 2; i++) {
      const px = minmax[i].x;
      const py = minmax[i].y;
      if (!isFinite(px) || !isFinite(py)) {
        continue;
      }

      const xPixel = (px - xMin) * xScale;
      const yPixel = -(py-yMax) * yScale;
      ctx.beginPath();
      ctx.arc(xPixel, yPixel, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [a, b, c, d]);

  return <canvas ref={canvasRef} width={600} height={525} />;
}
