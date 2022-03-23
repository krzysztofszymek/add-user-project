import './UserList.scss'
import Card from "../UI/Card/Card";

function UserList(props) {
    const data = props.data;

    return (
        <Card>
            <ul className='userList'>
            {
                data.map((user) => 
                    <li key={user.id}>
                        <big>{user.username} </big> ({user.age} years old)
                    </li>
                )
            }
            </ul>
        </Card>
    );
}

export default UserList;