import { Link } from 'react-router-dom';
import Mains from './Mains';
import Courses from './Courses';
function ConnectReg() {
  return (
    <>
        
    <Courses />
    <div style={{display:"flex"}}>
      <button className="connect-link"><Link  style={{fontSize:"23px",color:"white",textDecoration:"none"}}to="registration">Enroll  now</Link></button>
       
        </div>
    </>
 )
 }

export default ConnectReg;