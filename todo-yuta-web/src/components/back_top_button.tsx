import './back_top_button.scss'

function BackTopButton(props: any){
    return (
        <div className='back-top-button' >
            <p onClick={() => props.onClick()}>Back Home</p>
        </div>
    );
}

export default BackTopButton;