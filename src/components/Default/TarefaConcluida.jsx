import StyleTarefa from "../../assets/styles/Default/StyleTarefa"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    TextoTarefaConcluida
} = StyleTarefa

function Tarefa({ textoTarefa }) {
    return (
        <>
            <ConteudoPrincipal>
                <TextoTarefaConcluida>{textoTarefa}</TextoTarefaConcluida>
            </ConteudoPrincipal>
        </>
    )
}

Tarefa.propTypes = {
    textoTarefa: PropTypes.string.isRequired
}

export default Tarefa