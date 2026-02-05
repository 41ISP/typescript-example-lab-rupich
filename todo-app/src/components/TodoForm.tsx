export const TodoForm = () => {
return(
    <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Введите новую задачу..."
        />
        <button type="button" className="btn btn-add">Добавить</button>
      </div>
)
}
