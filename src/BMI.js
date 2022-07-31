import React,{useState} from "react";
import './BMI.css';

function BMI(){
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [result, setResult] = useState('');
    const calculateBMI = (event) => {
        event.preventDefault();
        const formValid = height > 0 && weight > 0;
    
        if (!formValid) {
          console.log("Enter valid inputs");
          return;
        }
        const bmi = weight / (height) ** 2;
        setBmi(bmi.toFixed(3));
        setResult(checkBmi);
      };

      const checkBmi = () => {
        if(bmi <= 18.5) {
            setResult("Underweight")
        } else if(bmi <18.5 && bmi >=24.9 ){
            setResult("Normal weight")
        } else if(bmi <25 && bmi >=29.9) {
            setResult("Overweight")
        } else {
            setResult("Obesity")
        }
      }

  return(
    <div className="App">
    <h1>BMI Calculator</h1>
    <form  onSubmit={calculateBMI} className="form">
        <input value={weight} placeholder="weight" onChange={(e) => setWeight(e.target.value)} />
        <br/>
        <input value={height} placeholder="height" onChange={(e) => setHeight(e.target.value)} />
        <br/>
        <button type="submit" onClick={calculateBMI}>Calculate BMI</button>
    </form>
    <h3>{result}</h3>
    </div>
    
    
  )
}
export default BMI;
