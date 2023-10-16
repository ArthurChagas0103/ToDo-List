import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyleNavbar = {
    ConteudoPrincipal : styled.div `
    background-color: #0d3b66;
    width: 6%;
    min-height: 90vh;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding-top: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    `,

    Icon : styled(FontAwesomeIcon) `
    font-size: 20px;
    color: #FFF;
    &:hover {
        cursor: pointer;
    }
    `
}

export default StyleNavbar