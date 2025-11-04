import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const linkBase =
        "rounded py-1 px-4 hover:bg-white hover:text-black hover:cursor-pointer";
    const linkAtivo = "bg-white text-black";
    return (
        <>
            <div className="flex justify-between w-7xl mx-auto">
                <img
                    src="/src/assets/images/logo.png"
                    alt="Logo PeopleHub"
                />
                <nav className="flex text-2xl justify-end gap-2 mt-4 mb-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? linkAtivo : ""}`
                        }
                    >
                        Início
                    </NavLink>

                    <NavLink
                        to="/sobre"
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? linkAtivo : ""}`
                        }
                    >
                        Sobre
                    </NavLink>
                    <span className="text-white hover:text-black rounded py-1 px-4 hover:bg-white hover:cursor-pointer">
                        Contato
                    </span>
                    <span className="text-white hover:text-black rounded py-1 px-4 hover:bg-white hover:cursor-pointer">
                        Nosso Time
                    </span>
                    <span className="text-white hover:text-black rounded py-1 px-4 hover:bg-white hover:cursor-pointer">
                        Produto
                    </span>
                </nav>
            </div>
        </>
    );
};
