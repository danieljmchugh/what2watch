import { Link } from "react-router-dom"

import ProfileTab from "../ProfileTab/ProfileTab";

import { StyledNavbar } from "./Navbar.styled";

const Navbar = ({user, onLogout} : any) => {
    return (
        <StyledNavbar>
            {/* Conditional render based on the browser URL */}
            
            <ul><Link to={"/"}> Home </Link></ul>
            <ul><Link to={"/about"}> About Us </Link></ul>
            <ul><ProfileTab user={user} onLogout={onLogout}/></ul>
                
        </StyledNavbar>
    );
}

export default Navbar