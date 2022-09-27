import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('useForm tests',()=>{

    const initialValues = {
        username: 'Juan Perez',
        email: 'juan@gmail.com'
    }

    test('Must return default values', ()=>{
        const { result } = renderHook(()=>useForm(initialValues));

        expect(result.current).toEqual({
            username: initialValues.username,
            email: initialValues.email,
            formValues: initialValues,
            handleInputChange: expect.any( Function ),
            handleReset: expect.any(Function)
        })
    });

    test('Must change form name', ()=>{
        const newValue = 'Joy';

        const { result } = renderHook(()=>useForm(initialValues));
        const { handleInputChange } = result.current;

        const event = {
            target: {
                value: newValue,
                name: 'username'    
            }
        }

        act(()=>{
            handleInputChange(event);
        });

        expect(result.current.username).toBe(newValue);
        expect(result.current.formValues.username).toBe(newValue);

    });

    test('Must reset to initial value', ()=>{
        const newEmail = 'newemail@gmail.com';

        const { result } = renderHook(()=>useForm(initialValues));
        const { handleReset, handleInputChange } = result.current;

        const event = { target: {
            name: 'email',
            value: newEmail
        }}

        act(()=>{
            handleInputChange(event);
            handleReset();
        });

        expect(result.current.email).toBe(initialValues.email);
        expect(result.current.formValues.email).toBe(initialValues.email);

    })
});