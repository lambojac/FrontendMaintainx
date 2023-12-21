import TodoForm from "./TodoForm";
import TodoBtn from "./todoBtn";

const Todo = () => {
  return (
    <div className="todo">
        <div className="todo__saved-Content">
            <TodoBtn/>
           
        </div>
        <div className="todo__create-content">
          <TodoForm/>
        </div>
    </div>
  )
}

export default Todo