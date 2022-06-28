import styled from "styled-components"

export const StyledLogIn = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px;
    
    height:100vh; /* 100% of the viewport height */
        
    h1, h2, p {
        color: ${({theme}) => theme.colors.text}
    } 
`