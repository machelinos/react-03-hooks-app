import { useEffect, useState } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y:0});

    useEffect(()=>{
        console.log('fired mousemove from message component');

        const onMouseMove = ({x, y})=>{
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return ()=>{
            console.log('removing event listener');
            window.removeEventListener('mousemove',onMouseMove);
        }
    }, []);


    return (
    <>
        <p className="mt-2">Test message...</p>
        <p>Chords: {JSON.stringify(coords)}</p>
    </>
  )
}
