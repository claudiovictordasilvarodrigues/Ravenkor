const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Sobre Mim
                    </h2>
                    
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                            
                            {/* About Text */}
                            <div className="space-y-4 max-w-prose mx-auto md:col-span-2">
                                <p className="text-gray-700 text-center leading-relaxed">
                                    {/* Add your about text here */}
                                    Sou Claudio Victor da Silva Rodrigues, estudante de Análise e Desenvolvimento de Sistemas com foco em Segurança da Informação e Desenvolvimento Web. 
                                    Tenho experiência prática em Pentest Web, OSINT, Forense Digital, Análise de Logs e criação de aplicações usando Next.js, Node.js e Python. Busco sempre unir tecnologia e segurança para desenvolver soluções eficientes, seguras e funcionais.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;