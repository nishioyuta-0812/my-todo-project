import BackTopButton from './back_top_button';
import ContentsTitle from './contents_title';
import './create_task.scss';


function CreateTask(props){
    return (
        <div className='create-task'>
            <ContentsTitle title={'Create Task'}></ContentsTitle>
            <div className='create-form'>

            </div>
            <BackTopButton onClick={() => props.onClick()}></BackTopButton>

        </div>
    );
}

export default CreateTask;