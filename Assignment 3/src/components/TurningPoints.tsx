import type { equationProps } from "../utils/types";
import { localMaxMin } from "../utils/localMaxMin";
export function TurningPoints({a,b,c,d}:equationProps){
    const points = localMaxMin(a,b,c,d);
    return <>
    <table>
        <header>
            <tr>
                <th>Min Point X</th>
                <th>Min Point Y</th>
                
            </tr>
        </header>
        <tbody>
            <tr>
                <td>{points[0].x.toFixed(3)}</td>
                <td>{points[0].y.toFixed(3)}</td>
            </tr>
        </tbody>
    </table>
    
    <table>
        <header>
            <tr>
                <th>Max Point X</th>
                <th>Max Point Y</th>
            </tr>
        </header>
        <tbody>
            <tr>
                <td>{points[1].x.toFixed(3)}</td>
                <td>{points[1].y.toFixed(3)}</td>
            </tr>
        </tbody>
    </table></>
}