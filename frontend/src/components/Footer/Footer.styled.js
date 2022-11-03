import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 20px;
    
    h1,p {
        margin: 0;
        color: ${({theme}) => theme.colors.text};
    }
`