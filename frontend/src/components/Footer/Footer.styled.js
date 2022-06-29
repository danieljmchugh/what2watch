import styled from "styled-components";

export const StyledFooter = styled.footer`
    
    // margin-top: auto;
    // width: 100%;

    background-color: ${({theme}) => theme.colors.secondary};
    padding: 20px;
    
    h1,p {
        margin: 0;
        color: ${({theme}) => theme.colors.text};
    }
`