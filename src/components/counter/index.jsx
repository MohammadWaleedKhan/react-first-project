import { useState } from "react";

const Counter = () =>{

    const [counter, setCounter] = useState(0);
    
    const increase = () =>{
        setCounter( counter + 1)
    };

    const decrease = () =>{
        setCounter( counter - 1)
    };

    const reset = () =>{
        setCounter(0)
    }

    return <div className="Counter">
            <div>{counter}</div>
            <button onClick={increase}>add</button>
            <button onClick={decrease}>sub</button>
            <button onClick={reset}>sub</button>
    </div>

}


export default Counter;