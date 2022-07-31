import React from "react";
import React from 'react'

export default function calculation() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);
  
    const calculateBMI = (event) => {
      event.preventDefault();
      const formValid = height > 0 && weight > 0;
  
      if (!formValid) {
        console.error("Enter valid inputs");
        return;
      }
      const bmi = weight / (height) ** 2;
      setBmi(bmi.toFixed(3));
    };
   
    return (
      <>
         <div className="App">
        <form onSubmit={calculateBMI}>
          <div>
            <label>Height(meters)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
  
          <div>
            <label>Mass(kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
  
          <button type="submit">calculate</button>
        </form>
        <p>BMI: {bmi}</p>
      </div>
      </>
    )
  
}
