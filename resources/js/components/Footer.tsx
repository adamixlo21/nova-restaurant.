import { Link } from '@inertiajs/react';

export default function Footer() {
    const navItems = [
        { label: 'De kaart', href: '/menus' },
        { label: 'Over ons', href: '/about' },
        { label: 'Mogelijkheden', href: '/mogelijkheden' },
        { label: 'Actualiteiten', href: '/actualiteiten' },
        { label: 'Locatie', href: '/locatie' },
        { label: 'Contact', href: '/contacts' },
    ];

    const menuItems = [
        { label: 'Lunch', href: '/menus/lunch' },
        { label: 'Dinner', href: '/menus/dinner' },
        { label: 'Drinks', href: '/menus/drinks' },
        { label: 'Wijn', href: '/menus/wijn' },
        { label: 'Tafelkaart', href: '/menus/tafelkaart' },
    ];

    return (
        <footer className="bg-[#20231f] text-[#f7f4ee]">
            {/*/!* Top CTA *!/*/}
            {/*<div className="border-b border-white/10">*/}
            {/*    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">*/}
            {/*        <div>*/}
            {/*            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f7f4ee]/40">*/}
            {/*                Brasserie De Bank*/}
            {/*            </p>*/}

            {/*            <h2 className="mt-2 font-serif text-2xl sm:text-3xl">*/}
            {/*                Zin om bij ons aan tafel te schuiven?*/}
            {/*            </h2>*/}
            {/*        </div>*/}

            {/*        <Link*/}
            {/*            href="/reservation"*/}
            {/*            className="inline-flex w-fit items-center justify-center border border-[#f7f4ee]/30 px-6 py-4 text-[10px] uppercase tracking-[0.22em] transition hover:bg-[#f7f4ee] hover:text-[#20231f]"*/}
            {/*        >*/}
            {/*            Reserveer een tafel*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Main footer */}
            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link
                            href="/"
                            className="inline-block"
                        >
                            <p className="font-serif text-3xl tracking-[0.16em]">
                                DE BANK
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-[#f7f4ee]/40">
                                Brasserie Harderwijk
                            </p>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-[#f7f4ee]/55">
                            De huiskamer van Harderwijk. Voor koffie, lunch,
                            diner, borrel en een goed glas wijn.
                        </p>

                        <div className="mt-7 flex gap-5">
                            <a
                                href="https://www.instagram.com/brasserie_de_bank/"
                                target="_blank"
                                rel="noreferrer"
                                className="border-b border-white/20 pb-1 text-[10px] uppercase tracking-[0.2em] text-[#f7f4ee]/60 transition hover:border-white hover:text-white"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61577661434489"
                                target="_blank"
                                rel="noreferrer"
                                className="border-b border-white/20 pb-1 text-[10px] uppercase tracking-[0.2em] text-[#f7f4ee]/60 transition hover:border-white hover:text-white"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                            Navigatie
                        </p>

                        <div className="mt-5 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-sm text-[#f7f4ee]/65 transition hover:translate-x-1 hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="lg:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                            Onze kaarten
                        </p>

                        <div className="mt-5 space-y-3">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-sm text-[#f7f4ee]/65 transition hover:translate-x-1 hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:col-span-4">
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            {/* Opening hours */}
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                    Openingstijden
                                </p>

                                <div className="mt-5 space-y-2.5 text-sm text-[#f7f4ee]/65">
                                    <div className="flex justify-between gap-6">
                                        <span>Ma - Za</span>
                                        <span>10:00 - 23:00</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Zo</span>
                                        <span>12:00 - 23:00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                    Contact
                                </p>

                                <div className="mt-5 space-y-3 text-sm leading-6 text-[#f7f4ee]/65">
                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block transition hover:text-white"
                                    >
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </a>

                                    <a
                                        href="tel:0341472582"
                                        className="block transition hover:text-white"
                                    >
                                        0341 - 472 582
                                    </a>

                                    <a
                                        href="mailto:info@brasseriedebank.nl"
                                        className="block break-words transition hover:text-white"
                                    >
                                        info@brasseriedebank.nl
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-[#f7f4ee]/35 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Brasserie De Bank
                    </p>

                    <div className="flex items-center gap-4">
                        <span>Harderwijk</span>

                        <span className="h-1 w-1 rounded-full bg-[#f7f4ee]/20" />

                        <a
                            href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                        >
                            Route plannen
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
