import "./App.css";
import React, { useState } from "react";

function App() {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  

 
  let output;
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form>
        <input
          type="number"
          className="input"
          placeholder="weight*(in meter)"
          name="weight"
          
          onChange={(e) => setHeight(e.target.value)}
        ></input>
        <input
          type="number"
          className="input"
          placeholder="height*"
          name="height"
          
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </form>
      <button onClick={handleBmi}>Submit</button>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
    </div>
  );
}

export default App;
