import { NavLink } from 'react-router';
import './header.css';
function Button()
{
    return(
        <div>
            <button style={{fontWeight:"bold",marginLeft:"50px"}} className="btn"><NavLink style={{textDecoration:"none"}} to="/login">Log in</NavLink></button>
        </div>
    )
}
export default Button;