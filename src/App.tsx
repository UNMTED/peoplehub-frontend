import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import Contato from "./pages/contato/Contato";
import { Home } from "./pages/home/Home";
import NossoTime from "./pages/nossotime/NossoTIme";
import Produto from "./pages/produto/Produto";
import { Sobre } from "./pages/sobre/Sobre";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="h-screen font-[Poppins] text-white bg-linear-to-bl from-people-color-dark to-people-color-light">
                    <div className="max-w-7xl mx-auto h-screen">
                        <NavBar />
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/sobre"
                                element={<Sobre />}
                            />
                            <Route
                                path="/contato"
                                element={<Contato />}
                            />
                            <Route
                                path="/nosso-time"
                                element={<NossoTime />}
                            />
                            <Route
                                path="/produto"
                                element={<Produto />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
