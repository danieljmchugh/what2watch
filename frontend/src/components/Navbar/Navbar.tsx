import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "../../routes/Home/Home";
import SignUp from "../../routes/SignUp/SignUp";
import LogIn from "../../routes/LogIn/LogIn";
import About from "../../routes/About/About";
import ProfileTab from "../ProfileTab/ProfileTab";


const Navbar = ({user} : any) => {
    return (
        <div>
            {/* Conditional render based on the browser URL */}
            
            
            <Link to={"/"}> Home </Link>
            <Link to={"/signup"}> Sign Up </Link>
            <Link to={"/login"}> Log In </Link>
            <Link to={"/about"}> About Us </Link>
                
            <ProfileTab user={user}/>

            
        </div>
    );
}

export default Navbar