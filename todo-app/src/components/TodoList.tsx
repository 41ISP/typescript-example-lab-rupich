import { TodoItem } from "./TodoItem"

interface IListProps{
    todos: ITodo[]
}

export const TodoList = ({todos}: IListProps) => {
    return (
       <ul className="todo-list">
       {todos.map(todo =>(
       <TodoItem todo={todo} />))}
       </ul>
    )
}