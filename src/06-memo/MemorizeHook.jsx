import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationsNumber) => {
    for(let i=0; i < iterationsNumber; i++){
        console.log('Here we go...');
    }

    return `Iterations done: ${iterationsNumber}`;
}

export const MemorizeHook = () => {
    const {counter, incrementCounter} = useCounter(1000);

    const [show, setShow] = useState(true);

    const memorizedHeavyStuff = useMemo(() => heavyStuff(counter), [counter]);

    const handleShowClick = ()=>{
        setShow(!show);
    }

    return (
    <>
        <h1>Memorize</h1>
        <hr />

        <p>Counter: {counter}</p>

        <p>{memorizedHeavyStuff}</p>

        <button
            className="btn btn-primary"
            onClick={incrementCounter}
        >
            +1
        </button>

        <button
            className="btn btn-primary mt-2"
            onClick={handleShowClick}
        >
            SetShow {show.toString()}
        </button>

    </>
    )
}
