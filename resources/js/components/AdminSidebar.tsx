
import { Link, usePage } from '@inertiajs/react';

export default function AdminSidebar() {
    const { url } = usePage();

    const websiteLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Menu', href: '/menu' },
        { name: 'Contact', href: '/contact' },
    ];

    const managementLinks = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Categories', href: '/admin/categories' },
        { name: 'Menu Items', href: '/admin/menu-items' },
        { name: 'Reservations', href: '/admin/reservations' },
    ];

    return (
        <aside className="hidden min-h-screen w-64 shrink-0 border-r border-black/5 bg-[#ebe7dc] lg:block">
            <div className="sticky top-0 flex min-h-screen flex-col">

                {/* Logo */}
                <div className="border-b border-black/5 px-8 py-7">
                    <Link
                        href="/"
                        className="font-serif text-2xl tracking-[0.2em] text-[#20231f]"
                    >
                        NOVA
                    </Link>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                        Admin Panel
                    </p>
                </div>

                <nav className="flex-1 px-4 py-6">

                    {/* Website */}
                    <p className="px-4 pb-3 text-[10px] uppercase tracking-[0.25em] text-[#20231f]/40">
                        Website
                    </p>

                    <div className="space-y-1">
                        {websiteLinks.map((link) => {
                            const active =
                                url === link.href ||
                                (link.href !== '/' &&
                                    url.startsWith(link.href));

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 text-sm transition ${
    active
        ? 'bg-[#5d6948] text-[#f7f4ee]'
        : 'text-[#20231f]/70 hover:bg-white/60 hover:text-[#20231f]'
}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Management */}
                    <p className="mt-8 px-4 pb-3 text-[10px] uppercase tracking-[0.25em] text-[#20231f]/40">
                        Management
                    </p>

                    <div className="space-y-1">
                        {managementLinks.map((link) => {
                            const active =
                                url === link.href ||
                                (link.href !== '/dashboard' &&
                                    url.startsWith(link.href));

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 text-sm transition ${
    active
        ? 'bg-[#5d6948] text-[#f7f4ee]'
        : 'text-[#20231f]/70 hover:bg-white/60 hover:text-[#20231f]'
}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Back to Website */}
                <div className="border-t border-black/5 p-4">
                    <Link
                        href="/"
                        className="block px-4 py-3 text-sm text-[#20231f]/70 transition hover:bg-white/60 hover:text-[#20231f]"
                    >
                        ← Back to Website
                    </Link>
                </div>
            </div>
        </aside>
    );
}

