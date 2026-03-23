export function cubicInput(){
    return <>
    <h1>Cubic Solver</h1>
      <form className="inputForm">
        <label htmlFor="a">a:</label>
        <input type="number" id="a" required></input>
        <label htmlFor="b">b:</label>
        <input type="number" id="b" required></input>
        <label htmlFor="c">c:</label>
        <input type="number" id="c" required></input>
        <label htmlFor="d">d:</label>
        <input type="number" id="d" required></input>
        <input type="submit" id="submittedform" value="Submit" disabled/>
      </form>
    </>;
}