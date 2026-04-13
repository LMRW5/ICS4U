import type { EquationProps, HistoryProps } from "../utils/types";

export function CubicHistory({ historyList, setA, setB, setC, setD }: HistoryProps) {
  return (
    <div className="w-[400px] mt-6">
      <h2 className="text-center font-semibold text-lg mb-2">History</h2>

      <div className="border-2 border-gray-400 rounded-xl bg-black-400 p-3">
        <table className="w-full table-fixed"> 
          <thead>
            <tr className="bg-gray-400 text-center rounded-md">
              <th className="w-1/4 py-2 px-3">a</th>
              <th className="w-1/4 py-2 px-3">b</th>
              <th className="w-1/4 py-2 px-3">c</th>
              <th className="w-1/4 py-2 px-3">d</th>
            </tr>
          </thead>
        </table>

        <div className="bg-white rounded-md h-[350px] overflow-y-auto">
          <table className="w-full table-fixed"> 
            <tbody>
              {historyList.map((element:EquationProps, i: number) => (
                <tr
                  key={i}
                  className="text-center border-b last:border-none border-gray-300 hover:bg-gray-200 cursor-pointer"
                  onClick={()=>{
                    setA(element.a)
                    setB(element.b)
                    setC(element.c)
                    setD(element.d)
                  }}>
                  <td className="w-1/4 py-2">{element.a}</td>
                  <td className="w-1/4 py-2">{element.b}</td>
                  <td className="w-1/4 py-2">{element.c}</td>
                  <td className="w-1/4 py-2">{element.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}