import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

interface Auth {
    user: {
        id: number;
        name: string;
        email: string;
    } | null;
}

interface PageProps extends Record<string, unknown> {
    auth: Auth;
}

const navItems = [
    { label: 'De kaart', href: '/menus' },
    { label: 'Over ons', href: '/about' },
    { label: 'Mogelijkheden', href: '/mogelijkheden' },
    { label: 'Actualiteiten', href: '/actualiteiten' },
    { label: 'Vacatures', href: '/vacatures' },
    { label: 'Locatie', href: '/locatie' },
    { label: 'Contact', href: '/contacts' },
];

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f7f4ee]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="group flex shrink-0 items-center gap-3"
                >
                    <div>
                        <p className="font-serif text-[22px] leading-none tracking-[0.16em] text-[#20231f]">
                            DE BANK
                        </p>

                        <p className="mt-1 text-[8px] tracking-[0.3em] text-[#5d6948] uppercase">
                            Brasserie Harderwijk
                        </p>
                    </div>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative py-2 text-[12px] tracking-[0.03em] whitespace-nowrap text-[#20231f]/70 transition duration-200 hover:text-[#20231f] 2xl:text-[13px]"
                        >
                            {item.label}

                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#5d6948] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    {auth.user && (
                        <Link
                            href="/dashboard"
                            className="text-[12px] tracking-[0.03em] whitespace-nowrap text-[#5d6948] transition hover:text-[#20231f] 2xl:text-[13px]"
                        >
                            Admin
                        </Link>
                    )}
                </nav>

                {/* Right side */}
                <div className="flex shrink-0 items-center gap-3">
                    {/* Desktop reservation button */}
                    <Link
                        href="/reservation"
                        className="hidden bg-[#20231f] px-5 py-3 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition duration-300 hover:bg-[#5d6948] xl:inline-flex"
                    >
                        Reserveren
                    </Link>

                    {/* Tablet reservation button */}
                    <Link
                        href="/reservation"
                        className="hidden bg-[#20231f] px-4 py-3 text-[9px] tracking-[0.18em] text-[#f7f4ee] uppercase transition duration-300 hover:bg-[#5d6948] sm:inline-flex xl:hidden"
                    >
                        Reserveren
                    </Link>

                    {/* Mobile / tablet menu button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="relative flex h-11 w-11 items-center justify-center border border-black/10 transition hover:border-[#5d6948] xl:hidden"
                        aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
                        aria-expanded={menuOpen}
                    >
                        <div className="relative h-4 w-5">
                            <span
                                className={`absolute top-1 left-0 h-px w-5 bg-[#20231f] transition-all duration-300 ${
                                    menuOpen
                                        ? 'translate-y-[4px] rotate-45'
                                        : ''
                                }`}
                            />

                            <span
                                className={`absolute top-[11px] left-0 h-px w-5 bg-[#20231f] transition-all duration-300 ${
                                    menuOpen
                                        ? '-translate-y-[6px] -rotate-45'
                                        : ''
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile / tablet navigation */}
            <div
                className={`overflow-hidden border-t border-black/5 bg-[#f7f4ee] transition-all duration-500 xl:hidden ${
                    menuOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between border-b border-black/5 py-4 text-sm text-[#20231f]"
                        >
                            <span>Home</span>
                            <span className="text-[#5d6948]">→</span>
                        </Link>

                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between border-b border-black/5 py-4 text-sm text-[#20231f]"
                            >
                                <span>{item.label}</span>
                                <span className="text-[#5d6948]">→</span>
                            </Link>
                        ))}

                        {auth.user && (
                            <Link
                                href="/dashboard"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between border-b border-black/5 py-4 text-sm text-[#5d6948]"
                            >
                                <span>Admin</span>
                                <span>→</span>
                            </Link>
                        )}
                    </div>

                    <Link
                        href="/reservation"
                        onClick={() => setMenuOpen(false)}
                        className="mt-6 flex items-center justify-center bg-[#20231f] px-6 py-4 text-[11px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                    >
                        Reserveer een tafel
                    </Link>
                </nav>
            </div>
        </header>
    );
}
