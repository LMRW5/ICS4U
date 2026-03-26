import { useRef } from "react";
import type { historyObject, inputProps } from "../types";

export function CubicInput({
  setA,
  setB,
  setC,
  setD,
  setHistory,
  history,
}: inputProps) {
  const aRef = useRef<HTMLInputElement | null>(null);
  const bRef = useRef<HTMLInputElement | null>(null);
  const cRef = useRef<HTMLInputElement | null>(null);
  const dRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit() {
    if (!aRef.current || !bRef.current || !cRef.current || !dRef.current) {
      return;
    }
    const nextTerm: historyObject = {
      a: Number(aRef.current.value),
      b: Number(bRef.current.value),
      c: Number(cRef.current.value),
      d: Number(dRef.current.value),
    };
    setHistory([...history, nextTerm]);
  }

  return (
    <>
      <h1>Cubic Solver</h1>
      <form
        className="inputForm"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="a">a:</label>
        <input
          type="number"
          ref={aRef}
          id="a"
          onChange={(event) => {
            setA(Number(event.currentTarget.value));
          }}
        ></input>
        <label htmlFor="b">b:</label>
        <input
          type="number"
          ref={bRef}
          id="b"
          onChange={(event) => {
            setB(Number(event.currentTarget.value));
          }}
          required
        ></input>
        <label htmlFor="c">c:</label>
        <input
          type="number"
          ref={cRef}
          id="c"
          required
          onChange={(event) => {
            setC(Number(event.currentTarget.value));
          }}
        ></input>
        <label htmlFor="d">d:</label>
        <input
          type="number"
          ref={dRef}
          id="d"
          required
          onChange={(event) => {
            setD(Number(event.currentTarget.value));
          }}
        ></input>
        <input type="submit" id="submittedform" value="Submit" />
      </form>
    </>
  );
}
