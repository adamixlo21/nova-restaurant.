import { Link, router, usePage } from '@inertiajs/react';

type AuthUser = {
    id: number;
    name: string;
    email: string;
};

type PageProps = {
    auth?: {
        user?: AuthUser;
    };
};

export default function AdminSidebar() {
    const { url, props } = usePage<PageProps>();
    const user = props.auth?.user;

    const websiteLinks = [
        { name: 'Home', href: '/' },
        { name: 'Over ons', href: '/about' },
        { name: 'De kaart', href: '/menus' },
        { name: 'Mogelijkheden', href: '/mogelijkheden' },
        { name: 'Actualiteiten', href: '/actualiteiten' },
        { name: 'Vacatures', href: '/vacatures' },
        { name: 'Locatie', href: '/locatie' },
        { name: 'Contact', href: '/contacts' },
        { name: 'Reserveren', href: '/reservation' },
    ];

    const managementLinks = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: "Menu's", href: '/admin/menus' },
        { name: 'Categorieën', href: '/admin/categories' },
        { name: 'Gerechten', href: '/admin/menu-items' },
        { name: 'Reserveringen', href: '/admin/reservations' },
        { name: 'Berichten', href: '/admin/contacts' },
        { name: 'Actualiteiten', href: '/admin/actualiteiten' },
        { name: 'Vacatures', href: '/admin/vacancies' },
    ];

    function isActive(href: string) {
        if (href === '/') {
            return url === '/';
        }

        if (href === '/dashboard') {
            return url === '/dashboard';
        }

        return url === href || url.startsWith(`${href}/`);
    }

    function logout() {
        router.post('/logout');
    }

    return (
        <aside className="hidden min-h-screen w-72 shrink-0 border-r border-black/5 bg-[#ebe7dc] lg:block">
            <div className="sticky top-0 flex min-h-screen flex-col">
                {/* Brand */}
                <div className="border-b border-black/5 px-8 py-7">
                    <Link href="/" className="inline-block">
                        <p className="font-serif text-2xl tracking-[0.16em] text-[#20231f]">
                            DE BANK
                        </p>

                        <p className="mt-1 text-[8px] tracking-[0.3em] text-[#5d6948] uppercase">
                            Brasserie Harderwijk
                        </p>
                    </Link>

                    <div className="mt-5 inline-flex bg-[#20231f] px-3 py-1.5 text-[9px] tracking-[0.2em] text-[#f7f4ee] uppercase">
                        Beheeromgeving
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                    {/* Website */}
                    <p className="px-4 pb-3 text-[9px] tracking-[0.28em] text-[#20231f]/35 uppercase">
                        Website
                    </p>

                    <div className="space-y-1">
                        {websiteLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`group flex items-center justify-between px-4 py-3 text-sm transition duration-200 ${
                                        active
                                            ? 'bg-[#5d6948] text-[#f7f4ee]'
                                            : 'text-[#20231f]/65 hover:bg-white/60 hover:text-[#20231f]'
                                    }`}
                                >
                                    <span>{link.name}</span>

                                    <span
                                        className={`text-xs transition-all duration-200 ${
                                            active
                                                ? 'translate-x-0 opacity-100'
                                                : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                                        }`}
                                    >
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Management */}
                    <p className="mt-9 px-4 pb-3 text-[9px] tracking-[0.28em] text-[#20231f]/35 uppercase">
                        Beheer
                    </p>

                    <div className="space-y-1">
                        {managementLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`group flex items-center justify-between px-4 py-3 text-sm transition duration-200 ${
                                        active
                                            ? 'bg-[#20231f] text-[#f7f4ee]'
                                            : 'text-[#20231f]/65 hover:bg-white/60 hover:text-[#20231f]'
                                    }`}
                                >
                                    <span>{link.name}</span>

                                    <span
                                        className={`text-xs transition-all duration-200 ${
                                            active
                                                ? 'translate-x-0 opacity-100'
                                                : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                                        }`}
                                    >
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* User */}
                <div className="border-t border-black/5 px-4 pt-4">
                    {user && (
                        <div className="mb-3 px-4">
                            <p className="text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                Ingelogd als
                            </p>

                            <p className="mt-2 truncate text-sm font-medium text-[#20231f]">
                                {user.name}
                            </p>

                            <p className="mt-1 truncate text-xs text-[#20231f]/45">
                                {user.email}
                            </p>
                        </div>
                    )}

                    <Link
                        href="/settings/profile"
                        className={`group flex items-center justify-between px-4 py-3 text-sm transition ${
                            isActive('/settings/profile')
                                ? 'bg-white text-[#20231f]'
                                : 'text-[#20231f]/60 hover:bg-white/60 hover:text-[#20231f]'
                        }`}
                    >
                        <span>Profiel</span>

                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                    <Link
                        href="/"
                        className="group flex items-center justify-between px-4 py-3 text-sm text-[#20231f]/60 transition hover:bg-white/60 hover:text-[#20231f]"
                    >
                        <span>Terug naar website</span>

                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={logout}
                        className="group mb-4 flex w-full items-center justify-between px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                    >
                        <span>Uitloggen</span>

                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
