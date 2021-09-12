/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { TaskController } from "../../lib/controller/task_controller";
import CreateTask from "../create_task";
import Todo_items from "../todo_items";
import './task.scss';

function Task(){

    const [isCreate,setIsCreate] = useState(false);
    const [tasks,setTasks] = useState([]);
    const taskController = new TaskController();
    
    useEffect(() => {
        console.log('gettasks');
        const f = async () => {
           const tasksEntity = await taskController.getTasks();
           setTasks(tasksEntity);
        };
        f();
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isCreate]);

    function handleClickCreateTask() {
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
                    <Todo_items className='slidein' onClick={() => handleClickCreateTask()} tasks={tasks}></Todo_items>
            )}
        </div>
    );
}

export default Task;