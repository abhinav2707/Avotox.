import "./App.css";
import React, { useState } from "react";
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  

  const handleBmi = (e) => {
    e.preventDefault();
    let val = Number(weight)/((Number(height) * Number(height)));
    val = Math.round(val*10)/10;
    console.log('weight:',weight);
    console.log(height);
    console.log(val);
    setBmi(val);
  };

  return (
    <div className="main-container">
      <h1>BMI Calculator</h1>
      <form className="form-inp">
        <input
          type="number"
          className="input"
          placeholder="weight*(in kg)"
          name="weight"
          
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <input
          type="number"
          className="input"
          placeholder="height"
          name="height"
          
          onChange={(e) => setHeight(e.target.value)}
        ></input>
      
      <button className="btn" onClick={handleBmi} type="submit">Submit</button>
      </form>
      <ResultDisplay bmi={bmi} />
    </div>
  );
}

export default App;
