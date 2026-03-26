import { useState } from "react";
import type { historyObject } from "./types";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicHistory } from "./components/CubicHistory";

function App() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);
  const [c, setC] = useState<number>(1);
  const [d, setD] = useState<number>(1);
  const [history, setHistory] = useState<historyObject[]>([]);
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
      <CubicHistory historyList = {history}/>
    </>
  );
}

export default App;
