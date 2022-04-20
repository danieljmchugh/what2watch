import { Link } from "react-router-dom"
import Togglable from "../Togglable/Togglable";


const ProfileTab = ({user, onLogout} : any) =>  {

    return (
        <Togglable buttonLable='Profile'>
            {
                user ?
                    <>
                        <p>Welcome {user.name}!</p>
                        <Link to={"/mylists"}>My Lists</Link>
                        
                        <button onClick={onLogout}>Logout</button>
                    </>
                    :
                    <>
                        <Link to={"/login"}> Log In </Link>
                        <Link to={"/signup"}> Sign Up </Link>
                    </>
                    
            }
            
        </Togglable>
    );
}

export default ProfileTab
