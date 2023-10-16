import StyleNenhumaTarefa from "../../assets/styles/Default/StyleNenhumaTarefa"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    Texto
} = StyleNenhumaTarefa

function NenhumaTarefa({texto}) {
    return (
        <>
            <ConteudoPrincipal>
                <Texto>{texto}</Texto>
            </ConteudoPrincipal>
        </>
    )
}

NenhumaTarefa.propTypes = {
    texto: PropTypes.func.isRequired,
}

export default NenhumaTarefa