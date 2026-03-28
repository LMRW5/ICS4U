import { cubicRoot } from "../cubicsolver";
import type { equationProps } from "../types";
export function CubicTable({a,b,c,d}: equationProps){
const roots = cubicRoot(a, b, c, d);

return (
  <table id="results">
    <tbody>
      <tr>
        <th>p</th>
        <td>{roots[3].toFixed(5)}</td>
      </tr>
      <tr>
        <th>q</th>
        <td>{roots[4].toFixed(5)}</td>
      </tr>
      <tr>
        <th>Discriminant</th>
        <td>{roots[5].toFixed(5)}</td>
      </tr>

      <tr>
        <th>Value</th>
        <th>x</th>
        <th>y</th>
      </tr>

      {[0, 1, 2].map((i) => (
        <tr key={i}>
          <th>{`Root ${i + 1}`}</th>
          <td>
            {isFinite(roots[i]) ? roots[i].toFixed(2) : "Complex"}
          </td>
          <td>
            {isFinite(roots[i]) ? "0" : "Complex"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
}