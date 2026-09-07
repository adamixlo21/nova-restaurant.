import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AdminLayout from '@/layouts/admin-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { CartProvider } from '@/components/CartContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;

            case name === 'auth/login':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
                return [AdminLayout, SettingsLayout];

            case name === 'dashboard':
                return AdminLayout;

            case name.startsWith('admin/'):
                return AdminLayout;

            default:
                return null;
        }
    },

    strictMode: true,

    progress: {
        color: '#5d6948',
    },
    withApp(app) {
        return (
            <CartProvider>
                <TooltipProvider delayDuration={0}>
                    {app}
                    <Toaster />
                </TooltipProvider>
            </CartProvider>
        );
    },
});

initializeTheme();
