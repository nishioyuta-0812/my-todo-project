import './todo_item.scss';

function Todo_item(){
    return(
        <div className='todo-item'>
            <i className='todo-icon'></i>
            <p　className='todo-title'>今日はこれをやる</p>
        </div>
    );
}

export default Todo_item;