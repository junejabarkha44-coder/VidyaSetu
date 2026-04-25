import { Link } from "react-router";
import { useParams } from "react-router";

function UserDetails()
{
    const paramsData=useParams();
    console.log(paramsData.id)
    return(
        <div  style={{marginLeft:"10px"}} >
        <h1 >userdetials page</h1> 
        <h2> ID is {paramsData.id}</h2>
        <h3>Name is {paramsData.name}</h3>
        <h3><Link to="/users">Back</Link></h3>
        </div>
)
};

export default UserDetails;