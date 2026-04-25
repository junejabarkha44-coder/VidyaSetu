import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

import './header.css';
function CourseReg() {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [option, setOption] = useState('');

  const createUser = async () => {
   
    console.log("BUTTON CLICKED 🔥");
    console.log(name, state, option);

    const url = "http://127.0.0.1:5000/signup"; // Check Flask port
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, state, option })
      });
      response = await response.json();
      console.log(response);

      if (response.message === "course enrollment sucessfully  ✅") {
        setShowAlert(true);
        setName(''); setState(''); setOption(''); // clear form
      } 
      else if (response.message === "Allready enrolled ❌") {
  alert("You are already enrolled ❌");
} 
else {
  alert("Something went wrong!");
}
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1 style={{ marginLeft: "100px" }}>Registration</h1>
        <input style={{ marginLeft: "70px", height: "30px", width: "250px" }} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your Name" />
        <br /><br /><br />
        
        <input style={{ marginLeft: "70px", height: "30px", width: "250px" }} value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="Enter your state" />
        <br /><br /><br />
        <select value={option} style={{marginLeft:"67px",width:"250px",height:"30px"}}  onChange={(e) => setOption(e.target.value)}>
            <option>C</option>
             <option>C++</option>
              <option>java</option>
               <option>javascript</option>
        </select>
        < br/><br />
        <button onClick={createUser} style={{ marginLeft: "70px", height: "30px", width: "250px", fontWeight: "bolder" }}>Submit</button>
      </div>

      {showAlert && (
        <div className="custom-alert">
          <p>🎉 Successfully Enrolled</p>
          <button onClick={() => setShowAlert(false)}>OK</button>
        </div>
      )}
    </div>
  );
}

export default CourseReg;