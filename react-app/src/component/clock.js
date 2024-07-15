import React, { useState } from 'react'

export const Clock = () => {
    const [clock, setClock] = useState({
        cnt:0,
        flag:false
    });
  return (
    <div style={{display:'flex', flexDirection:"column" , alignItems:"center", justifyContent:"center"}}>
    <span>Counter:{clock.cnt}</span> 
      <button onClick={()=>setClock({...clock , cnt: clock.cnt + 1})}>+</button>
      <button onClick={()=>setClock({...clock , cnt: clock.cnt - 1})}>-</button>
      <span>flag: {clock.flag.toString()}</span>
      <button onClick={()=>setClock({...clock, flag: !clock.flag})}>Toggle</button>
    </div>
  )
}

