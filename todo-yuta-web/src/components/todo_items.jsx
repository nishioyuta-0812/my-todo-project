/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
import Todo_item from './todo_item';
import CreateTaskButton from './create_task_button';
import ContentsTitle from './contents_title';

function Todo_items(props){
    return (
        <div className='todo-items'>
            <ContentsTitle title={"Today's Tasks"}></ContentsTitle>
            {props.tasks.map(task =>  
                <Todo_item task={task} ></Todo_item>
            )}
            <CreateTaskButton onClick={() => props.onClick()}></CreateTaskButton>
        </div>
    );
}

export default Todo_items;