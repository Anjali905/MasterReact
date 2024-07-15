
import { useState } from 'react';
function heavyProcess(){
    console.log("calling heavy process")
    return 0;
}
export const LazyState = ()=>{
   
    const[count, setCount] = useState(()=>heavyProcess());
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>increment</button>
        </div>
    )
}