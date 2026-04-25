  import { Link } from 'react-router-dom';
import Mains from './Mains';
function ConnectHome() {
  return (
    <>
        
    <Mains />
    <div style={{display:"flex"}}>
      <button className="connect-link"><Link  style={{fontSize:"23px",color:"white",textDecoration:"none"}}to="binni">contact</Link></button>
       <button className="connect-link2"><Link  style={{fontSize:"23px",color:"white",textDecoration:"none"}}to="binni">contact</Link></button>
        <button className="connect-link3"><Link  style={{fontSize:"23px",color:"white",textDecoration:"none"}}to="binni">contact</Link></button>
        </div>
    </>
 )
 }

export default ConnectHome;
