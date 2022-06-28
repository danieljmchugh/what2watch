import styled from "styled-components";


/* 
    Note: this is default styles provided by the react-burger-menu documentation
          with minor ajustments
*/

export const StyledSidebar = styled.div`
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      right: 36px;
      top: 25px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: ${({theme}) => theme.colors.tertiary};
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
      position: static;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: ${({theme}) => theme.colors.primary};
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
      display: block;
      color: ${({theme}) => theme.colors.text};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;      /* Removes link underline */
    }

`