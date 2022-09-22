import PropTypes from "prop-types";

export const Quote = ({quote, author}) => {
  return (
        <figure className="text-end">
            <blockquote className="blockquote">
                { quote }
            </blockquote>

            <figcaption className="blockquote-footer">{ author }</figcaption>
        </figure>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
