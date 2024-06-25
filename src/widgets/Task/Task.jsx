import React from 'react';

import cl from './style.module.css'

const Task = ({id, completed, text, removeTask, onComplete}) => {

    return (
        <div className={cl.mainTask}>
            <input type='checkbox' checked={completed} onClick={() => onComplete(id)}/>
            <p>{text}</p>
            <button onClick={() => removeTask(id)}>Delete</button>
        </div>
    );
};

export default Task;