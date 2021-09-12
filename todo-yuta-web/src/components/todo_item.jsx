import './todo_item.scss';

function Todo_item(props){
    return(
        <div className='todo-item'>
            <i className='todo-icon'></i>
            <p　className='todo-title'>{props.task.title}</p>
            <div className='done-task-button'>
                <p>DONE</p>
            </div>
        </div>
    );
}

export default Todo_item;