// const { useState } = require("react")
import { useState } from "react";
import axios from "axios";

function App(){
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[users, setUsers]=useState([]);

  async function getUsers(){
    const url= import.meta.env.VITE_API_URL+"/users";  // process.env in nodeJS
    const response = await axios.get(url);
    setUsers(response.data);
  }

  async function createUser(){
    const url= import.meta.env.VITE_API_URL+"/users";
    const newUser={email, name};
    await axios.post(url, newUser);
    alert("user created!");
  }
  return(
    <>
    {name}{email}
    <ul>
      {users.map(u=> <li key={u.email}>{u.name} {u.email}</li>)}
    </ul>

    <button onClick={getUsers}>Get Users</button>
    <input placeholder="email" onChange={(e)=>{
      setEmail(e.target.value)  //jis element pr event hua hai vo e.target hai jisko hum set kar rhe hai
    }}/>
    <input placeholder="name" onChange={e=>setName(e.target.value)}/>
    <button onClick={createUser}>Create user</button>
    </>
  )
}

export default App;