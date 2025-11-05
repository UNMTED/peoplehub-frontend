import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const linkBase =
        "rounded py-1 px-4 hover:bg-white hover:text-black hover:cursor-pointer";
    const linkAtivo = "bg-white text-people-color-dark";
    return (
        <>
            <div className="flex justify-between pt-5">
                <img
                    src="/src/assets/images/logo.png"
                    alt="Logo PeopleHub"
                    className="h-10 sm:h-12 md:h-20 w-auto object-contain"
                />
                <nav className="flex lg:text-xl xl:text-2xl justify-end gap-2 mt-4 mb-auto">
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
                    <NavLink
                        to="/contato"
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? linkAtivo : ""}`
                        }
                    >
                        Contato
                    </NavLink>
                    <NavLink
                        to="/nosso-time"
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? linkAtivo : ""}`
                        }
                    >
                        Nosso Time
                    </NavLink>
                    <NavLink
                        to="/solucao"
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? linkAtivo : ""}`
                        }
                    >
                        Solução
                    </NavLink>
                </nav>
            </div>
        </>
    );
};
