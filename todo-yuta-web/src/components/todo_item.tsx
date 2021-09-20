
import { container } from 'tsyringe';
import { TaskController } from '../lib/controller/TaskController';
import './todo_item.scss';

function Todo_item(props: any){

    const handleDone = async () => {
        await container.resolve(TaskController).deleteTack(props.task.taskId);
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
                <p>詳細</p>
                <p>{props.task.description}</p>
            </div>
        </div>
    );
}

export default Todo_item;