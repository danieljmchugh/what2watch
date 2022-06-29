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
`