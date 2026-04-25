import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

import './header.css';
function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const createUser = async () => {
   
    console.log("BUTTON CLICKED 🔥");
    console.log(name, password, mobile);

    const url = "http://127.0.0.1:5000/signup"; // Check Flask port
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password, mobile })
      });
      response = await response.json();
      console.log(response);

      if (response.message === "Signup successful ✅") {
        setShowAlert(true);
        setName(''); setPassword(''); setMobile(''); // clear form
      } 
      else if (response.message === "You are already registered ❌") {
  alert("You are already registered ❌");
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
        <input style={{ marginLeft: "70px", height: "30px", width: "250px" }} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your Password" />
        <br /><br /><br />
        <input style={{ marginLeft: "70px", height: "30px", width: "250px" }} value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" placeholder="Enter your Mobile no" />
        <br /><br /><br />
        <button onClick={createUser} style={{ marginLeft: "70px", height: "30px", width: "250px", fontWeight: "bolder" }}>Submit</button>
      </div>

      {showAlert && (
        <div className="custom-alert">
          <p>🎉 Successfully Registered!</p>
          <button onClick={() => setShowAlert(false)}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Login;