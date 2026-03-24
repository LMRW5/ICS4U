import {historyObject} from "../App.tsx"
type inputProps = {
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;
  setHistory: (value: historyObject) => void;
}
export function cubicInput({setA,setB, setC, setD}:inputProps) {
  return <>
    <h1>Cubic Solver</h1>
    <form className="inputForm">
      <label htmlFor="a">a:</label>
      <input type="number" id="a" onChange={(event) => { setA(Number(event.currentTarget.value)) }}></input>
      <label htmlFor="b">b:</label>
      <input type="number" id="b" onChange={(event) => { setB(Number(event.currentTarget.value)) }}required></input>
      <label htmlFor="c">c:</label>
      <input type="number" id="c" required onChange={(event) => { setC(Number(event.currentTarget.value)) }}></input>
      <label htmlFor="d">d:</label>
      <input type="number" id="d" required onChange={(event) => { setD(Number(event.currentTarget.value)) }}></input>
      <input type="submit" id="submittedform" value="Submit" disabled />
    </form>
  </>;
}