import './create_task_button.scss';
import { Link } from 'react-router-dom'

function CreateTaskButton(){

    return (
        <div className='create-task-button' to="/create-task">
            <Link to="/create-task">Create Task</Link>
        </div>
    );
}

export default CreateTaskButton;