import React, {useState} from "react";


function Toggle() {
  const  [isOn, setIsOn] = useState(false);
  function  toggle() {
    setIsOn(!isOn);
  }
  const color = isOn ? "green" : "red";
  return isOn ? <button style={{color:'white', backgroundColor: `${color}`}} onClick={toggle}>ON</button> : 
  <button style={{color:'white', backgroundColor: `${color}`}} onClick={toggle}>OFF</button>;
}

export default Toggle;
