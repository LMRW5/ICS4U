import './style.css'
import { cubicRoot } from './cubicsolver.ts'


const btn = document.getElementById("submittedform") as HTMLInputElement;

function handleClick() {
  const a = Number((document.getElementById("a")as HTMLInputElement).value);
  const b = Number((document.getElementById("b")as HTMLInputElement).value);
  const c = Number((document.getElementById("c")as HTMLInputElement).value);
  const d = Number((document.getElementById("d")as HTMLInputElement).value);
  console.log(a)
  console.log(cubicRoot(a,b,c,d))
  const roots = cubicRoot(a,b,c,d);
  (document.getElementById("Root1") as HTMLTableCellElement).textContent = roots[0];
  (document.getElementById("Root2")as HTMLTableCellElement).textContent = roots[1];
  (document.getElementById("Root3")as HTMLTableCellElement).textContent = roots[2];
  (document.getElementById("p")as HTMLTableCellElement).textContent = roots[3];
  (document.getElementById("q")as HTMLTableCellElement).textContent = roots[4];
  (document.getElementById("discriminant")as HTMLTableCellElement).textContent = roots[5];


}

btn.addEventListener("click", handleClick());



