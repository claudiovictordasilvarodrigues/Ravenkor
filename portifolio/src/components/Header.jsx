import React from 'react';
import NavBar from './NavBar';

export default function Header() {
    return (
        <header className="bg-black text-white py-2 px-4 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-lg font-semibold">Ravenkor</h1>
                <NavBar />
            </div>
        </header>
    );
}