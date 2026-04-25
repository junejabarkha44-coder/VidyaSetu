import { NavLink } from "react-router-dom";
import './header.css'

export default function NavBar() {
    return (
        <header className="navbar-container glass-panel">
            <div className="navbar-brand">
                <NavLink to="/">
                    <h2 className="text-gradient">TechPath</h2>
                </NavLink>
            </div>
            <nav className="navbar-nav">
                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/courses">Courses</NavLink>
                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/learning">My Learning</NavLink>
                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/progress">Progress</NavLink>
            </nav>
            <div className="navbar-actions">
                <NavLink to="/login" className="btn-secondary">Log In</NavLink>
                <NavLink to="/courreg" className="btn-primary">Sign Up</NavLink>
            </div>
        </header>
    )
}
