import { slide as Bar } from "react-burger-menu";
import { StyledSidebar } from "./Sidebar.styled";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Bar right>
                <a href="">Test 1</a>
                <a href="">Test 2</a>
                <a href="">Test 3</a>
            </Bar>
        </StyledSidebar>
    );
}


export default Sidebar