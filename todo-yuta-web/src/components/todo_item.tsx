
import { TaskController } from '../lib/controller/task_controller';
import './todo_item.scss';

function Todo_item(props: any){

    const task_controller = new TaskController();

    const handleDone = async () => {
        await task_controller.deleteTack(props.task.id);
        props.handleDoneTask();
    };

    return(
        <div className='todo-item'>
            <i className='todo-icon'></i>
            <p　className='todo-title'>{props.task.title}</p>
            <div className='done-task-button'>
                <p onClick={() => handleDone()}>DONE</p>
            </div>
        </div>
    );
}

export default Todo_item;