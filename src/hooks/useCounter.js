import { useState } from "react"

export const useCounter = ({ initialCounterValue = 10, increment = 1 }) => {
    const [counter, setCounter] = useState(initialCounterValue);
    
    const incrementCounter = () => {
        setCounter(counter+increment);
    }

    const decrementCounter = () => {
        setCounter(counter-increment);
    }

    const resetCounter = () => {
        setCounter(initialCounterValue);
    }

    return {
        counter,
        incrementDefault: increment,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}
