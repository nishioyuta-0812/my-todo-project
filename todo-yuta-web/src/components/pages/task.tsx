/* eslint-disable react/jsx-pascal-case */
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useState, useEffect } from "react";
import { TaskController } from "../../lib/controller/task_controller";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../create_task' was resolved to '/Users/yu... Remove this comment to see the full error message
import CreateTask from "../create_task";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../todo_items' was resolved to '/Users/yut... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className='task'>
            { isCreate ? (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CreateTask className='slidein' setIsCreate={() => setIsCreate()} onClick={() => handleClickBackHome()}></CreateTask>
                ) :(
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Todo_items className='slidein' onClick={() => handleClickCreateTask()} handleDoneTask={() => handleDoneTask()}　tasks={tasks}></Todo_items>
            )}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
}

export default Task;