import { NavBar } from "../../components/navbar/NavBar";

export const Home = () => {
    return (
        <>
            <div className="bg-[url(src/assets/images/imagem_de_fundo.png)] bg-top-right bg-no-repeat h-full">
                <NavBar />
                <main className="  mt-20 font-[Poppins] tracking-widest">
                    <section className="w-1/2 flex flex-col gap-10">
                        <h1 className="text-[48px]">
                            Sua Solução em <br /> Gestão <br /> de Capital
                            Humano
                        </h1>
                        <p className="text-2xl">
                            Simplifique os processos de RH, conecte pessoas e
                            impulsione o sucesso da sua organização com
                            tecnologia e empatia.
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
};
