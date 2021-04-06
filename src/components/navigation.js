import './navigation.css';
import {Link} from "react-router-dom";
export default function Navigation () {

    return (
        <div className="navigation">
            <div className="nav_buttons">
                <Link to='/posts'>Posts</Link>
                <Link to='/comments'>Comments</Link>
                <Link to='/albums'>Albums</Link>
                <Link to='/photos'>Photos</Link>
                <Link to='/todos'>Todos</Link>
                <Link to='/users'>Users</Link>
            </div>
            <div className="navigation_line"></div>
        </div>
    )
}