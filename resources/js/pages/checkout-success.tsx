import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useCart } from '@/components/CartContext';

interface Order {
    id: number;
    order_number: string;
    total: string;
    payment_status: string;
}

export default function CheckoutSuccess({ order }: { order: Order }) {
    // const { clearCart } = useCart();
    //
    // useEffect(() => {
    //     clearCart();
    // }, []);

    return (
        <>
            <Head title="Bestelling ontvangen" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f4ee] px-6 pt-36 pb-24 text-[#20231f]">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                        Brasserie De Bank
                    </p>

                    <h1 className="mt-5 font-serif text-5xl">
                        Bestelling ontvangen
                    </h1>

                    <p className="mt-6 text-sm text-[#20231f]/55">
                        Bestelnummer
                    </p>

                    <p className="mt-2 font-serif text-2xl">
                        {order.order_number}
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}
