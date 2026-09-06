import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { cn, toUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import type { NavItem } from '@/types';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profiel',
        href: edit(),
        icon: null,
    },
    {
        title: 'Beveiliging',
        href: editSecurity(),
        icon: null,
    },
    {
        title: 'Weergave',
        href: editAppearance(),
        icon: null,
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    const { isCurrentOrParentUrl } = useCurrentUrl();

    return (
        <div className="w-full px-6 py-8 sm:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-7xl">
                {/* Header */}
                <div className="border-b border-black/10 pb-8">
                    <Heading
                        title="Instellingen"
                        description="Beheer je profiel en accountinstellingen"
                    />
                </div>

                <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-12">
                    {/* Settings navigation */}
                    <aside className="w-full shrink-0 lg:w-56">
                        <nav
                            className="flex flex-col space-y-1"
                            aria-label="Instellingen"
                        >
                            {sidebarNavItems.map((item, index) => (
                                <Button
                                    key={`${toUrl(item.href)}-${index}`}
                                    size="sm"
                                    variant="ghost"
                                    asChild
                                    className={cn(
                                        'w-full justify-start rounded-none px-4 py-3 text-sm font-normal',
                                        {
                                            'bg-[#5d6948] text-white hover:bg-[#4f5a3d] hover:text-white':
                                                isCurrentOrParentUrl(item.href),
                                        },
                                    )}
                                >
                                    <Link href={item.href}>
                                        {item.icon && (
                                            <item.icon className="h-4 w-4" />
                                        )}

                                        {item.title}
                                    </Link>
                                </Button>
                            ))}
                        </nav>
                    </aside>

                    <Separator className="lg:hidden" />

                    {/* Settings content */}
                    <div className="min-w-0 flex-1">
                        <section className="w-full space-y-12">
                            {children}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
