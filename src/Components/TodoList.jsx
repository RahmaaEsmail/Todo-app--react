import { useTasks } from "./Context";
import ToDoItem from "./TodoItem";

function TodoList() {
    const { tasks } = useTasks();
    return (
      <ul>
        {tasks.map((task) => (
          <ToDoItem task={task} key={task.id} />
        ))}
      </ul>
    );
  }

  export default TodoList;