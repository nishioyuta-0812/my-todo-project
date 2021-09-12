/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
import Todo_item from './todo_item';
import CreateTaskButton from './create_task_button';
import ContentsTitle from './contents_title';

function Todo_items(props){

    const handleDoneTask = () => {
        props.handleDoneTask();
    };

    return (
        <div className='todo-items'>
            <ContentsTitle title={"Today's Tasks"}></ContentsTitle>
            <div className='items'>
                {props.tasks.map((task,index) =>  
                    <Todo_item task={task} key={index} handleDoneTask={() => handleDoneTask()}></Todo_item>
                )}
            </div>
            <CreateTaskButton onClick={() => props.onClick()}></CreateTaskButton>
        </div>
    );
}

export default Todo_items;