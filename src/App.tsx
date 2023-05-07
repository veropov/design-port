import { Route, Routes } from "react-router-dom";
import HomePage from "./lib/HomePage";
import UxPage from "./lib/UxPage"
import ItPage from "./lib/ItPage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={HomePage()}/>
                <Route path="/ux" element={UxPage()}/>
                <Route path="/it" element={ItPage()}/>
            </Routes>
        </div>
    )
}