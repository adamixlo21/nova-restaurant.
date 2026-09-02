import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f7f4ee]/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl tracking-[0.2em] text-[#20231f]"
                >
                    NOVA
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className="text-sm tracking-wide text-[#20231f]/80 transition hover:text-[#5d6948]"
                    >
                        Home
                    </Link>

                    <Link
                        href="/menu"
                        className="text-sm tracking-wide text-[#20231f]/80 transition hover:text-[#5d6948]"
                    >
                        Menu
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm tracking-wide text-[#20231f]/80 transition hover:text-[#5d6948]"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="text-sm tracking-wide text-[#20231f]/80 transition hover:text-[#5d6948]"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Desktop Reservation */}
                <Link
                    href="/reservation"
                    className="hidden border border-[#20231f] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[#20231f] transition hover:bg-[#20231f] hover:text-[#f7f4ee] sm:block"
                >
                    Reserve
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center md:hidden"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <div className="relative h-5 w-6">
                        <span
                            className={`absolute left-0 top-1 block h-px w-6 bg-[#20231f] transition-transform duration-300 ${
                                menuOpen ? 'translate-y-1.5 rotate-45' : ''
                            }`}
                        />

                        <span
                            className={`absolute left-0 top-3 block h-px w-6 bg-[#20231f] transition-transform duration-300 ${
                                menuOpen ? '-translate-y-0.5 -rotate-45' : ''
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-black/5 bg-[#f7f4ee] transition-all duration-300 md:hidden ${
                    menuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col px-6 py-6">

                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-black/5 py-4 text-sm tracking-wide text-[#20231f]"
                    >
                        Home
                    </Link>

                    <Link
                        href="/menu"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-black/5 py-4 text-sm tracking-wide text-[#20231f]"
                    >
                        Menu
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-black/5 py-4 text-sm tracking-wide text-[#20231f]"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-black/5 py-4 text-sm tracking-wide text-[#20231f]"
                    >
                        Contact
                    </Link>

                    <Link
                        href="/reservation"
                        onClick={() => setMenuOpen(false)}
                        className="mt-5 bg-[#20231f] px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                    >
                        Reserve a Table
                    </Link>

                </nav>
            </div>
        </header>
    );
}
