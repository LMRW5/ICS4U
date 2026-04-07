import { useState } from "react";
import type { EquationProps } from "./utils/types";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicHistory } from "./components/CubicHistory";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { TurningPoints } from "./components/TurningPoints";

function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const [history, setHistory] = useState<EquationProps[]>([]);
  return (
    <>
      <CubicInput
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        setHistory={setHistory}
        history={history}
        a={a} b={b} c={c} d={d}
      />
      <CubicEquation a={a} b={b} c={c} d={d} />
      <div className="flex justify-center items-start gap-10 mt-5 mb-5">
        <div className="flex flex-col items-center gap-6 mt-auto mb-auto">
          <CubicTable a={a} b={b} c={c} d={d} />
          <TurningPoints a={a} b={b} c={c} d={d} />
        </div>

        <div className="flex justify-center">
          <CubicGraph a={a} b={b} c={c} d={d} />
        </div>

        <div className="flex justify-center">
          <CubicHistory historyList={history} setA={setA}
        setB={setB}
        setC={setC}
        setD={setD} />
        </div>
      </div>
    </>
  );
}

export default App;
