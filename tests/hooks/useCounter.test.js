import { useCounter } from "../../src/hooks";
import { act,renderHook } from "@testing-library/react"

describe('useCounter hook tests', ()=>{

    test('Must return default values', ()=>{
        const { result } = renderHook(()=>useCounter());
    
        const { counter, incrementDefault, incrementCounter, decrementCounter, resetCounter  } = result.current;
    
        expect( counter ).toBe(10);
        expect( incrementDefault ).toBe(1);
        expect( incrementCounter ).toEqual(expect.any(Function));
        expect( decrementCounter ).toEqual(expect.any(Function));
        expect( resetCounter ).toEqual(expect.any(Function));
    
    });

    test('Must return counter with 100 value',()=>{
        const { result } = renderHook(()=>useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
    });

    test('Must increment counter', ()=>{
        const { result } = renderHook(()=>useCounter(100, 5));

        const { incrementCounter } = result.current;
        act(()=>{
            incrementCounter();
        });

        expect(result.current.counter).toBe(105);
    });

    test('Must decrement counter', ()=>{
        const { result } = renderHook(()=>useCounter(100, 5));

        const { decrementCounter } = result.current;
        act(()=>{
            decrementCounter();
        });

        expect(result.current.counter).toBe(95);
    });

    test('Should reset to initial value', ()=>{
        const {result} = renderHook(()=>useCounter(100,5));
        const {incrementCounter, resetCounter} = result.current;

        act(()=>{
            incrementCounter();
            resetCounter();
        });

        expect(result.current.counter).toBe(100);
    })

    
});