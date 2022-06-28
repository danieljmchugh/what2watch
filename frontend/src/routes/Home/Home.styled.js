import styled from "styled-components"

export const StyledHome = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px;

    height:100vh; /* 100% of the viewport height */
    
    h1 {
        margin: 0;
    }
    
    h1, h2, p {
        color: ${({theme}) => theme.colors.text}
    }   
`