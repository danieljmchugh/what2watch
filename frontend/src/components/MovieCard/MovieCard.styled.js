import styled from "styled-components";

export const StyledMovieCard = styled.li`
    flex-basis: 250px;
    text-align: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;

    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.secondary};

    :hover {
        cursor: pointer
    }
`