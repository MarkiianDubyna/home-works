import './navigation.css';
import {NavLink} from "react-router-dom";
export default function Navigation () {

    return (
        <div className="navigation">
            <div className="nav_buttons">
                <NavLink to='/posts' exact >Posts</NavLink>
                <NavLink to='/comments' exact >Comments</NavLink>
                <NavLink to='/albums' exact >Albums</NavLink>
                <NavLink to='/photos' exact >Photos</NavLink>
                <NavLink to='/todos' exact >Todos</NavLink>
                <NavLink to='/users' exact >Users</NavLink>
            </div>
            <div className="navigation_line"/>
        </div>
    )
}
