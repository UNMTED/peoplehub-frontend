import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import Contato from "./pages/contato/Contato";
import { Home } from "./pages/home/Home";
import NossoTime from "./pages/nossotime/NossoTIme";
import { Sobre } from "./pages/sobre/Sobre";
import Solucao from "./pages/solucao/Solucao";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="min-h-screen font-[Poppins] text-white bg-linear-to-bl from-people-color-dark to-people-color-light">
                    <div className="px-20">
                        <div className="max-w-7xl mx-auto">
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
                                    path="/solucao"
                                    element={<Solucao />}
                                />
                            </Routes>
                        </div>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
