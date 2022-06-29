import { Link } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

import ProfileTab from "../ProfileTab/ProfileTab";
import { StyledNavbar } from "./Navbar.styled";
import { StyledLink } from "../../GlobalStyle"

const Navbar = ({user, onLogout} : any) => {
    return (
        <StyledNavbar>
            <ul>
                <li><StyledLink to={"/"}> Home </StyledLink></li>
                <li><StyledLink to={"/about"}> About Us </StyledLink></li>
                <li><Sidebar user={user} onLogout={onLogout}/></li>
            </ul>    
        </StyledNavbar>
    );
}

export default Navbar