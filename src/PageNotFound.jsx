import { Link } from "react-router";
function PageNotFound()
{
    
    return(
        <div style={{textAlign:"center"}}>
            <Link to="/">Home page</Link>
        <h1>page not found</h1>
        <h1>Error 404 occoured</h1>
        
        <img style={{ width:"400px"}}src="https://youstable.com/blog/wp-content/uploads/2023/09/404-Error.jpg" />
        </div>
    );
}
export default PageNotFound;