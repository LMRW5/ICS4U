import { cubicRoot } from "../utils/cubicsolver";
import type { equationProps } from "../utils/types";

export function CubicTable({ a, b, c, d }: equationProps) {
  const roots = cubicRoot(a, b, c, d);

  return (
    <div className="inline-block mt-4">
      <div className="flex gap-4 items-start justify-start">

        <table className="w-[400px] border-2 border-gray rounded-xl bg-orange-400 p-1">
          <tbody className="flex flex-col bg-white p-1 rounded-md gap-1">

            {/* Top section */}
            <tr className="flex gap-1">
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                p
              </th>
              <td className="flex-1 bg-gray-100 py-1 text-center">
                {roots[3].toFixed(5)}
              </td>
            </tr>

            <tr className="flex gap-1">
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                q
              </th>
              <td className="flex-1 bg-gray-100 py-1 text-center">
                {roots[4].toFixed(5)}
              </td>
            </tr>

            <tr className="flex gap-1">
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                Discriminant
              </th>
              <td className="flex-1 bg-gray-100 py-1 text-center">
                {roots[5].toFixed(5)}
              </td>
            </tr>

            {/* Header row */}
            <tr className="flex gap-1 mt-1">
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                Value
              </th>
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                x
              </th>
              <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                y
              </th>
            </tr>

            {/* Roots */}
            {[0, 1, 2].map((i) => (
              <tr key={i} className="flex gap-1">
                <th className="flex-1 bg-gray-400 py-1 rounded-md text-center">
                  {`Root ${i + 1}`}
                </th>
                <td className="flex-1 bg-gray-100 py-1 text-center">
                  {isFinite(roots[i]) ? roots[i].toFixed(2) : "Complex"}
                </td>
                <td className="flex-1 bg-gray-100 py-1 text-center">
                  {isFinite(roots[i]) ? "0" : "Complex"}
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}
