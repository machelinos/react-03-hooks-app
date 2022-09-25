import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
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
        const setCompletedAction = {
            type: '[TODO] Set todo completed',
            payload: id
        }

        dispatch(setCompletedAction);
    }

    
    return {
        todos,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,
        todosCount: todos.length,
        handleNewTodo,
        handleDeleteTodo,
        handleSetCompleted
    }
}
