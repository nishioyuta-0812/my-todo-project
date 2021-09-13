/* eslint-disable react/jsx-pascal-case */
import './todo_items.scss'
// @ts-expect-error ts-migrate(6142) FIXME: Module './todo_item' was resolved to '/Users/yuta.... Remove this comment to see the full error message
import Todo_item from './todo_item';
// @ts-expect-error ts-migrate(6142) FIXME: Module './create_task_button' was resolved to '/Us... Remove this comment to see the full error message
import CreateTaskButton from './create_task_button';
// @ts-expect-error ts-migrate(6142) FIXME: Module './contents_title' was resolved to '/Users/... Remove this comment to see the full error message
import ContentsTitle from './contents_title';

function Todo_items(props: any){

    const handleDoneTask = () => {
        props.handleDoneTask();
    };

    return (
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className='todo-items'>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ContentsTitle title={"Today's Tasks"}></ContentsTitle>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className='items'>
                {props.tasks.map((task: any,index: any) =>  
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Todo_item task={task} key={index} handleDoneTask={() => handleDoneTask()}></Todo_item>
                )}
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <CreateTaskButton onClick={() => props.onClick()}></CreateTaskButton>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
}

export default Todo_items;