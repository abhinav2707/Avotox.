import React,{useEffect, useState} from "react";
function BMI(){
  const [state,setState]=useState({
    weight:"",
    height:""
  });
 const handleEvent=(event)=>{
  if(event){
   
    setState({...state,[event.target.name]:event.target.value})
    
  }
 }

  return(
    <div>
    <h1>BMI Calculator</h1>
    <form>
       <input
              type="text"
              className="input"
              placeholder="weight*"
              name="weight"
              value={state.weight}
              onChange={handleEvent}
            ></input>
        <input
              type="text"
              className="input"
              placeholder="height*"
              name="height"
              value={state.height}
              onChange={handleEvent}
            ></input>
    </form>
    </div>
    
    
  )
}
export default BMI;