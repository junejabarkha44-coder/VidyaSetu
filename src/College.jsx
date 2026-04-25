import { NavLink, Outlet,Link } from "react-router";

export default function College()
{
    return(
        <div className="college"  style={{textAlign:"center"}}>
        <h1 >college page </h1>
        <h3><Link to="/">Go to home page </Link></h3>
        
        <NavLink style={{textDecoration:"none",margin:"30px",fontSize:"25px"}} to="">student </NavLink>
        <NavLink style={{textDecoration:"none",margin:"30px",fontSize:"25px"}}  to="department">department  </NavLink>
        <NavLink style={{textDecoration:"none",margin:"30px",fontSize:"25px"}}  to="details">college details  </NavLink>
        <Outlet /> 
        </div>
    )
}
