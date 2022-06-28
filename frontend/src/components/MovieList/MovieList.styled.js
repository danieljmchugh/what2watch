import styled from "styled-components"

// The ul will act as the flexbox container for the movie cards
export const StyledMovieList = styled.div`

    background-color: ${({theme}) => theme.colors.body};

    ul {
        margin: 0;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style-type: none;        
        background-color: ${({theme}) => theme.colors.primary};
    }
` 