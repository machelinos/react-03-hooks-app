import { render, screen } from "@testing-library/react";
import { MultipleHooks } from "../../src/03-examples/MultipleHooks";

describe('Tests for <MultipleHooks />', ()=>{
    test('Must render default component', ()=>{
        render(<MultipleHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));        
    })
});