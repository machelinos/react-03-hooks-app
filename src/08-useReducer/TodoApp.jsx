import { useEffect, useReducer } from "react";
import { TodoAddNew } from "./TodoAddNew";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (newTodo) => {
        const addTodoAction = {
            type: '[TODO] Add new todo',
            payload: newTodo
        }

        dispatch(addTodoAction);
    }

    const handleDeleteTodo = (id) => {
        const deleteTodoAction = {
            type: '[TODO] Delete todo',
            payload: id
        }

        dispatch(deleteTodoAction);
    }

    const handleSetCompleted = (id) => {
        console.log({id});
        const setCompletedAction = {
            type: '[TODO] Set todo completed',
            payload: id
        }

        dispatch(setCompletedAction);
    }
    

    return (
    <>
        <h1>Todo App (10) <small>pendientes</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onSetCompleted={handleSetCompleted} />

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
