import { useState } from 'react';
import { TaskController } from '../lib/controller/task_controller';
import BackTopButton from './back_top_button';
import ContentsTitle from './contents_title';
import './create_task.scss';
import RegisterTaskbutton from './register_task_button';



function CreateTask(props: any){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const taskController = new TaskController();

    const handleClickRegisterTask = async () => {
        await taskController.registerTask(title,description)
        props.setIsCreate(false)
    } 

    return (
        <div className='create-task'>
            <ContentsTitle title={'Create Task'}></ContentsTitle>
            <div className='create-form'>
                <div className='title'>
                    <p className='label'>Title</p>
                    <input　className='input-title' type="text" value={title} onChange={(e: any) => setTitle(e.target.value)} />
                </div>
                <div className='description'>
                    <p className='label'>Description</p>
                    <textarea  className='input-description' value={description} onChange={(e: any) => setDescription(e.target.value)} cols={30} rows={10}></textarea>
                </div>
                <RegisterTaskbutton onClick={() => handleClickRegisterTask()}></RegisterTaskbutton>
            </div>
            <BackTopButton onClick={() => props.onClick()}></BackTopButton>

        </div>
    );
}

export default CreateTask;