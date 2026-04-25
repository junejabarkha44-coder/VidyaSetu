import { useState } from "react"; 
import BugBountyGame from './BugBountyGame';
function Department()
{
  
//         <div className="progress-outer-box">
//         <div className="progress-wrap" >
        
//         <div class="progress-box">

//   <h3 class="course-title">Your Course: JavaScript Basics</h3>

//   <p class="progress-text">
//     Your Progress: <span id="progressValue">40%</span>
//   </p>

//   <input
//     type="range"
//     min="0"
//     max="100"
//     value="40"
//     class="progress-slider"
//     oninput="updateProgress(this.value)"
//   />

// </div>
//      <div class="progress-box">

//   <h3 class="course-title">Your Course: JavaScript Basics</h3>

//   <p class="progress-text">
//     Your Progress: <span id="progressValue">40%</span>
//   </p>

//   <input
//     type="range"
//     min="0"
//     max="100"
//     value="40"
//     class="progress-slider"
//     oninput="updateProgress(this.value)"
//   />

// </div>
//      <div class="progress-box">

//   <h3 class="course-title">Your Course: JavaScript Basics</h3>

//   <p class="progress-text">
//     Your Progress: <span id="progressValue">40%</span>
//   </p>

//   <input
//     type="range"
//     min="0"
//     max="100"
//     value="40"
//     class="progress-slider"
//     oninput="updateProgress(this.value)"
//   />

// </div>
//      <div class="progress-box">

//   <h3 class="course-title">Your Course: JavaScript Basics</h3>

//   <p class="progress-text">
//     Your Progress: <span id="progressValue">40%</span>
//   </p>

//   <input
//     type="range"
//     min="0"
//     max="100"
//     value="40"
//     class="progress-slider"
//     oninput="updateProgress(this.value)"
//   />

// </div>
//      <div class="progress-box">

//   <h3 class="course-title">Your Course: JavaScript Basics</h3>

//   <p class="progress-text">
//     Your Progress: <span id="progressValue">40%</span>
//   </p>

//   <input
//     type="range"
//     min="0"
//     max="100"
//     value="40"
//     class="progress-slider"
//     oninput="updateProgress(this.value)"
//   />

// </div>

//         </div>
//         </div>
// import React, { useState } from "react";
// import "./Slider.css"; // CSS file


  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const moveSlider = (val) => {
    setValue(val); // programmatically move slider
  };

  const [showGame, setShowGame] = useState(false);

  return (
    <>
    <div  className="sliderbio-outer">
        <h2>Progress tracking</h2>
    <div className="sliderbio-container">
      <label className="sliderbio-label" style={{fontWeight:"bolder"}}>Value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="sliderbio"
      />
      <div className="buttonsm">
        <button onClick={() => moveSlider(20)}>20</button>
        <button onClick={() => moveSlider(50)}>50</button>
        <button onClick={() => moveSlider(80)}>80</button>
      </div>
    </div>
    <div className="sliderbio-container">
      <label className="sliderbio-label" style={{fontWeight:"bolder"}}>Value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="sliderbio"
      />
      <div className="buttonsm">
        <button onClick={() => moveSlider(20)}>20</button>
        <button onClick={() => moveSlider(50)}>50</button>
        <button onClick={() => moveSlider(80)}>80</button>
      </div>
    </div>
    <div className="sliderbio-container">
      <label className="sliderbio-label" style={{fontWeight:"bolder"}}>Value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="sliderbio"
      />
      <div className="buttonsm">
        <button onClick={() => moveSlider(20)}>20</button>
        <button onClick={() => moveSlider(50)}>50</button>
        <button onClick={() => moveSlider(80)}>80</button>
      </div>
    </div>
    <div className="sliderbio-container">
      <label className="sliderbio-label" style={{fontWeight:"bolder"}}>Value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="sliderbio"
      />
      <div className="buttonsm">
        <button onClick={() => moveSlider(20)}>20</button>
        <button onClick={() => moveSlider(50)}>50</button>
        <button onClick={() => moveSlider(80)}>80</button>
      </div>
    </div>
    <div className="sliderbio-container">
      <label className="sliderbio-label"style={{fontWeight:"bolder"}}>Value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="sliderbio"
      />
      <div className="buttonsm">
        <button onClick={() => moveSlider(20)}>20</button>
        <button onClick={() => moveSlider(50)}>50</button>
        <button onClick={() => moveSlider(80)}>80</button>
        {/* <button 
  className="sliderbio-label" 
  onClick={() => setShowGame(true)}
  style={{ marginTop: '20px', cursor: 'pointer', background: '#00ff00', color: '#000' }}
>
  🕹️ Play Bug Bounty
</button> */}
      </div>
    </div>
    {/* {showGame && (
    <div className="game-overlay" style={{
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.9)', 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <button 
            onClick={() => setShowGame(false)}
            style={{ marginBottom: '10px', padding: '10px', cursor: 'pointer' }}
        >
            ✖ Close Game
        </button>
        
        <BugBountyGame />
    </div>
)}
  */}
    
    </div>
    <button 
  className="sliderbio-label" 
  onClick={() => setShowGame(true)}
  style={{ marginTop: '20px', cursor: 'pointer', background: '#00ff00', color: '#000',alignItems:'center',justifyContent:"center" }}
>
  🕹️ Play Bug Bounty
</button>
    {/* <BugBountyGame /> */}
    {showGame && (
    <div className="game-overlay" style={{
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.9)', 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <button 
            onClick={() => setShowGame(false)}
            style={{ marginBottom: '10px', padding: '10px', cursor: 'pointer' }}
        >
            ✖ Close Game
        </button>
        
        <BugBountyGame />
    </div>
)}
 
    </>
  );
}

export default Department;



// import { useState } from "react"; 
// import BugBountyGame from './BugBountyGame';

// function Department() {
//   const [value, setValue] = useState(50);
//   const [showGame, setShowGame] = useState(false); // Toggle state

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const moveSlider = (val) => {
//     setValue(val);
//   };

//   return (
//     <>
//       <div className="sliderbio-outer">
//         <h2>Progress tracking</h2>
        
//         {/* Aapka existing Slider Box */}
//         <div className="sliderbio-container">
//           <label className="sliderbio-label" style={{ fontWeight: "bolder" }}>Value: {value}</label>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={value}
//             onChange={handleChange}
//             className="sliderbio"
//           />
//           <div className="buttonsm">
//             <button onClick={() => moveSlider(20)}>20</button>
//             <button onClick={() => moveSlider(50)}>50</button>
//             <button onClick={() => moveSlider(80)}>80</button>
//           </div>
//         </div>

//         {/* --- Yahan Game launch karne ka button hai --- */}
//         <div style={{ textAlign: 'center', marginTop: '30px' }}>
//             <button 
//                 onClick={() => setShowGame(true)}
//                 style={{
//                     padding: '12px 25px',
//                     backgroundColor: '#00ff00',
//                     color: '#000',
//                     fontWeight: 'bold',
//                     border: 'none',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     boxShadow: '0 0 15px rgba(0,255,0,0.3)'
//                 }}
//             >
//                 🕹️ Start Bug Bounty Challenge
//             </button>
//         </div>
//       </div>

//       {/* --- Game Overlay (Sirf tab dikhega jab showGame true hoga) --- */}
//       {showGame && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.95)', //</>