/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { TaskController } from "../../lib/controller/task_controller";
import CreateTask from "../create_task";
import Todo_items from "../todo_items";
import './task.scss';

function Task(){

    const [isCreate,setIsCreate] = useState(false);
    const [tasks,setTasks] = useState([]);
    const task_Controller = new TaskController();

    const f = async () => {
        const tasksEntity = await task_Controller.getTasks();
        setTasks(tasksEntity);
     };

    useEffect(() => {
         f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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