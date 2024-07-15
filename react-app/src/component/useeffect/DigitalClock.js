import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const[cTime,setTime]= useState(new Date().toLocaleString());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleString());
        },1000)
    })
  return (
    <div>
      <h2>{cTime}</h2>
    </div>
  )
}

export default DigitalClock
