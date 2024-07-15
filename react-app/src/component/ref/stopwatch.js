import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[time,setTime]= useState(null);
    const[now,setNow] = useState(null);
    const intervalRef = useRef(null);
    let secondsPassed = 0;
    const handleStart = ()=>{
        setTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setNow(Date.now())
        }, 10);
    }
    const handelStop = ()=>{
      clearInterval(intervalRef.current);
    }
    if(time != null && now != null){
        secondsPassed = (now - time)/ 1000;
    }
  return (
    <div>
      <h1>{`time passed: ${secondsPassed.toFixed(3)}`}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handelStop}>stop</button>
    </div>
  )
}

export default StopWatch
