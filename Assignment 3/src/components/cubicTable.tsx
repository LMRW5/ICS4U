import { cubicRoot } from "../cubicsolver";
import { useRef } from "react";
import type { equationProps } from "../types";
export function CubicTable({a,b,c,d}: equationProps){
  const root1xRef = useRef<HTMLTableCellElement | null>(null)
  const root1yRef = useRef<HTMLTableCellElement | null>(null)
  const root2xRef = useRef<HTMLTableCellElement | null>(null)
  const root2yRef = useRef<HTMLTableCellElement | null>(null)
  const root3xRef = useRef<HTMLTableCellElement | null>(null)
  const root3yRef = useRef<HTMLTableCellElement | null>(null)
  const xrefs = [root1xRef, root2xRef, root3xRef]
  const yrefs = [root1yRef, root2yRef, root3yRef]

  const pRef = useRef<HTMLTableCellElement | null>(null)
  const qRef = useRef<HTMLTableCellElement | null>(null)
  const discriminantRef = useRef<HTMLTableCellElement | null>(null)

  const roots: number[] = cubicRoot(a, b, c, d);

  for (let i = 0; i < 3; i++) {
    const xCell = xrefs[i];
    const yCell = yrefs[i];

    if (isFinite(roots[i])) {
      xCell.current = roots[i].toFixed(2);
      yCell.current = "0";
    } else {
      xCell.current = "Complex";
      yCell.current = "Complex";
    };
  };

  pRef.current = roots[3].toFixed(5);
  qRef.current = roots[4].toFixed(5);
  discriminantRef.current= roots[5].toFixed(5);

  return(
   <> 
    <table id="results">
      <div>
      <tr>
        <th>p</th>
        <td ref={pRef}></td>
      </tr>
      <tr>
        <th>q</th>
        <td ref={qRef}></td>
      </tr>
      <tr>
        <th>Discriminant</th>
        <td ref={discriminantRef}></td>
      </tr>
    </div>
      <tr>
        <th>Value</th>
        <th>x</th>
        <th>y</th>

      </tr>
      <tr>
        <th>Root 1</th>
        <td ref={root1xRef}></td>
        <td ref={root1yRef}></td>
      </tr>
      <tr>
        <th>Root 2</th>
        <td ref={root2xRef}></td>
        <td ref={root2yRef}></td>

      </tr>
      <tr>
        <th>Root 3</th>
        <td ref={root3xRef}></td>
        <td ref={root3yRef}></td>

      </tr>
    </table>
    </>);
}