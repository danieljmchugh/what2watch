import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    // display: flex;
    // background-color: ${({theme}) => theme.colors.header};
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
    }

    li {
        float: left;
    }

    li:hover {
        background-color: #111111;
    }

    /* 
    ul:last-child {
        margin-left: auto;
    } */ 
`

export const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`