import { useForm } from "../hooks/useForm"

const initialValues = {
    todoInput: ''
}

export const TodoAddNew = ({onAddNewTodo}) => {

    const {formValues, handleInputChange, handleReset} = useForm(initialValues);

    const {todoInput} = formValues;

    const onSubmitTodo = (event) => {
        event.preventDefault();

        if(todoInput.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: todoInput,
            done: false
        }
        
        onAddNewTodo && onAddNewTodo(newTodo);
        handleReset();

    }

    return (
        <form onSubmit={onSubmitTodo}>
            <input
                className="form-control"
                name="todoInput"
                placeholder="What are you doing?"
                type="text"
                value={todoInput}
                onChange={handleInputChange}
            />

            <button
                className="btn btn-outline-primary mt-2"
                type="submit"
            >Add todo</button>
        </form>
    )
}
