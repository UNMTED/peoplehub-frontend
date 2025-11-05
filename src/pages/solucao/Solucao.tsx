const Solucao = () => {
    return (
        <div className="min-h-screen bg text-white flex flex-col items-center pt-20 pb-10 px-3 md:px-8 lg:px-12 overflow-hidden">
            {/* Cabeçalho */}
            <div className="text-center mb-16 max-w-4xl ">
                <h1 className="text-4xl md:text-4xl font-semibold mb-10">
                    Gestão de RH Otimizada e 100% Integrada.
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                    A PeopleHub é o seu sistema completo para simplificar
                    processos, reduzir burocracia e focar no que realmente
                    importa: as pessoas.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
                {/* Card 1 */}
                <div
                    className="bg-linear-to-br from-[#0b1f3a]/80 to-[#143b63]/60 
                    border border-[#1e4779]/40 
                    rounded-2xl 
                    p-8 
                    shadow-md 
                    backdrop-blur-lg 
                    transition-all 
                    duration-500 
                    hover:scale-[1.03] 
                    hover:shadow-2xl 
                    hover:shadow-blue-500/30 
                    hover:border-blue-400/50 
                    hover:bg-linear-to-tr 
                    hover:from-[#143b63]/80 
                    hover:to-[#1b4f85]/60 
                    cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3">
                        Rotinas de DP e Conformidade
                    </h2>
                    <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                        Gerencie folha de pagamento, férias e benefícios de
                        forma integrada, garantindo conformidade legal e
                        automação dos processos de RH.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-lg list-disc list-inside">
                        <li>
                            Gestão completa e automatizada de folha de
                            pagamento.
                        </li>
                        <li>Controle de férias e benefícios em um só lugar.</li>
                        <li>
                            Relatórios prontos para auditorias e conformidade
                            legal.
                        </li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-linear-to-br from-[#0b1f3a]/80 to-[#143b63]/60 
                    border border-[#1e4779]/40 
                    rounded-2xl 
                    p-8 
                    shadow-md 
                    backdrop-blur-lg 
                    transition-all 
                    duration-500 
                    hover:scale-[1.03] 
                    hover:shadow-2xl 
                    hover:shadow-blue-500/30 
                    hover:border-blue-400/50 
                    hover:bg-linear-to-tr 
                    hover:from-[#143b63]/80 
                    hover:to-[#1b4f85]/60 
                    cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3">
                        Gestão de Pessoas e Desempenho
                    </h2>
                    <p className="text-gray-300 text-lg mb-5 leading-relaxed ">
                        Acompanhe indicadores de desempenho, engajamento e metas
                        da equipe com um painel simples e intuitivo.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-lg list-disc list-inside">
                        <li>Indicadores de performance e produtividade.</li>
                        <li>
                            Feedbacks contínuos e planos de desenvolvimento.
                        </li>
                        <li>Relatórios em tempo real sobre a equipe.</li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div
                    className="bg-linear-to-br from-[#0b1f3a]/80 to-[#143b63]/60 
                    border border-[#1e4779]/40 
                    rounded-2xl 
                    p-8 
                    shadow-md 
                    backdrop-blur-lg 
                    transition-all 
                    duration-500 
                    hover:scale-[1.03] 
                    hover:shadow-2xl 
                    hover:shadow-blue-500/30 
                    hover:border-blue-400/50 
                    hover:from-[#143b63]/80 
                    hover:to-[#1b4f85]/60 
                    cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3">
                        Integração e Automação
                    </h2>
                    <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                        Centralize dados e conecte todos os setores da empresa
                        em uma única plataforma para decisões mais estratégicas
                        e rápidas.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-lg list-disc list-inside">
                        <li>
                            Automatize fluxos entre setores de RH e financeiro.
                        </li>
                        <li>Reduza burocracias com processos inteligentes.</li>
                        <li>
                            Melhore a comunicação interna e eficiência geral.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Solucao;
