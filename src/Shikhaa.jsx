import { useState } from "react";
import { useEffect } from "react";
function Shikhaa()
{
        const[name,setName]=useState('');
        const[problem,setProblem]=useState('');
        const[slot,setSlot]=useState('');
        const[showAlert,setShowAlert]=useState('');
         useEffect(()=>{
        getUserData();
    },[])
    const getUserData=async()=>{
      const url="http://localhost:3001/skills";
         let response=await fetch(url);
        response= await response .json();
        console.log(response);
        setName(response.name);
        setProblem(response.problem);
        setSlot(response.slot);
    }
    const createUser=async()=>{
        const url="http://localhost:3001/skills";
        console.log(name,problem,slot);
        let response=await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,problem,slot})
        });
        response=await response.json();
       if (response) {
    setShowAlert(true);
}
    
    }
    

    return(
        <div>
        <div className="login">
       
        <div className="login-box">
            <h1  style={{marginLeft:"100px"}}>Ask your problem</h1>
            <input style={{marginLeft:"70px",height:"30px",width:"250px"}} value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enetr your Name"></input>
            <br /> <br /> <br />
             <input style={{marginLeft:"70px",height:"30px",width:"250px"}} value={problem} onChange={(e)=>setProblem(e.target.value)}  type="text" placeholder="Enetr your Problem"></input>
            <br /> <br /><br />
             <input style={{marginLeft:"70px",height:"30px",width:"250px"}} value={slot} onChange={(e)=>setSlot(e.target.value)} type="text" placeholder="Enetr your slot "></input>
            <br /> <br /><br />
           
            <button onClick={createUser} style={{marginLeft:"70px",height:"30px",width:"250px",fontWeight:"bolder"}}>Submit</button>
        </div>
    

        </div>
        {showAlert && (
    <div className="custom-alert">
        <p>🎉 your slot is confirmed!</p>
        <button onClick={() => setShowAlert(false)}>OK</button>
    </div>
)}

        </div>
    );
}

export default Shikhaa;