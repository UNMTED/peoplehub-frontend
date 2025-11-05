import CardTime from "../../components/cardtime/CardTime";

export default function NossoTime() {
    return (
        <main className="min-h-[80vh] py-16  px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className=" text-3x1 sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Conheça o{" "}
                    <span className="text-people-color-aqua">Nosso Time</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-white max-w-2xl  tracking-wide    font-light  w-4/5 mx-auto">
                    Nós da{" "}
                    <span className="font-bold text-people-color-aqua">
                        Unmted
                    </span>{" "}
                    somos um grupo apaixonado por tecnologia, design e inovação.
                    Cada membro traz uma expertise única para construir
                    experiências incríveis.
                </p>
            </div>

            {/* Grid responsivo: 4 em cima, 3 embaixo */}
            <div className="mt-12 max-w-7xl xl:max-w-[90%] mx-auto">
                {/* Linha 1: 4 cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-4 2xl:gap-3 justify-items-center">
                    <CardTime
                        name="Jefferson C "
                        role="Dev FullStack"
                        photo="https://avatars.githubusercontent.com/u/186518441?v=4"
                        githubLink="https://github.com/JeffersonCarvalhoReis"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/jeffersoncarvalhoreis/"
                    />
                    <CardTime
                        name="Fernanda B"
                        role=" Dev FullStack"
                        photo="https://media.licdn.com/dms/image/v2/D4D03AQGQmkgyn9RbkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726696497220?e=1764201600&v=beta&t=3IlA3ltxP2gI3tkhwRPgajHsLKg_fd5NAkADcQ8DgbY"
                        githubLink="https://github.com/Nanda2301"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/fernandabritodev/"
                    />
                    <CardTime
                        name="Edvaldo V"
                        role="Dev FullStack"
                        photo="https://avatars.githubusercontent.com/u/95538992?v=4"
                        githubLink="https://github.com/EdyVerissimo"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/edvaldo-verissimo-3886211a8/"
                    />
                    <CardTime
                        name="Mayara O"
                        role="Dev FullStack"
                        photo="https://avatars.githubusercontent.com/u/53092812?v=4"
                        githubLink="https://github.com/MayaraOliveir"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/mayaraoliveiraa/"
                    />
                </div>

                {/* Linha 2: 3 cards centralizados */}
                <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 xl:gap-4 2xl:gap-3 justify-items-center max-w-md sm:max-w-2xl md:max-w-3xl xl:max-w-4xl mx-auto">
                    <CardTime
                        name="Mariana S"
                        role="Dev FullStack"
                        photo="https://media.licdn.com/dms/image/v2/D4D03AQH-Z3v4BoMzUw/profile-displayphoto-shrink_200_200/B4DZnihIrpIgAY-/0/1760441961611?e=1764201600&v=beta&t=gbqBhV0Bczp0z4HbFrGyL7CnqRcLNSZADEKJXJMq8K8"
                        githubLink="https://github.com/marimp3"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/marisants/"
                    />
                    <CardTime
                        name="Eduardo A "
                        role="Dev FullStack"
                        photo="https://avatars.githubusercontent.com/u/177887921?v=4"
                        githubLink="https://github.com/Eduardo-Alves-0"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/eduardoalvesfullstack/"
                    />
                    <CardTime
                        name="Joe C"
                        role="Dev FullStack"
                        photo="https://avatars.githubusercontent.com/u/90300759?v=4"
                        githubLink="https://github.com/JoeChriszelSilva"
                        instagramLink="#"
                        linkedinLink="https://www.linkedin.com/in/joechriszelsilva/"
                    />
                </div>
            </div>
        </main>
    );
}
