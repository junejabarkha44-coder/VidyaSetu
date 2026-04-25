import { useState } from "react";

function AddUser()
{
    const[name,setName]=useState('');
     const[age,setAge]=useState('');
      const[email,setEmail]=useState('');
      
      const createUser=async()=>{
        console.log(name,age,email);
        const url="http://localhost:5000/users";
        let response=await fetch(url,{
            method:'post',
            body:JSON.stringify({name,age,email})
        })
        response=await response.json();
        if(response)
        {
            alert("new user added");
        }

      }

    return(
        <div>
            <h1>    Add new user </h1>
            <input typr="text" onChange={(event)=>setName(event.target.value)} placeholder="enter the user name"></input>
            <br /> <br />
            <input typr="text" onChange={(event)=>setAge(event.target.value)} placeholder="enter the user age"></input>
            <br /> <br />
            <input typr="text" onChange={(event)=>setEmail(event.target.value)} placeholder="enter the user email"></input>
            <br /> <br />
            <button onClick={createUser}>Submit</button>
        </div>
    )
};
export default AddUser;