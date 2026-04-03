import type { historyProps } from "../utils/types";

export function CubicHistory({ historyList }: historyProps) {
  return (
    <div className="w-[400px] mt-6">
      <h2 className="text-center font-semibold text-lg mb-2">History</h2>

      <div className="border-2 border-gray-400 rounded-xl bg-black-400 p-3">
        {/* Header stays fixed */}
        <table className="w-full">
          <thead>
            <tr className="bg-gray-400 text-center rounded-md">
              <th className="py-2 px-3">a</th>
              <th className="py-2 px-3">b</th>
              <th className="py-2 px-3">c</th>
              <th className="py-2 px-3">d</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable body with fixed height even when empty */}
        <div className="bg-white rounded-md h-[350px] overflow-y-auto">
          <table className="w-full">
            <tbody>
              {historyList.map((element, i) => (
                <tr
                  key={i}
                  className="text-center border-b last:border-none border-gray-300"
                >
                  <td className="py-2">{element.a}</td>
                  <td className="py-2">{element.b}</td>
                  <td className="py-2">{element.c}</td>
                  <td className="py-2">{element.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}
