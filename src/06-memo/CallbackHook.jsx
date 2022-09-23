import { useCallback, useState } from "react"
import { IncrementBtn } from "./IncrementBtn";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(()=>{
        setCounter(currentCounter=>currentCounter+1);
    },[]);


  return (
    <>
        <h1>useCallback Hook</h1>
        <hr />

        <p>Counter: {counter}</p>

        <IncrementBtn increment={increment} />
    </>
  )
}
