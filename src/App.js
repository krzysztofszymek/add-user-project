import './App.css'
import { useState } from "react";
import UserData from "./components/UserData/UserData";
import AddUser from "./components/AddUser/AddUser";
import UserList from './components/UserList/UserList';

function App() {
  const [userData, setUserData] = useState(UserData);

  function addNewUser(newUser){
    setUserData((prevData) => {
      console.log(userData);
      return [newUser, ...prevData];
    })
  }

  return (
    <div className="App">
      <AddUser onAddNewUser={addNewUser}/>
      <UserList data={userData}/>
    </div>
  );
}

export default App;
