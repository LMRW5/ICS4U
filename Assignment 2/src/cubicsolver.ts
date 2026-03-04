export function cubicRoot(a: number, b: number, c: number, d: number) {
  let res = new Array();
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);
  const imaginary = Math.sqrt(-1);
  if (discriminant < 0) {
    // Case A (3 real roots)
    res = trigonomatricMethod(a, b, p, q);
  } else if (discriminant > 0) {
    // Case B (1 real root and 2 imaginary)
    res[0] = cardanoMethod(a, b, p, q).toFixed(2);
    res[1] = (-1 + imaginary * Math.sqrt(3)) / 2;
    res[2] = (-1 - imaginary * Math.sqrt(3)) / 2;
  } else {
    if (p == 0 && q == 0) {
      // Case C (triple root)
      res[0] = cardanoMethod(a, b, p, q).toFixed(2);
      res[1] = cardanoMethod(a, b, p, q).toFixed(2);
      res[2] = cardanoMethod(a, b, c, q).toFixed(2);
    } else if (p != 0) {
      // Case D (double root + single root)
      res[0] = cardanoMethod(a, b, p, q).toFixed(2);
      res[1] = (Math.cbrt(q / 2) - b / (3 * a)).toFixed(2);
      res[2] = (Math.cbrt(q / 2) - b / (3 * a)).toFixed(2);
    }
  }
  res[3] = p.toFixed(2);
  res[4] = q.toFixed(2);
  res[5] = discriminant.toFixed(2);
  return res;
}

function trigonomatricMethod(a: number, b: number, p: number, q: number) {
  const rval = new Array();
  const theta =
    (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));
  rval[0] = (2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a)).toFixed(2);
  rval[1] = (
    2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) -
    b / (3 * a)
  ).toFixed(2);
  rval[2] = (
    2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) -
    b / (3 * a)
  ).toFixed(2);
  return rval;
}

function cardanoMethod(a: number, b: number, p: number, q: number) {
  return (
    Math.cbrt(
      -q / 2 + Math.sqrt((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3)),
    ) +
    Math.cbrt(
      -q / 2 - Math.sqrt((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3)),
    ) -
    b / (3 * a)
  );
}
