import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getData = async () => {
        setState({
            ...state,
            isLoading: true
        });
        
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setState({
                ...state,
                data,
                isLoading: false
            });
                
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                hasError: true
            })
        }
    }

    useEffect(()=>{
        getData();
    }, [url]);

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
  
}
