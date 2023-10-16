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
    padding: 30px 30px 0px 30px;
    `,

    DefaultContainer: styled.div `
    width: 100%;
    `
}

export default StyleTaskApp