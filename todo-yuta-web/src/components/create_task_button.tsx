import './create_task_button.scss';
function CreateTaskButton(props: any){
    return (
        <div className='create-task-button'>
            <p onClick={() => props.onClick()}>Create Task</p>
        </div>
    );
}

export default CreateTaskButton;