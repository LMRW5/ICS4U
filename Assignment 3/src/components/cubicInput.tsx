import { useRef } from "react";
import type { equationProps, inputProps } from "../utils/types";

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
    const nextTerm: equationProps = {
      a: Number(aRef.current.value),
      b: Number(bRef.current.value),
      c: Number(cRef.current.value),
      d: Number(dRef.current.value),
    };

    setHistory([...history, nextTerm]);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Cubic Solver</h1>

      <form
        className="flex items-end gap-4 bg-white border border-gray-300 p-4 rounded-xl shadow-sm"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1 text-sm">a-value:</label>
          <input
            type="number"
            ref={aRef}
            defaultValue={0}
            className="w-24 px-2 py-1 rounded-md border border-gray-300 bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={(e) => {
              setA(Number(e.currentTarget.value));
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-1 text-sm">b-value:</label>
          <input
            type="number"
            ref={bRef}
            defaultValue={0}
            className="w-24 px-2 py-1 rounded-md border border-gray-300 bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={(e) => {
              setB(Number(e.currentTarget.value));
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-1 text-sm">c-value:</label>
          <input
            type="number"
            ref={cRef}
            defaultValue={0}
            className="w-24 px-2 py-1 rounded-md border border-gray-300 bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={(e) => {
              setC(Number(e.currentTarget.value));
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-1 text-sm">d-value:</label>
          <input
            type="number"
            ref={dRef}
            defaultValue={0}
            className="w-24 px-2 py-1 rounded-md border border-gray-300 bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={(e) => {
              setD(Number(e.currentTarget.value));
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold 
             px-4 py-2 rounded-lg transition-transform duration-150 
             hover:-translate-y-1 cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}
