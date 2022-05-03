import styled from "styled-components"

export const StyledHome = styled.div`
    background-color: ${({theme}) => theme.colors.body};
    
    h1, h2, p {
        color: ${({theme}) => theme.colors.primary}
    }   
`