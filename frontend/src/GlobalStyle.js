import  { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { theme } from './Theme';
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
	body {
        margin: 0px;
        padding: 0px;
        background-color: ${({theme}) => theme.colors.primary};
    }

    

    h1, h2, h3, p {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: ${({theme}) => theme.colors.text}
    }

    height: 100%; /* 100% of the viewport height */
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