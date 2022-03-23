import { useState } from 'react';
import './AddUserForm.scss'
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/Modal/ErrorModal';

function AddUserForm(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    function usernameHandler(event){
        setUsername(event.target.value);
    }

    function ageHandler(event){
        setAge(event.target.value);
    }

    function submitHandler(event){
        if(username.trim().length === 0 || age.trim().length === 0){ 
            setError({
                title: 'Invalid input',
                message: 'Please enter valid information'
            });
        }
        else if(+age < 1){ 
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (>0)'
            });
        }
        else {
            saveUser();
        }
        event.preventDefault();
    }

    function saveUser(){
        const data = {
            id: Math.random().toString(),
            username: username,
            age: age
        }

        setUsername('');
        setAge('');
        props.onNewUserData(data);
    }

    function errorHandler(){
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onHideModal={errorHandler}/>}
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor='username'>Username</label>
                    <input id="username" type="text" value={username} onChange={usernameHandler}/>
                </div>
                <div className="form-item">
                    <label htmlFor='age'>Age (Year)</label>
                    <input id="age" type="number" value={age || ''} onChange={ageHandler}/>
                </div>
                <Button> Add User </Button>
            </form>
        </div>
        
    );
}

export default AddUserForm;