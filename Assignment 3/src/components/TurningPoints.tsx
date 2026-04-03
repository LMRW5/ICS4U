import type { equationProps } from "../utils/types";
import { localMaxMin } from "../utils/localMaxMin";

export function TurningPoints({ a, b, c, d }: equationProps) {
  const points = localMaxMin(a, b, c, d);

  return (
    <div className="inline-block">
    <h2 className="text-center font-semibold text-l mb-2">Turning Points</h2>
      <div className="flex gap-6 items-start justify-start">

        <table className="w-[400px] border-2 border-gray rounded-xl bg-orange-400 p-2">
          <tbody className="flex flex-col bg-white p-2 rounded-md gap-2">

            {/* Header row */}
            <tr className="flex gap-2">
              <th className="flex-1 bg-gray-400 py-2 rounded-md text-center">
                Type
              </th>
              <th className="flex-1 bg-gray-400 py-2 rounded-md text-center">
                X
              </th>
              <th className="flex-1 bg-gray-400 py-2 rounded-md text-center">
                Y
              </th>
            </tr>

            {/* Min Point */}
            <tr className="flex gap-2">
              <th className="flex-1 bg-gray-400 py-2 rounded-md text-center">
                Minimum
              </th>
              <td className="flex-1 bg-gray-100 py-2 text-center">
                {points[0].x.toFixed(3)}
              </td>
              <td className="flex-1 bg-gray-100 py-2 text-center">
                {points[0].y.toFixed(3)}
              </td>
            </tr>

            {/* Max Point */}
            <tr className="flex gap-2">
              <th className="flex-1 bg-gray-400 py-2 rounded-md text-center">
                Maximum
              </th>
              <td className="flex-1 bg-gray-100 py-2 text-center">
                {points[1].x.toFixed(3)}
              </td>
              <td className="flex-1 bg-gray-100 py-2 text-center">
                {points[1].y.toFixed(3)}
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}
