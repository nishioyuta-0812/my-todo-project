import { useState } from 'react';
import BackTopButton from './back_top_button';
import ContentsTitle from './contents_title';
import './create_task.scss';


function CreateTask(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    return (
        <div className='create-task'>
            <ContentsTitle title={'Create Task'}></ContentsTitle>
            <div className='create-form'>
                <div className='title'>
                    <p className='label'>Title</p>
                    <input　className='input-title' type="text" value={title} onChange={(e) =>  setTitle(e.target.value)} />
                </div>
                <div className='description'>
                    <p className='label'>Description</p>
                    <textarea  className='input-description' value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                </div>
            </div>
            <BackTopButton onClick={() => props.onClick()}></BackTopButton>

        </div>
    );
}

export default CreateTask;