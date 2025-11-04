import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Sobre } from "./pages/sobre/Sobre";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="h-screen text-white bg-linear-to-bl from-people-color-dark to-people-color-light">
                    <div className="w-4/5 m-auto h-screen">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/sobre"
                                element={<Sobre />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
