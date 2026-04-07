export type inputProps = {
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;
  setHistory: (value: equationProps[]) => void;
  history: equationProps[];
}

export type equationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
}

export type historyProps = {
  historyList: equationProps[];
}