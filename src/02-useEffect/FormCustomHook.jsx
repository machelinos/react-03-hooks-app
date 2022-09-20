import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    }
    
    const { formValues, handleInputChange, handleReset } = useForm(initialValues);
    const {username, email, password} = formValues;
    
    return (
    <>
        <h1>Form with custom hook</h1>

        <input
            className="form-control"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleInputChange}
        />

        <input
            className="form-control mt-2"
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputChange}
        />

        <input
            className="form-control mt-2"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleInputChange}
        />

        <button
            className="btn btn-primary mt-2"
            onClick={handleReset}
        >
            Reset
        </button>

    </>

    )

}
