/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
import Todo_item from './todo_item';

function Todo_items(){
    return (
        <div className='todo-items'>
            <p className='contents-title'>Today's TODO</p>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
        </div>
    );
}

export default Todo_items;