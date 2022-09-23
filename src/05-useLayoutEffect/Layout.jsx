import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote, ErrorFetchMessage } from "../03-examples";


export const Layout = () => {
    const {counter, incrementCounter} = useCounter({initialCounterValue: 1}); 
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const {data, isLoading, hasError} = useFetch(url);

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            
            {
                isLoading ? (
                    <LoadingQuote />
                ) : (
                    <>
                        {
                            !hasError ? <Quote quote={quote} author={author} />
                            : <ErrorFetchMessage />
                        }
                        
                        
                        <div className="text-end">
                            <button
                                className="btn btn-primary"
                                onClick={incrementCounter}
                            >Next quote</button>
                        </div>

                    </>
                    

                )
            }

        </>
    )
}
