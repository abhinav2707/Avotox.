
import React,{ useState} from "react";
import ResultDial from './ankan/resultDisp'
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
  const bmi =weight / Math.pow(height,2);
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
            <br/>
        <input
              type="number"
              className="input"
              placeholder="height* in cm"
              name="height"
              value={state.height}
              onChange={handleEvent}
            ></input>
    </form>
    <button type="submit" onClick={calculateBMI} >Calculate BMI</button>
    <h3>You BMI is {state.result}</h3>
    <ResultDial bmi={state.result}/>
    </div>
    
    
  )
}
export default BMI;