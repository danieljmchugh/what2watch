import styled from "styled-components";

export const StyledMovieCard = styled.li`
    text-align: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: ${({theme}) => theme.colors.secondary};;
`