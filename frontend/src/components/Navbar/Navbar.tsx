import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "../../routes/Home/Home";
import SignUp from "../../routes/SignUp/SignUp";
import LogIn from "../../routes/LogIn/LogIn";


const Navbar = () => {
    return (
        <div>
             {/* Conditional render based on the browser URL */}            
            <Router>
            
                <Link to={"/"}> Home </Link>
                <Link to={"/signup"}> Sign Up </Link>
                <Link to={"/login"}> Log In </Link>

                <Routes>
                    <Route path="/" element={<Home />} />   
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>

            </Router>
        </div>
    );
}

export default Navbar