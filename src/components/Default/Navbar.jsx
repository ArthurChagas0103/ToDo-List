import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import StyleNavbar from "../../assets/styles/Default/StyleNavbar";

const {
    ConteudoPrincipal,
    Icon
} = StyleNavbar

function NavBar() {
    return (
        <>
            <ConteudoPrincipal>
                <Icon icon={faClock}/>
                <Icon icon={faCheck}/>
            </ConteudoPrincipal>
        </>
    )
}

export default NavBar