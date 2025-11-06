import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#00ff00] font-bold text-xl">Olá, bem-vindo ao meu portfólio</p>
                <h1 className="text-4xl sm:text-7xl font-bold py-4">
                    Segurança da Informação & Desenvolvimento Web
                </h1>
                <div className="flex items-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-400">
                        Especializado em
                    </p>
                    <TypeAnimation
                        className="text-xl sm:text-2xl font-bold pl-2 text-[#00ff00]"
                        sequence={[
                            'Desenvolvimento Web Seguro',
                            1000,
                            'Front End devoloper',
                            1000,
                            'Back End developer',
                            1000,
                            'OSINT',
                            1000,
                            'Forense Digital',
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                
                <p className="text-gray-400 py-4 max-w-[700px]">
                    "A segurança não é apenas uma camada de proteção, é uma mentalidade que deve estar presente em cada linha de código."
                </p>
                
                <div>
                    <button className="border-2 border-[#00ff00] px-6 py-3 my-2 flex items-center hover:bg-[#00ff00] hover:text-black duration-300">
                        Ver Projetos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;