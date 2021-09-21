
import { container } from 'tsyringe';
import { TaskController } from '../lib/controller/TaskController';
import './todo_item.scss';
import { toast } from 'react-toastify';
import success from './icons';

function Todo_item(props: any){

    const handleDone = async () => {
        await container.resolve(TaskController).doneTack(props.task.taskId);
        toast.success('　タスクを完了したよ！', {
            icon: success,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        props.handleDoneTask();
    };

    return(
        <div className='todo-item'>
            <div className='initial-item'>
                <i className='todo-icon'></i>
                <p　className='todo-title'>{props.task.title}</p>
                <div className='done-task-button'>
                    <p onClick={() => handleDone()}>DONE</p>
                </div>
            </div>
            <div　className='todo-desc'>
                <p>{props.task.description}</p>
            </div>
        </div>
    );
}

export default Todo_item;