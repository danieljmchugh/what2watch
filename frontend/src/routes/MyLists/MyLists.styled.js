import styled from "styled-components";

export const StyledMyLists = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px;
    

    h1 {
        margin: 0;
    }
    
    h1, h2, p {
        color: ${({theme}) => theme.colors.text}
    }
      
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`