import  { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
	body {
        margin: 0px;
        padding: 0px;
    }

    h1, h2, h3, p {
        color: ${({theme}) => theme.colors.text}
    }

    height:100vh; /* 100% of the viewport height */
`


export const StyledLink = styled(Link)`
    display: block;
    color: ${({theme}) => theme.colors.text};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;      /* Removes link underline */

    :hover {
        background-color: ${({theme}) => theme.colors.tertiary};
    }
`