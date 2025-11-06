import React from 'react';

const Contact = () => {
    const contactLinks = [
        {
            href: "mailto:claudiovictordasilvarodrigues@gmail.com",
            text: "Email",
            icon: "M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75zm2.02.56 6.23 4.02a1 1 0 0 0 1.5 0l6.23-4.02a.75.75 0 0 0-.45-.14H5.67a.75.75 0 0 0-.65.14z"
        },
        {
            href: "https://github.com/claudiovictordasilvarodrigues",
            text: "GitHub",
            icon: "M12 .5a11.5 11.5 0 0 0-3.63 22.4c.57.1.77-.25.77-.56v-3.12c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.7.08-.7 1.12.08 1.71 1.15 1.71 1.15 1 .72 2.62.51 3.26.39.1-.76.4-1.28.72-1.57-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.67 0c2.17-1.46 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.28-5.13 5.56.41.35.77 1.04.77 2.1v3.12c0 .31.2.67.78.56A11.5 11.5 0 0 0 12 .5z"
        },
        {
            href: "https://linkedin.com/in/claudio-victor-da-silva-rodrigues",
            text: "LinkedIn",
            icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v11H3V9zm7 0h3.8v1.52h.05c.53-.99 1.83-2.04 3.77-2.04 4.03 0 4.78 2.65 4.78 6.09V20h-4v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.92 1.3-1.92 2.64V20H10V9z"
        }
    ];

    return (
        <div className="max-w-xl mx-auto text-center bg-white/60 p-6 rounded-xl shadow-lg border border-slate-900/5">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900/95">Contato</h2>
            <ul className="flex justify-center gap-4 list-none p-0 m-0">
                {contactLinks.map(({ href, text, icon }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="inline-flex items-center gap-2 px-2.5 py-2 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md focus:ring-2 focus:ring-indigo-500/20"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-4 h-4 text-slate-900/95"
                                aria-hidden="true"
                            >
                                <path fill="currentColor" d={icon} />
                            </svg>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;
