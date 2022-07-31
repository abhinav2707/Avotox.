import "./App.css";
import React, { useState } from "react";



function App() {
  const [user, setUser] = useState({
    height: "",
    weight: "",
    
  });
  let name , value;

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  

  return (
  <div>
    <h1>BMI Calculator</h1>
    <form>
       <input
              type="number"
              className="input"
              placeholder="weight*"
              name="weight"
              value={user.weight}
              onChange={handleInputs}
            ></input>
        <input
              type=""
              className="input"
              placeholder="height*"
              name="height"
              value={user.height}
              onChange={handleInputs}
            ></input>
    </form>
    <button>Submit</button>
    </div>
    
  );
}

export default App;
