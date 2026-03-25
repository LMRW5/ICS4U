import type { historyObject } from "../types";

export function CubicHistory(history: historyObject[]) {
  return (
    <>
      <table>
        <thead>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
        </thead>
        <tbody>
          {history.map((element) => (
            <tr>
              <td>{element.a}</td>
              <td>{element.b}</td>
              <td>{element.c}</td>
              <td>{element.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
