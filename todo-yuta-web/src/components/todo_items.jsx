/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
import Todo_item from './todo_item';
import CreateTaskButton from './create_task_button';
import ContentsTitle from './contents_title';

function Todo_items(props){
    return (
        <div className='todo-items'>
            <ContentsTitle title={"Today's TODO"}></ContentsTitle>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
            <Todo_item></Todo_item>
            <CreateTaskButton onClick={() => props.onClick()}></CreateTaskButton>
        </div>
    );
}

export default Todo_items;