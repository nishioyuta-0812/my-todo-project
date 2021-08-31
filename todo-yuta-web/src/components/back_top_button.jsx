import { Link } from 'react-router-dom'
import './back_top_button.scss'

function BackTopButton(){
    return (
        <div className='back-top-button' >
            <Link to="/">Back Home</Link>
        </div>
    );
}

export default BackTopButton;