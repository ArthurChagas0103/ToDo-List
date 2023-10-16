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

function Tarefa({ textoTarefa }) {
    return (
        <>
            <ConteudoPrincipal>
                <TextoTarefa>{textoTarefa}</TextoTarefa>
                <ContainerBtns>
                    <BtnTarefaConcluida><Icons icon={faCheck}/></BtnTarefaConcluida>
                    <BtnExcluirTarefa><Icons icon={faBan}/></BtnExcluirTarefa>
                </ContainerBtns>
            </ConteudoPrincipal>
        </>
    )
}

Tarefa.propTypes = {
    textoTarefa: PropTypes.string.isRequired,
}

export default Tarefa