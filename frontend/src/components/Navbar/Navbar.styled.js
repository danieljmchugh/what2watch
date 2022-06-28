import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: ${({theme}) => theme.colors.secondary};
    }

    li {
        float: left;
    }

    li:hover {
        background-color: ${({theme}) => theme.colors.tertiary};
    }

    ul:last-child {
        margin-left: auto;
    }

`

export const StyledLink = styled(Link)`
    display: block;
    color: ${({theme}) => theme.colors.text};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;      /* Removes link underline */
`