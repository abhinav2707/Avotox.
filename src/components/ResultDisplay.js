import React, { useEffect, useState } from 'react'
import './ResultDisplay.css';

const ResultDial = ({bmi}) => {

  const [pos, setPos] = useState('0%');
  const [type, setType] = useState('l');

  useEffect(() => {
    if (bmi <= 17.5) {
      setPos('1.5%');
      setType('Underweight')
    } else if (bmi >= 39.9) {
      setPos('98.9%');
      setType('Obese')
    } 
    else {
      let newPos = ((bmi - 17.5)/22.2)*100;
      setPos(newPos+'%');
      if (bmi < 18.5) {
        setType('Underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setType('Healthy');
      } else if (bmi >= 25 && bmi < 30) {
        setType('Overweight');
      } else if (bmi >= 30) {
        setType('Obese');
      }
    }
  })

  let displayVal = bmi===0?'none':'flex';
  return (
    <div className='display-container' style={{display: displayVal}}>
    <div className='bmi-value'>
      <h2 className='bmi'>
      BMI: {bmi}</h2>
    </div>
    <div className='displaybar'>
      <div className='underweight'></div>
      <div className='healthy'></div>
      <div className='overweight'></div>
      <div className='obese'></div>
      <div className='pointer' style={{left: pos}}>
        <div className='head'></div>
        <div className='tail'></div>
      </div>
    </div>
    <div className='bmi-type'>
      {type}
    </div>
    </div>
  )
}

export default ResultDial