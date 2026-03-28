export interface inputProps{
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;
  setHistory: (value: equationProps[]) => void;
  history: equationProps[];
}

export interface equationProps{
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface historyProps{
  historyList: equationProps[];
}