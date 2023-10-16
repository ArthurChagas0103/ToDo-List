import { BrowserRouter, Routes, Route } from "react-router-dom";
import TarefasPendentes from "./pages/TarefasPendentes/TarefasPendentes";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TarefasPendentes/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes