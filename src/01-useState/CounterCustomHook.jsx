import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = ({ initialCounterValue, increment }) => {
    const initialValues = {
        initialCounterValue,
        increment
    }
    const { counter, incrementDefault, incrementCounter, decrementCounter, resetCounter } = useCounter(initialValues);

    return (
        <>
            <h1>Counter with custom hook</h1>

            <h2>Counter: { counter } </h2>

            <hr />

            <button
                className="btn btn-primary"
                onClick={incrementCounter}
            >
                +{increment ? increment : incrementDefault}
            </button>

            <button
                className="btn btn-primary"
                onClick={decrementCounter}
            >
                -{increment ? increment : incrementDefault}
            </button>

            <button
                className="btn btn-primary"
                onClick={resetCounter}
            >
                Reset
            </button>


        </>
    )
}
