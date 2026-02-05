export const TodoItem= () => {
return(
<ul className="todo-list">
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
          />
          <span className="todo-text"> Изучить React Hooks</span>
          <button className="btn btn-delete"> Удалить</button>
        </li>
        
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
            checked
            readOnly
          />
          <span className="todo-text completed"> Прочитать документацию</span>
          <button className="btn btn-delete"> Удалить </button>
        </li>
        
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
          />
          <span className="todo-text"> Создать Todo-приложение </span>
          <button className="btn btn-delete">Удалить</button>
        </li>
      </ul>
)
}