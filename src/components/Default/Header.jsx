import StyleHeader from "../../assets/styles/Default/StyleHeader"

const {
    ConteudoPrincipal,
    Titulo
} = StyleHeader

function Header() {
    return (
        <>
            <ConteudoPrincipal>
                <Titulo>ToDo List</Titulo>
            </ConteudoPrincipal>
        </>
    )
}

export default Header