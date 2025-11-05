import { motion } from "framer-motion";
import { CgComponents, CgOptions, CgPoll, CgTimer } from "react-icons/cg";

export const Sobre = () => {
    // cor dos icons
    const iconBaseClasses = "text-people-color-aqua";

    const iconWrapperClasses =
        "flex-shrink-0 w-16 h-16 rounded-full border-2 border-people-color-light/30 flex items-center justify-center shadow-md shadow-people-color-light/10 z-10";

    // Animação do texto
    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    };

    const features = [
        {
            icon: (
                <CgComponents
                    className={iconBaseClasses}
                    size={32}
                    aria-label="Centralização de dados"
                />
            ),
            text: (
                <>
                    Centralize todas as informações de pessoas e processos em um
                    único sistema, garantindo{" "}
                    <strong>visão completa e integrada</strong> do seu capital
                    humano.
                </>
            ),
        },
        {
            icon: (
                <CgOptions
                    className={iconBaseClasses}
                    size={32}
                    aria-label="Interface intuitiva"
                />
            ),
            text: (
                <>
                    Interface <strong>intuitiva e fácil de usar</strong>,
                    projetada para otimizar a experiência e reduzir a curva de
                    aprendizado da equipe.
                </>
            ),
        },
        {
            icon: (
                <CgTimer
                    className={iconBaseClasses}
                    size={32}
                    aria-label="Automação e agilidade"
                />
            ),
            text: (
                <>
                    Automação inteligente que{" "}
                    <strong>elimina tarefas repetitivas</strong> e libera sua
                    equipe para focar em estratégias e talentos.
                </>
            ),
        },
        {
            icon: (
                <CgPoll
                    className={iconBaseClasses}
                    size={32}
                    aria-label="Controle e produtividade"
                />
            ),
            text: (
                <>
                    Mais <strong>controle, agilidade e produtividade</strong>,
                    com dados em tempo real que impulsionam decisões
                    estratégicas e sustentáveis.
                </>
            ),
        },
    ];

    return (
        <main className="min-h-[80vh] text-white font-[Poppins]">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <motion.section
                    className="text-center mb-10 md:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
                        Nossa História
                    </h1>

                    <p className="text-xl text-people-color-aqua max-w-3xl mx-auto font-medium">
                        A PeopleHub nasceu com a missão de unir tecnologia e
                        empatia para transformar a gestão de pessoas.
                    </p>

                    <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-6 leading-relaxed">
                        Acreditamos que o capital humano é o ativo mais valioso
                        de qualquer organização. Nossa jornada começou com o
                        compromisso de simplificar processos, conectar pessoas e
                        impulsionar o sucesso por meio de uma plataforma
                        moderna, segura e inteligente — feita para ser parceira
                        estratégica de empresas de todos os portes.
                    </p>
                </motion.section>

                <section className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-white">
                        Por que escolher a PeopleHub?
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className={`flex items-start mb-12 relative text-left ${
                                    i === features.length - 1 ? "mb-0" : ""
                                }`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={featureVariants}
                                custom={i}
                            >
                                <div className={iconWrapperClasses}>
                                    {feature.icon}
                                </div>
                                <div className="ml-6 pt-1">
                                    <p className="text-lg font-medium text-white leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};
