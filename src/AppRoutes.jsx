import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskApp from "./pages/TaskApp";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskApp/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes