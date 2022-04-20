import { Link } from "react-router-dom"


import ProfileTab from "../ProfileTab/ProfileTab";


const Navbar = ({user, onLogout} : any) => {
    return (
        <div>
            {/* Conditional render based on the browser URL */}
            
            
            <Link to={"/"}> Home </Link>
            <Link to={"/about"}> About Us </Link>
                
            <ProfileTab 
                user={user} 
                onLogout={onLogout}/>

            
        </div>
    );
}

export default Navbar