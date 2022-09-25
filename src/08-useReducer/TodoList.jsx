import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onDeleteTodo}) => {
  return (
    <ul className="list-group">
    {
        todos.map(todo=><TodoItem todo={todo} key={todo.id} onDeleteItem={onDeleteTodo} />)
    }
</ul>    
  )
}
