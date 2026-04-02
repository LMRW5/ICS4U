import type { historyProps } from "../utils/types";

export function CubicHistory({ historyList }: historyProps) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
          </tr>
        </thead>
        <tbody>
          {historyList.map((element, i) => (
            <tr>
              <td key={"a" + i}>{element.a}</td>
              <td key={"b" + i}>{element.b}</td>
              <td key={"c" + i}>{element.c}</td>
              <td key={"d" + i}>{element.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
