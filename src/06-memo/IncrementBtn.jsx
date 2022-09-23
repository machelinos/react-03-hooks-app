import { memo } from "react";

export const IncrementBtn = memo(({increment}) => {
    console.log('Just rendered button');

    return (
        <button
            className="btn btn-primary"
            onClick={increment}
        >
            Increment
        </button>
    )
})
