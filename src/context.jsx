import { createContext, useState, useEffect, useContext } from "react";

const tasksContext = createContext();

function TasksProvider({ children }) {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Tasks")) || []
  );

  useEffect(
    function () {
      localStorage.setItem("Tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  function handleAddTask() {
    if (value === "") return;
    setTasks((val) => [
      ...val,
      {
        id: Date.now(),
        value,
      },
    ]);
    setValue("");
  }

  function handleDeleteTask(id) {
    setTasks((val) => tasks.filter((task) => task.id !== id));
  }

  return (
    <tasksContext.Provider
      value={{
        onAddTask: handleAddTask,
        onDeleteTask: handleDeleteTask,
        value,
        setValue,
        tasks,
      }}
    >
      {children}
    </tasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(tasksContext);
  return context;
}

export { TasksProvider, useTasks };
