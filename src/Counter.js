import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    return (
         <div className="App">
            <h3>This is counter app</h3>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
