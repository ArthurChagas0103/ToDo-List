import styled from "styled-components";

const StyleTaskApp = {
    ConteudoPrincipal : styled.div `
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: row;
    `,

    ConteudoPag : styled.div `
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    `,

    ContainerTarefas : styled.div `
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 30px 0px 30px;
    `,

    ContainerTarefasConcluidas : styled.div `
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 30px 0px 30px;
    `,

    DefaultContainer: styled.div `
    width: 100%;
    `,

    Titulo : styled.h1 `
    font-family: Poppins, 'sans-serif';
    font-size: 30px;
    font-weight: 600;
    margin: 20px 30px !important;
    margin-bottom: 0 !important;
    `
}

export default StyleTaskApp