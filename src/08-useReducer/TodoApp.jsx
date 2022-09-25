import { useTodos } from "../hooks/useTodos";
import { TodoAddNew } from "./TodoAddNew";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleSetCompleted} = useTodos();    

    return (
    <>
        <h1>Todos: ({todosCount}) <small>pendientes: {pendingTodosCount}</small></h1>
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
