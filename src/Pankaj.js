
import React,{ useState} from "react";
function BMI(){
  const [state,setState]=useState({
    weight:"",
    height:"",
    result:""
  });
 const handleEvent=(event)=>{
  if(event){
   
    setState({...state,[event.target.name]:event.target.value})
    
  }
 }
 const calculateBMI = () => {
let height=state.height;
let weight=state.weight;
  const formValid = height > 0 && weight > 0;

  if (!formValid) {
    return;
  }
  const bmi =weight / (height)^2;
  setState({...state,result:bmi})
};

  return(
    <div>
    <h1>BMI Calculator</h1>
    <form>
       <input
              type="number"
              className="input"
              placeholder="weight* in kg"
              name="weight"
              value={state.weight}
              onChange={handleEvent}
            ></input>
        <input
              type="number"
              className="input"
              placeholder="height* in cm"
              name="height"
              value={state.height}
              onChange={handleEvent}
            ></input>
    </form>
    <button type="submit" onClick={calculateBMI}>Calculate BMI</button>
    <h3>{state.result}</h3>
    </div>
    
    
  )
}
export default BMI;