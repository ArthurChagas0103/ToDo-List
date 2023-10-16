import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import StyleNavbar from "../../assets/styles/Default/StyleNavbar";
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    Icon
} = StyleNavbar

function NavBar({setPagAtual}) {

    const navigateToTarefasPendentes = () => {
        setPagAtual('tarefas-pendentes')
    }

    const navigateToTarefasConcluidas = () => {
        setPagAtual('tarefas-concluidas')
    }

    return (
        <>
            <ConteudoPrincipal>
                <Icon 
                icon={faClock}
                onClick={navigateToTarefasPendentes}
                />
                <Icon 
                icon={faCheck}
                onClick={navigateToTarefasConcluidas}
                />
            </ConteudoPrincipal>
        </>
    )
}

NavBar.propTypes = {
    setPagAtual: PropTypes.func.isRequired,
}

export default NavBar