import { Link } from "react-router-dom"
import { StyledProfileTab } from "./ProfileTab.styled";

const ProfileTab = ({user, onLogout} : any) =>  {
    return (
        <StyledProfileTab>
            {
                user ?
                    <ul>
                        <p>Welcome {user.name}!</p>
                        <Link to={"/mylists"}>My Lists</Link>
                        
                        <button onClick={onLogout}>Logout</button>
                    </ul>
                    :
                    <ul>
                        <Link to={"/login"}> Log In </Link>
                        <Link to={"/signup"}> Sign Up </Link>
                    </ul>
                    
            }
        </StyledProfileTab>  
    );
}

export default ProfileTab
