// Banner animado para blog de Python, OSINT e Forense Digital
export default function Banner() {
    return (
        <section className="w-full min-h-[50vh] flex flex-col items-center justify-center px-2 sm:px-4 max-w-full relative overflow-hidden text-center">
            {/* Fundo animado com círculos */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center w-full h-full overflow-hidden pointer-events-none">
                <div className="animate-pulse w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-200/40 rounded-full blur-2xl absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />
                <div className="animate-ping w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 bg-blue-400/30 rounded-full blur-2xl absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-4 drop-shadow-lg w-full text-center">
            Aprenda Python para OSINT & Forense Digital
            </h2>
            <p className="text-base xs:text-lg md:text-2xl text-blue-800 dark:text-blue-100 max-w-2xl mb-8 mx-auto w-full text-center">
                Dicas, tutoriais e ferramentas para investigação digital, coleta de inteligência e análise forense usando Python.
            </p>
                {/* Animação de código Python digitando */}
            <div className="bg-blue-900/90 dark:bg-blue-950/90 text-green-300 font-mono rounded-lg px-2 xs:px-4 md:px-6 py-4 shadow-lg w-full max-w-xs xs:max-w-md md:max-w-xl mx-auto animate-fade-in border border-blue-700 overflow-x-auto flex justify-center">
                <span className="animate-typing inline-block whitespace-nowrap overflow-hidden border-r-2 border-green-300 pr-2 max-w-full text-center" style={{animation: 'typing 3s steps(40, end) infinite alternate, blink-caret 0.75s step-end infinite'}}>
                print('OSINT + Forense Digital = Conhecimento!')
                </span>
            </div>
            {/* CSS para animação de typing */}
            <style>{`
                @keyframes typing {
                from { width: 0 }
                to { width: 100% }
                }
                @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: #4ade80; }
                }
            `}</style>
        </section>
        );
}
