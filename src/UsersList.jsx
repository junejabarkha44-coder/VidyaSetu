import { Link } from "react-router";

function UsersList()
{
    const UserData=[
        {id:1,name:"barkha"},
        {id:2,name:"purva"},
        {id:3,name:"deepika"},
        {id:4,name:"ashu "},
        {id:5,name:"khushi"},
        {id:6,name:"binni"},

    ]
    return(
        <div  style={{marginLeft:"10px"}} >
        <h1 >userlist page</h1>
        {
            UserData.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                </div>
            ))
        }
        <h1 >userlist pagw with name and id </h1>
        {
            UserData.map((item)=>(
                <div>
                    <h4><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></h4>
                </div>
            ))
        }
        
        </div>
)
}

export default UsersList;