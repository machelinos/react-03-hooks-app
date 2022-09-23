import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleBtnClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <input
                className="form-control"
                placeholder="Ingresa el nombre..."
                ref={inputRef}
                type="text"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={handleBtnClick}
            >Focus!</button>
        </>
    )
}
