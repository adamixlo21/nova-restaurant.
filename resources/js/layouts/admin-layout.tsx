import type { PropsWithChildren } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
            <div className="flex min-h-screen">
                <AdminSidebar />

                <main className="min-w-0 flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
