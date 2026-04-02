import { useState } from "react";
import type { equationProps } from "./utils/types";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicHistory } from "./components/CubicHistory";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { TurningPoints } from "./components/TurningPoints";

function App() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);
  const [c, setC] = useState<number>(1);
  const [d, setD] = useState<number>(1);
  const [history, setHistory] = useState<equationProps[]>([]);
  return (
    <>
      <CubicInput
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        setHistory={setHistory}
        history={history}
      />
      <CubicEquation a={a} b={b} c={c} d={d} />
      <CubicTable a={a} b={b} c={c} d={d} />
      <CubicGraph a={a} b={b} c={c} d={d} />
      <CubicHistory historyList={history} />
      <TurningPoints a={a} b={b} c={c} d={d} />
    </>
  );
}

export default App;
