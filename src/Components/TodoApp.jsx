import { useTasks } from "./Context";
import TodoList from "./TodoList";


function TodoApp() {
  const { value, setValue, onAddTask, tasks } = useTasks();

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" onClick={onAddTask}>
          Add
        </button>
      </div>

      {tasks.length > 0 && <TodoList />}
    </div>
  );
}

export default TodoApp