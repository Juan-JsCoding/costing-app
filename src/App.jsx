import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const [printTime, setPrintTime] = useState(0);
  const printTimePrice = printTime * 5;

  const [resinAmount, setResinAmount] = useState(0);
  const resinCost = resinAmount * 0.8;

  const [labourCost, setLabourCost] = useState(0);

  const workingPrice = printTimePrice + resinCost + labourCost + 10;
  const markup = workingPrice * 0.5;

  function handleSubmit() {
    setTotalPrice(Math.abs(workingPrice + markup));
  }

  function handleReset() {
    setTotalPrice(0);
    setPrintTime(0);
    setResinAmount(0);
    setLabourCost(0);
  }

  return (
    <div className="app">
      <h1>Costing App</h1>

      <div className="row">
        <p>Print Time</p>
        <input
          type="text"
          value={printTime}
          onChange={(e) => setPrintTime(Number(e.target.value))}
        />
      </div>

      <div className="row">
        <p>Resin Amount</p>
        <input
          type="text"
          value={resinAmount}
          onChange={(e) => setResinAmount(Number(e.target.value))}
        />
      </div>

      <div className="row">
        <p>Labour</p>
        <input
          type="text"
          value={labourCost}
          onChange={(e) => setLabourCost(Number(e.target.value))}
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleSubmit()}>Calc</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>

      <p>Total comes to: R{Math.round(totalPrice)}</p>
      {/* <p> {printTimePrice}</p>
      <p> {resinCost}</p>
      <p> {labourCost}</p>
      <p>{workingPrice}</p>
      <p>{markup}</p> */}
    </div>
  );
}

export default App;
