import { useState } from "react"
import StyleTaskApp from "../assets/styles/TaskApp/StyleTaskApp"
import Header from "../components/Default/Header"
import NavBar from "../components/Default/Navbar"
import AddTarefa from "../components/TaskApp/AddTarefa"
import Tarefa from "../components/Default/Tarefa"
import NenhumaTarefa from "../components/Default/NenhumaTarefa"

const {
    ConteudoPrincipal,
    ConteudoPag,
    ContainerTarefas,
    ContainerTarefasConcluidas,
    DefaultContainer,
    Titulo
} = StyleTaskApp

function TarefasPendentes() {

    const [pagAtual, setPagAtual] = useState('tarefas-pendentes')
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [listaDeTarefasConcluidas, setListaDeTarefasConcluidas] = useState([])
    const [valorInput, setValorInput] = useState('')

    const handleClickButtonCriarTarefa = () => {
        if (valorInput !== '' && valorInput !== null && valorInput !== undefined && valorInput.trim() !== '') {
            setListaDeTarefas(lista => [...lista, valorInput])
        }
        else {
            alert('Nenhum texto adicionado!')
        }
    }

    return (
        <>
            <Header />
            <ConteudoPrincipal>
                <NavBar
                    setPagAtual={setPagAtual}
                />
                <ConteudoPag>
                    {pagAtual === 'tarefas-pendentes' ?
                        <DefaultContainer>
                            <AddTarefa
                                handleClickButtonCriarTarefa={handleClickButtonCriarTarefa}
                                valorInput={valorInput}
                                setValorInput={setValorInput}
                            />
                            <Titulo>Tarefas pendentes:</Titulo>
                            <ContainerTarefas>
                                {listaDeTarefas.length > 0 ?
                                    listaDeTarefas.map((item, index) => (
                                        <Tarefa
                                            key={index}
                                            textoTarefa={item}
                                        />
                                    ))
                                    : <NenhumaTarefa texto={'Nenhuma tarefa adicionada!'} />}
                            </ContainerTarefas>
                        </DefaultContainer>
                        :
                        <DefaultContainer>
                            <Titulo>Tarefas concluídas:</Titulo>
                            <ContainerTarefasConcluidas>
                                {listaDeTarefasConcluidas.length > 0 ?
                                    ''
                                    :
                                    <NenhumaTarefa texto={'Nenhuma tarefa concluída!'} />
                                }
                            </ContainerTarefasConcluidas>
                        </DefaultContainer>
                    }
                </ConteudoPag>
            </ConteudoPrincipal>
        </>
    )
}

export default TarefasPendentes