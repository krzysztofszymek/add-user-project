import Card from '../UI/Card/Card'
import AddUserForm from './AddUserForm/AddUserForm';

function AddUser(props) {
    function userData(data){
        props.onAddNewUser(data);
    }

    return (
        <div>
            <Card>
                <AddUserForm onNewUserData={userData}/>
            </Card>
        </div>
        
    );
}

export default AddUser;