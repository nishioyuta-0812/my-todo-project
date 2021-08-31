/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
import Todo_item from './todo_item';
import CreateTaskButton from './create_task_button';

function Todo_items(){
    return (
        <div className='todo-items'>
            <p className='contents-title'>Today's TODO</p>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
            <CreateTaskButton></CreateTaskButton>
        </div>
    );
}

export default Todo_items;