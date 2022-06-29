import { slide as Bar } from "react-burger-menu";
import { StyledSidebar } from "./Sidebar.styled";
import ProfileTab from "../ProfileTab/ProfileTab";

const Sidebar = ({user, onLogout} : any) => {
    return (
        <StyledSidebar>
            <Bar right>
                <ProfileTab user={user} onLogout={onLogout}/>
            </Bar>
        </StyledSidebar>
    );
}


export default Sidebar