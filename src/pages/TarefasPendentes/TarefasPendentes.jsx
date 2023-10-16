import { useState } from "react"
import StyleTarefasPendentes from "../../assets/styles/TarefasPendentes/StyleTarefasPendentes"
import Header from "../../components/Default/Header"
import NavBar from "../../components/Default/Navbar"
import AddTarefa from "../../components/TarefasPendentes/AddTarefa"

const {
    ConteudoPrincipal,
    ConteudoPag
} = StyleTarefasPendentes

function TarefasPendentes() {

    const [valorInput, setValorInput] = useState('')

    const handleClickButtonCriarTarefa = () => {
        console.log(valorInput)
    }

    return (
        <>
            <Header />
            <ConteudoPrincipal>
                <NavBar />
                <ConteudoPag>
                    <AddTarefa
                    handleClickButtonCriarTarefa={handleClickButtonCriarTarefa}
                    valorInput={valorInput}
                    setValorInput={setValorInput}
                    />
                </ConteudoPag>
            </ConteudoPrincipal>
        </>
    )
}

export default TarefasPendentes