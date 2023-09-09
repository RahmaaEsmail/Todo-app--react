import { createContext, useState, useEffect, useContext } from "react";

const tasksContext = createContext()

function TasksProvider({ children }) {
    const [value, setValue] = useState("")
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("Tasks")) || [])
    // const [isCompleted, setIsCompleted] = useState(false)


    useEffect(function () {
        localStorage.setItem("Tasks", JSON.stringify(tasks))
    }, [tasks])


    function handleAddTask() {
        if (value === '') return;
        setTasks(val => [...val, {
            id: Date.now(),
            value
        }])
        setValue("")
    }

    // function handleCompletedTask() {
    //     setIsCompleted(!isCompleted)
    // }


    function handleDeleteTask(id) {
        setTasks(val => tasks.filter((task) => task.id !== id))
    }


    return (
        <tasksContext.Provider value={{
            onAddTask: handleAddTask,
            // onCompleteTask: handleCompletedTask,
            onDeleteTask: handleDeleteTask,
            value,
            setValue,
            // isCompleted,
            tasks
        }}>
            {children}
        </tasksContext.Provider>
    )
}

function useTasks() {
    const context = useContext(tasksContext)
    return context;
}

export { TasksProvider, useTasks }