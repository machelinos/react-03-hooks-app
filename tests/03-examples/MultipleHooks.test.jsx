import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleHooks } from "../../src/03-examples/MultipleHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests for <MultipleHooks />', ()=>{
    const mockIncrementCounter = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        incrementCounter: mockIncrementCounter
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('Must render default component', ()=>{
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));        
    });

    test('Must render a quote', ()=>{
        useFetch.mockReturnValue({
            data: [{
                author: 'Marcel',
                quote: 'Family first'    
            }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleHooks />);
        expect(screen.getByText('Family first')).toBeTruthy();
    });

    test('Must execute incrementCounter function', ()=>{
        useFetch.mockReturnValue({
            data: [{
                author: 'Marcel',
                quote: 'Family first'    
            }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleHooks />);
        const nextBtn = screen.getByRole('button',{name: 'Next quote'});
        fireEvent.click(nextBtn);

        expect(mockIncrementCounter).toHaveBeenCalled();

        
    })
});