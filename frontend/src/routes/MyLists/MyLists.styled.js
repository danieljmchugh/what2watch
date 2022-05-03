import styled from "styled-components";

export const StyledMyLists = styled.div`
    background-color: ${({theme}) => theme.colors.body};
    
    ul {
        list-style-type: none;
    }
`