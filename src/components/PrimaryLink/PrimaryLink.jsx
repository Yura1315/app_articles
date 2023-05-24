import { NavLink } from "react-router-dom";
import './style.css';


export const PrimaryLink = ({path, title}) => {
    return(
        <NavLink className='primary-link' to={path}>{title}</NavLink>
    )
}