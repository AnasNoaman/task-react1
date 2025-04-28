import { useState } from "react";
import User from "./User";
import CoustomBouton from "./Coustombutton";
import CoustomInput from "./CoustomInput";
import AddUser from "./AddUser";

function app(){
    const [users,setUsers] = useState([
        {"id":1,"name":"tariq","email":"tariq@gmail.com","isBlocked":true},
        {"id":2,"name":"anas","email":"anas@gmail.com","isBlocked":false},
        {"id":3,"name":"hala","email":"thalaariq@gmail.com","isBlocked":true},
        {"id":4,"name":"asmaa","email":"asmaa@gmail.com","isBlocked":true},
        {"id":5,"name":"samah","email":"samah@gmail.com","isBlocked":true},
      ]);
 return (
    <div className="users p-4">
       <AddUser/>
       {
        users.map((user)=>
            <User name={user.name} email={user.email} key={user.id}/>
        )
       }
    </div>
 )
}
export default app;