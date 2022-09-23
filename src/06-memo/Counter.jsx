import { memo } from "react";

export const Counter = memo(({value}) => {

    console.log('Just rendered <Counter />');

    return (
        <p>Counter: {value} </p>
    )
})
