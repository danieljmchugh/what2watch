import { Link } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

import ProfileTab from "../ProfileTab/ProfileTab";
import { StyledNavbar, StyledLink } from "./Navbar.styled";

const Navbar = ({user, onLogout} : any) => {
    return (
        <StyledNavbar>
            {/* Conditional render based on the browser URL */}
            <ul>
                <li><Sidebar></Sidebar></li>
                <li><StyledLink to={"/"}> Home </StyledLink></li>
                <li><StyledLink to={"/about"}> About Us </StyledLink></li>
                <li><ProfileTab user={user} onLogout={onLogout}/></li>
            </ul>    
        </StyledNavbar>
    );
}

export default Navbar