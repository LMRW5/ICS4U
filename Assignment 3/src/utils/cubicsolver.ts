export function cubicRoot(
  a: number,
  b: number,
  c: number,
  d: number,
): number[] {
  let res: number[] = [];
  const p: number = (3 * a * c - b * b) / (3 * a * a);
  const q: number =
    (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant: number = Number(
    ((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3)).toFixed(6),
  );

  if (discriminant < 0) {
    // Case A (3 real roots)
    res = trigonometricMethod(a, b, p, q);
  } else if (discriminant > 0) {
    // Case B (1 real root and 2 imaginary)
    res[0] = cardanoMethod(a, b, p, q);
    res[1] = NaN;
    res[2] = NaN;
  } else {
    if (p == 0 && q == 0) {
      // Case C (triple root)
      res[0] = cardanoMethod(a, b, p, q);
      res[1] = cardanoMethod(a, b, p, q);
      res[2] = cardanoMethod(a, b, p, q);
    } else if (p != 0) {
      // Case D (double root + single root)
      res[0] = cardanoMethod(a, b, p, q);
      res[1] = Math.cbrt(q / 2) - b / (3 * a);
      res[2] = Math.cbrt(q / 2) - b / (3 * a);
    }
  }
  res = res.sort().reverse();
  res[3] = p;
  res[4] = q;
  res[5] = discriminant;
  return res;
}

function trigonometricMethod(
  a: number,
  b: number,
  p: number,
  q: number,
): number[] {
  const rval: number[] = [];
  const theta: number =
    (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));
  rval[0] = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
  rval[1] =
    2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) - b / (3 * a);
  rval[2] =
    2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) - b / (3 * a);
  return rval;
}

function cardanoMethod(a: number, b: number, p: number, q: number): number {
  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);

  // If discriminant is slightly negative due to precision, treat as 0
  const sqrtD: number = Math.sqrt(Math.max(0, discriminant));

  const u: number = Math.cbrt(-q / 2 + sqrtD);
  const v: number = Math.cbrt(-q / 2 - sqrtD);

  return u + v - b / (3 * a);
}
