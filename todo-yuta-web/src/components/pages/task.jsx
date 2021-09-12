/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import CreateTask from "../create_task";
import Todo_items from "../todo_items";
import './task.scss';

function Task(){

    const [isCreate,setIsCreate] = useState(false);

    const handleClickCreateTask = () => {
        setIsCreate(true);
    }

    const handleClickBackHome = () => {
        setIsCreate(false);
    }

    return(
        <div className='task'>
            { isCreate ? (
                    <CreateTask className='slidein' setIsCreate={() => setIsCreate()} onClick={() => handleClickBackHome()}></CreateTask>
                ) :(
                    <Todo_items className='slidein' onClick={() => handleClickCreateTask()}></Todo_items>
            )}
        </div>
    );
}

export default Task;