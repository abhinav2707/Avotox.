import React, { useEffect, useState } from 'react'
import './result.css';

const ResultDial = ({bmi}) => {

  const [pos, setPos] = useState('0%');

  useEffect(() => {
    if (bmi <= 17.5) {
      setPos('1.5%');
    } else if (bmi >= 39.9) {
      setPos('98.9%');
    } 
    else {
      let newPos = ((bmi - 17.5)/22.2)*100;
      setPos(newPos+'%');
    }
  })

  return (
    <div>
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
    </div>
  )
}

export default ResultDial