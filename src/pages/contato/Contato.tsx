export default function Contato() {
    const submitForm = () => {
        alert("Obrigado por entrar em contato!");
    };
    return (
        <>
            <main className="min-h-[80vh] xl:px-40 ">
                <h1 className="text-4xl font-bold text-center mt-20 mb-10">
                    RH Menos Burocrático, Mais Estratégico.
                </h1>
                <p className="text-lg text-center mb-10">
                    Comece a transformar a rotina do seu RH hoje mesmo. Fale com
                    nossa equipe e veja a PeopleHub em ação.
                </p>
                <div className="text-center pt-5 pb-10 pl-20 pr-30 mb-15 rounded-4xl bg-people-color-dark">
                    <h2 className="text-2xl mb-10">Fale conosco</h2>
                    <form
                        className="grid grid-cols-[1fr_3fr] gap-y-4"
                        onSubmit={submitForm}
                    >
                        <label htmlFor="nome">
                            Nome <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="bg-white text-black px-2 rounded h-10"
                            name="nome"
                        />
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            type="text"
                            className="bg-white text-black px-2 rounded h-10"
                            name="sobrenome"
                        />
                        <label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            className="bg-white text-black px-2 rounded h-10"
                            name="email"
                        />
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            className="bg-white text-black px-2 rounded h-10"
                            name="company"
                        />
                        <div className="col-span-2 text-end">
                            <input
                                type="submit"
                                value="Enviar"
                                className="py-2 px-6 rounded mt-4 bg-people-color-aqua hover:bg-people-color-light hover:cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
