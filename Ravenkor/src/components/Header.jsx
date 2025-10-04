import React, { useState, useEffect } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!document.getElementById('poppins-font')) {
      const link = document.createElement('link');
      link.id = 'poppins-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);
  return (
    <header className="fixed top-0 left-0 w-full px-5 lg:px-20 py-4 flex items-center justify-between bg-white/90 dark:bg-neutral-900/90 shadow-md z-50 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <h1
          className="font-extrabold tracking-tight drop-shadow-sm text-blue-700 dark:text-blue-200"
          style={{
            fontFamily: `'Poppins', 'ui-sans-serif', 'system-ui', sans-serif`,
            fontSize: '1.25rem', // mobile base
            lineHeight: 1.2,
          }}
        >
          <span className="block lg:hidden">Ravenkor</span>
          <span className="hidden lg:block text-4xl" style={{fontSize: '2.25rem'}}>Ravenkor</span>
        </h1>
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        {['Início', 'Artigos', 'Sobre'].map((item, idx) => (
          <a
            key={item}
            href="#"
            className="group relative text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-400 font-semibold text-lg transition-colors px-1"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
          </a>
        ))}
      </nav>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 z-50"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
      >
        <span className={`block w-7 h-1 rounded bg-blue-700 dark:bg-blue-200 mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 rounded bg-blue-700 dark:bg-blue-200 mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 rounded bg-blue-700 dark:bg-blue-200 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile nav com efeito lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 dark:bg-neutral-900/95 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{boxShadow: open ? '0 0 40px 0 rgba(37,99,235,0.15)' : undefined}}
      >
        <nav className="flex flex-col items-start gap-6 p-8 pt-24 border-r border-neutral-200 dark:border-neutral-800 h-full">
          {['Início', 'Artigos', 'Sobre'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-400 font-semibold text-xl transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      {/* Overlay para fechar o menu mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
        />
      )}
    </header>
  );
}
