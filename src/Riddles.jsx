import { useState } from "react";
import './Newl.css'
function Riddles()
{
    const [show1,setShow1]=useState(false);
     const [show2,setShow2]=useState(false);
      const [show3,setShow3]=useState(false);
       const [show4,setShow4]=useState(false);
        const [show5,setShow5]=useState(false);

    return(
        <>
        <h1 style={{textAlign:"center",marginTop:"120px"}}>Have some fun and hav esome riddles bro</h1>
        <div className="riddles-container">
           
            <div className="riddle-box1" >
           <p>1️⃣ I have keys but no locks. I have space but no room.</p>
            <br /> <br /><br />
           {
            show1&&<b>keyboard</b>
           }
           <br /> <br /><br />
           <button onClick={()=>setShow1(true)}>Show Answer</button>
           </div>
           <div className="riddle-box2">
           <p>2️⃣ What has a face and two hands, but no arms or legs?</p>
            <br /> <br /><br />
      {show2 && <b>Answer: Clock</b>}
      <br /> <br/><br />
      <button onClick={() => setShow2(true)}>Show Answer</button>
           </div>
           <div className="riddle-box3">
          <p >4️⃣ I’m tall when I’m young and short when I’m old.</p>
           <br /> <br /><br />
      {show3 && <b>Answer: Candle</b>}
      <br /><br /><br />
      <button onClick={() => setShow3(true)}>Show Answer</button>
           </div>
           <div className="riddle-box4">
            <p style={{color:"black"}}> 5️⃣ What has to be broken before you can use it?</p>
             <br />  <br /><br />
      {show4 && <b>Answer: Egg</b>}
      <br /><br /><br />
      <button onClick={() => setShow4(true)}>Show Answer</button>
           </div>
        </div>
            
        </>
    )
}
export default Riddles;