import { useState } from "react";
import { useCounter } from "../hooks";
import { Counter } from "./Counter";

export const Memorize = () => {
    const {counter, incrementCounter} = useCounter(10);

    const [show, setShow] = useState(true);

    const handleShowClick = ()=>{
        setShow(!show);
    }

    return (
    <>
        <h1>Memorize</h1>
        <hr />

        <Counter value={counter} />

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
