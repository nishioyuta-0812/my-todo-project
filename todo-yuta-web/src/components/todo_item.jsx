import './todo_item.scss';

function Todo_item(){
    return(
        <div className='todo-item'>
            <i className='todo-icon'></i>
            <p　className='todo-title'>今日はこれをやる</p>
            <div className='done-task-button'>
                <p>DONE</p>
            </div>
        </div>
    );
}

export default Todo_item;