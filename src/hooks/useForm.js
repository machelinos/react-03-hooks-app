import { useState } from "react";

export const useForm = (initialValues = {}) => {
    
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = ({target}) => {
        const {value, name} = target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleReset = ()=>{
        setFormValues(initialValues);
    }

    return {
        ...formValues,
        formValues,
        handleInputChange,
        handleReset
    }
}
