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
    DefaultContainer
} = StyleTaskApp

function TarefasPendentes() {

    const [pagAtual, setPagAtual] = useState('tarefas-pendentes')
    const [listaDeTarefas, setListaDeTarefas] = useState([])
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
                {console.log(pagAtual)}
                <ConteudoPag>
                    {pagAtual === 'tarefas-pendentes' ?
                        <DefaultContainer>
                            <AddTarefa
                                handleClickButtonCriarTarefa={handleClickButtonCriarTarefa}
                                valorInput={valorInput}
                                setValorInput={setValorInput}
                            />
                            <ContainerTarefas>
                                {listaDeTarefas.length > 0 ?
                                    listaDeTarefas.map((item, index) => (
                                        <Tarefa
                                            key={index}
                                            textoTarefa={item}
                                        />
                                    ))
                                    : <NenhumaTarefa />}
                            </ContainerTarefas>
                        </DefaultContainer>
                        : ''
                    }
                </ConteudoPag>
            </ConteudoPrincipal>
        </>
    )
}

export default TarefasPendentes