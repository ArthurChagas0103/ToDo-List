import styled from "styled-components";

const StyleAddTarefa = {
    ConteudoPrincipal : styled.div `
    width: 100%;
    height: 12vh;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 0px 10px 0px 10px;
    `,

    InputCriarTarefa : styled.input `
    font-family: Poppins, 'sans-serif';
    font-size: 14px;
    border-radius: 5px;
    border: solid 1px #B4B4B4;
    width: 50%;
    padding: 5px 10px;
    &:focus {
        outline: none;
    }
    `,

    BtnCriarTarefa : styled.button `
    border: none;
    border-radius: 5px;
    width: 10%;
    padding: 5px 10px;
    font-family: Poppins, 'sans-serif';
    &:hover {
        cursor: pointer;
    }
    `
}

export default StyleAddTarefa