import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { cubicRoot } from './cubicsolver.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <form>
    <label for="a">a:</label><br>
    <input type="number" id = "a"></input><br>
    <label for="b">b:</label><br>
    <input type="number" id = "b"></input><br>
    <label for="c">c:</label><br>
    <input type="number" id = "c"></input><br>
    <label for="d">d:</label><br>
    <input type="number" id = "d"></input><br>
    <input type="submit" value="Submit">
    </form>
  </div>
`

