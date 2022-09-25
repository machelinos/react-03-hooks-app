import { useReducer } from "react";
import { TodoAddNew } from "./TodoAddNew";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Learn reducers',
        done: false
    },
    {
        id: new Date().getTime()+100,
        description: 'Learn useReducer',
        done: false
    },

]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (newTodo)=>{
        const addTodoAction = {
            type: '[TODO] Add new todo',
            payload: newTodo
        }

        dispatch(addTodoAction);
    }

    return (
    <>
        <h1>Todo App (10) <small>pendientes</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} />

            </div>

            <div className="col-5">
                <h2>Add Todo</h2>
                <hr />

                <TodoAddNew onAddNewTodo={handleNewTodo} />

            </div>
            
        </div>

    </>
    )
}
