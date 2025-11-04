import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <div className="flex justify-between w-7xl mx-auto">
                <img
                    src="/src/assets/images/logo.png"
                    alt="Logo PeopleHub"
                />
                <nav className="flex text-2xl justify-end gap-2 mt-4 mb-auto">
                    <Link
                        to="/"
                        className="text-white hover:text-black rounded py-1 px-4 hover:bg-white hover:cursor-pointer"
                    >
                        Início
                    </Link>
                    <span className="text-white hover:text-black rounded py-1 px-4 hover:bg-white hover:cursor-pointer">
                        Sobre
                    </span>
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
