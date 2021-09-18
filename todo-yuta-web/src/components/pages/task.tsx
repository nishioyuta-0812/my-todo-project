/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { container } from 'tsyringe';
import { TaskController } from "../../lib/controller/TaskController";
import CreateTask from "../create_task";
import Todo_items from "../todo_items";
import './task.scss';

function Task(){

    const [isCreate,setIsCreate] = useState(false);
    const [tasks,setTasks] = useState([]);

    const f = async () => {
        const tasksEntity = await container.resolve(TaskController).getTasks();
        setTasks(tasksEntity);
     };

    useEffect(() => {
         f();
    },[isCreate]);

    function handleClickCreateTask() {
        setIsCreate(true);
    }

    const handleClickBackHome = () => {
        setIsCreate(false);
    }

    const handleDoneTask = () => {
        f();
    }

    return(
        <div className='task'>
            { isCreate ? (
                    <CreateTask className='slidein' setIsCreate={() => setIsCreate(Boolean)} onClick={() => handleClickBackHome()}></CreateTask>
                ) :(
                    <Todo_items className='slidein' onClick={() => handleClickCreateTask()} handleDoneTask={() => handleDoneTask()}　tasks={tasks}></Todo_items>
            )}
        </div>
    );
}

export default Task;