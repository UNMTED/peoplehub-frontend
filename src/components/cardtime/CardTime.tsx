import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import React from "react";

type CardProps = {
    name: string;
    role: string;
    photo: string;
    githubLink?: string;
    linkedinLink?: string;
    instagramLink?: string;
};

const CardTime: React.FC<CardProps> = ({
    name,
    role,
    photo,
    githubLink,
    linkedinLink,
    instagramLink,
}) => {
    return (
        <div className="w-[140px] h-[190px] sm:w-[150px] sm:h-[200px] md:w-[170px] md:h-[220px] bg-white flex items-center justify-center relative transition-all duration-500 cursor-pointer group rounded-2xl">
            <div className="z-10 w-full h-full flex flex-col items-center justify-center bg-people-color-dark text-gray-500 font-medium text-base transition-transform duration-500 group-hover:-translate-x-[25%] group-hover:-translate-y-[20%] rounded-2xl">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="absolute inset-0 flex bg-[aliceblue] z-0 rounded-2xl">
                <div className="w-3/4 h-full flex flex-col items-center justify-end bg-[aliceblue] font-sans rounded-2xl text-center pb-2 px-2">
                    <p className="text-people-color-dark text-xs sm:text-sm md:text-base font-medium">
                        {name}
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[12px] font-normal text-center">
                        {role}
                    </p>
                </div>

                <div className="w-1/4 h-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 text-people-color-dark hover:text-people-color-aqua"
                        >
                            <GithubLogo
                                size={18}
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                weight="fill"
                            />
                        </a>
                    )}
                    {linkedinLink && (
                        <a
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 text-people-color-dark hover:text-people-color-aqua"
                        >
                            <LinkedinLogo
                                size={18}
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                weight="fill"
                            />
                        </a>
                    )}
                    {instagramLink && (
                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 text-people-color-dark hover:text-people-color-aqua"
                        >
                            <InstagramLogo
                                size={18}
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                weight="fill"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardTime;
