export type InputProps = {
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;
  setHistory: (value: EquationProps[]) => void;
  history: EquationProps[];
}

export type EquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
}

export type HistoryProps = {
  historyList: EquationProps[];
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;

}