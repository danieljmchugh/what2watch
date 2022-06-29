import { Link } from "react-router-dom"
import { StyledProfileTab } from "./ProfileTab.styled";
import { StyledLink } from "../../GlobalStyle"

const ProfileTab = ({user, onLogout} : any) =>  {
    return (
        <StyledProfileTab>
            {
                user ?
                    <div>
                        <p>Welcome {user.name}!</p>
                        <StyledLink to={"/mylists"}>My Lists</StyledLink>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                    :
                    <div>
                        <StyledLink to={"/login"}> Log In </StyledLink>
                        <StyledLink to={"/signup"}> Sign Up </StyledLink>
                    </div>
                    
            }
        </StyledProfileTab>  
    );
}

export default ProfileTab
