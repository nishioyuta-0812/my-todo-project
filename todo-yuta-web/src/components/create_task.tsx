// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useState } from 'react';
import { TaskController } from '../lib/controller/task_controller';
// @ts-expect-error ts-migrate(6142) FIXME: Module './back_top_button' was resolved to '/Users... Remove this comment to see the full error message
import BackTopButton from './back_top_button';
// @ts-expect-error ts-migrate(6142) FIXME: Module './contents_title' was resolved to '/Users/... Remove this comment to see the full error message
import ContentsTitle from './contents_title';
import './create_task.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module './register_task_button' was resolved to '/... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className='create-task'>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ContentsTitle title={'Create Task'}></ContentsTitle>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className='create-form'>
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <div className='title'>
                    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                    <p className='label'>Title</p>
                    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                    <input　className='input-title' type="text" value={title} onChange={(e: any) => setTitle(e.target.value)} />
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </div>
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <div className='description'>
                    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                    <p className='label'>Description</p>
                    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                    <textarea  className='input-description' value={description} onChange={(e: any) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </div>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <RegisterTaskbutton onClick={() => handleClickRegisterTask()}></RegisterTaskbutton>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <BackTopButton onClick={() => props.onClick()}></BackTopButton>

        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
}

export default CreateTask;