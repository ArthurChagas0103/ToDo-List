import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyleTarefa = {
    ConteudoPrincipal : styled.div `
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: flex-start;
    align-items: center;
    background-color: #faf0cac4;
    padding: 10px 10px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    `,

    ContainerBtns: styled.div `
    justify-self: end;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
    `,

    TextoTarefa : styled.h6 `
    font-family: Poppins, 'sans-serif';
    font-size: 14px;
    font-weight: 400;
    `,

    TextoTarefaConcluida : styled.h6 `
    font-family: Poppins, 'sans-serif';
    font-size: 14px;
    font-weight: 400;
    text-decoration: line-through;
    `,

    BtnTarefaConcluida : styled.button `
    border-radius: 30px;
    border: solid 1px #4da768;
    background-color: transparent;
    font-family: Poppins, 'sans-serif';
    width: 35px;
    height: 30px;
    color: #4da768;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transition: all 0.5s;
        cursor: pointer;
        background-color: #4da768;
        color: #FFF;
    }
    `,

    BtnExcluirTarefa : styled.button `
    border-radius: 30px;
    border: solid 1px #e3584b;
    background-color: transparent;
    font-family: Poppins, 'sans-serif';
    width: 35px;
    height: 30px;
    color: #e3584b;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    &:hover {
        transition: all 0.5s;
        cursor: pointer;
        background-color: #e3584b;
        color: #FFF;
    }
    `,

    Icons : styled(FontAwesomeIcon) `
    
    `
}

export default StyleTarefa