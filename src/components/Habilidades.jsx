import React from "react";

export default function Habilidades() {
    const skills = [
        {
            title: "Forense Digital",
            emoji: "🕵️‍♂️",
            summary:
                "Investigação de incidentes digitais: coleta e preservação de evidências, análise de discos, memória e logs, garantia da cadeia de custódia e preparação de relatórios técnicos.",
        },
        {
            title: "OSINT",
            emoji: "🔎",
            summary:
                "Inteligência de fontes abertas: coleta e correlação de informações públicas (redes sociais, domínios, metadados), verificação de dados e uso de ferramentas como Maltego/SpiderFoot/Google Dorking.",
        },
        {
            title: "Desenvolvimento WEB",
            emoji: "💻",
            summary:
                "Front- e back-end: HTML/CSS/JS, frameworks (React, Node), desenvolvimento responsivo e acessível, otimização de performance e práticas de segurança web (XSS, CSRF, CORS).",
        },
        {
            title: "Cloud Security",
            emoji: "☁️",
            summary:
                "Segurança em nuvem: gestão de identidade e acessos (IAM), criptografia, redes seguras, monitoramento, compliance e boas práticas para AWS/GCP/Azure e IaC seguro.",
        },
    ];

    return (
        <section
            className="p-6 min-h-screen"
            style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
        >
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-3xl font-semibold mb-6"
                    style={{ color: "var(--primary)" }}
                >
                    Habilidades
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((s) => (
                        <article
                            key={s.title}
                            className="rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-200"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <header className="flex items-center gap-4 mb-3">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold"
                                    style={{
                                        backgroundColor: "var(--accent)",
                                        color: "var(--on-accent)",
                                    }}
                                >
                                    {s.emoji}
                                </div>
                                <h3
                                    className="text-lg font-semibold"
                                    style={{ color: "var(--primary)" }}
                                >
                                    {s.title}
                                </h3>
                            </header>

                            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                                {s.summary}
                            </p>

                            <footer className="mt-4">
                                <button
                                    className="text-sm font-medium py-2 px-3 rounded-md"
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "var(--secondary)",
                                        border: "1px solid var(--secondary)",
                                    }}
                                >
                                    Ver mais
                                </button>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}