import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons"
import StyleTarefa from "../../assets/styles/Default/StyleTarefa"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    ContainerBtns,
    TextoTarefa,
    BtnTarefaConcluida,
    BtnExcluirTarefa,
    Icons
} = StyleTarefa

function Tarefa({ textoTarefa, onMarcarComoConcluido, onExcluir }) {
    return (
        <>
            <ConteudoPrincipal>
                <TextoTarefa>{textoTarefa}</TextoTarefa>
                <ContainerBtns>
                    <BtnTarefaConcluida onClick={onMarcarComoConcluido}><Icons icon={faCheck}/></BtnTarefaConcluida>
                    <BtnExcluirTarefa onClick={onExcluir}><Icons icon={faBan}/></BtnExcluirTarefa>
                </ContainerBtns>
            </ConteudoPrincipal>
        </>
    )
}

Tarefa.propTypes = {
    textoTarefa: PropTypes.string.isRequired,
    onMarcarComoConcluido: PropTypes.func,
    onExcluir: PropTypes.func
}

export default Tarefa