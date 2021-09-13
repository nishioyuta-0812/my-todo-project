import './register_task_button.scss'

function RegisterTaskbutton(props: any){

    return(
        <div className='register-task-button'>
        <p onClick={() => props.onClick()}>Register</p>
    </div>
    );

}

export default RegisterTaskbutton;