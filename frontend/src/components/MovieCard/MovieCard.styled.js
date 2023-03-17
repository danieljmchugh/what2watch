import styled from "styled-components";
import Popup from 'reactjs-popup';

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

export const StyledPopup = styled(Popup)`
    

    /* animation */

    @keyframes anvil {
      0% {
        transform: scale(1) translateY(0px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
      }
      1% {
        transform: scale(0.96) translateY(10px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
      }
      100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
        box-shadow: 0 0 500px rgba(241, 241, 241, 0);
      }
    }


    &-content {
        -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
        list-style-type: none;
        flex-basis: 600px;
        padding: 10px;
        border-radius: 25px;

        color: ${({theme}) => theme.colors.text};
        background-color: ${({theme}) => theme.colors.secondary};

        .movieContent {
            display: flex;

            img {
                padding-left: 10px;
            }            
        }

    }
`