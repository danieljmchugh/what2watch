import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    display: flex;
    background-color: ${({theme}) => theme.colors.header};
    
    ul:last-child {
        margin-left: auto;
    } 
`