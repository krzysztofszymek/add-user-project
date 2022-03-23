import './ErrorModal.scss'
import Button from '../Button/Button'

function ErrorModal(props) {
    return (
        <div>
            <div className='backdrop' onClick={props.onHideModal}/>
            <div className='modal'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
                <footer className='actions'>
                    <Button onClick={props.onHideModal}>Close</Button>
                </footer>
            </div>
        </div>
    );
}

export default ErrorModal;