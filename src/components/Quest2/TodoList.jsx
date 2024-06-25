import React, {useContext, useState} from 'react';
import Task from "../../widgets/Task/Task";

import cl from './style.module.css'
import {ThemeContext} from "../Quest5/ThemeContext";

const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [nextId, setNextId] = useState(1)
    const [InputValue, setInputValue] = useState('')
    const [completed, setCompletes] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)

    const addTask = () => {
        if (InputValue === '') return
        const newToDo = {id: nextId, text: InputValue, completed: completed}
        setTasks([...tasks, newToDo]);
        setNextId(nextId + 1);
        setInputValue('')
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(str => str.id !== id));
    }

    const toggleCompletedTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
        <div className={cl.main__todo}>
            <button onClick={toggleTheme}>
                Theme
            </button>
            <div className={cl.container} style={{background: theme === 'light' ? '#adc4b3' : '#032e0e'}}>
                {tasks.length > 0 && (
                    tasks.map((task) => (
                        <Task id={task.id} completed={task.completed} text={task.text} removeTask={removeTask}
                              onComplete={toggleCompletedTask}/>
                    ))
                )}
                <div className={cl.addTodoButton}>
                    <input type='text' value={InputValue} onChange={(e) => setInputValue(e.target.value)}
                           placeholder='Новая задача'/>
                    <button onClick={addTask}>Добавить задачу</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;