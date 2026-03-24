import { useState } from "react"
type historyObject = {
  a: number;
  b: number;
  c: number;
  d: number;
}

function App() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);
  const [c, setC] = useState<number>(1);
  const [d, setD] = useState<number>(1);
  const [history, setHistory] = useState<historyObject[]>([]);
  return (
    <>

    </>
  )
}

export default App
