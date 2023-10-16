import StyleNenhumaTarefa from "../../assets/styles/Default/StyleNenhumaTarefa"

const {
    ConteudoPrincipal,
    Texto
} = StyleNenhumaTarefa

function NenhumaTarefa() {
    return (
        <>
            <ConteudoPrincipal>
                <Texto>Você ainda não possui nenhuma tarefa cadastrada!</Texto>
            </ConteudoPrincipal>
        </>
    )
}

export default NenhumaTarefa