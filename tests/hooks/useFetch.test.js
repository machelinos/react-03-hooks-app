import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks";

describe('UseFetch hook tests', ()=>{
    test('must load the initial state values',()=>{
        const { result } = renderHook(()=>useFetch());
        expect(result.current).toEqual({
            data: null,
            isLoading: true,
            hasError: null
        })
    });

    const url = 'https://www.breakingbadapi.com/api/quotes/2';

    test('Must load the data quote and isLoading should be false', async ()=>{
        const { result } = renderHook(()=>useFetch(url));
        await waitFor(()=>{
            expect(result.current.data).toBeTruthy();
        });

        const { data, isLoading, hasError } = result.current;

        expect(data.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();

    })
});