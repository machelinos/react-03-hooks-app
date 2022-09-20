import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const initialValues = {
        username: 'machelinos',
        email: 'marcel@yo.com'
    }
    
    const [formValues, setFormValues] = useState(initialValues);
    const {username, email} = formValues;
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = ({target}) => {
        const {value, name} = target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    useEffect(()=>{
        console.log('useEffect loaded first call');
    }, []);

    useEffect(()=>{
        console.log('useEffect call when username changes')
    },[username]);

    useEffect(()=>{
        console.log('useEffect call when changing email');
        if(email==='me@me.com'){
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    },[email]);
    

    return (
    <>
        <h1>Simple Form</h1>

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

        {
            showMessage && <Message />
        }

    </>

    )
}
