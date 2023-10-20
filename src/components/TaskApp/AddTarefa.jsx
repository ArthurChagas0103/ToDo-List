import StyleAddTarefa from "../../assets/styles/TaskApp/StyleAddTarefa"
import PropTypes from 'prop-types';

const {
    ConteudoPrincipal,
    InputCriarTarefa,
    BtnCriarTarefa
} = StyleAddTarefa

function AddTarefa({handleClickButtonCriarTarefa, valorInput, setValorInput}) {

    const handleChangeInput = (event) => {
        setValorInput(event.target.value);
    }

    const handleClickButton = () => {
        handleClickButtonCriarTarefa(valorInput);
    }

    return (
        <>
            <ConteudoPrincipal>
                <InputCriarTarefa 
                    type="text"
                    placeholder="Tenha mais foco no seu dia a dia!"
                    value={valorInput}
                    onChange={handleChangeInput}
                />
                <BtnCriarTarefa onClick={handleClickButton}>Criar Tarefa</BtnCriarTarefa>
            </ConteudoPrincipal>
        </>
    )
}

AddTarefa.propTypes = {
    handleClickButtonCriarTarefa: PropTypes.func.isRequired,
    setValorInput: PropTypes.func.isRequired,
    valorInput: PropTypes.string.isRequired
}

export default AddTarefa