import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({quote, author}) => {
    const quoteRef = useRef();

    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        const {width, height} = quoteRef.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [])

  return (
        <>
            <figure className="text-end" style={{display: 'flex'}}>
                <blockquote className="blockquote" ref={quoteRef}>
                    { quote }
                </blockquote>

                <figcaption className="blockquote-footer">{ author }</figcaption>
            </figure>

            <p>{ JSON.stringify({boxSize})}</p>
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
