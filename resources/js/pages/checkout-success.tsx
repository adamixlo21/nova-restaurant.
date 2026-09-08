import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';

interface OrderItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    subtotal: string;
    note: string | null;
}

interface Order {
    id: number;
    order_number: string;
    total: string;
    payment_status: string;
    status: string;
    time_slot: string | null;
    items?: OrderItem[];
}

const formatPrice = (price: string) =>
    Number(price).toFixed(2).replace('.', ',');

export default function CheckoutSuccess({
                                            order,
                                        }: {
    order: Order;
}) {
    const { clearCart } = useCart();

    const paid = order.payment_status === 'paid';

    useEffect(() => {
        if (paid) {
            clearCart();
        }
    }, [paid]);

    return (
        <>
            <Head
                title={
                    paid
                        ? 'Betaling geslaagd'
                        : 'Bestelling ontvangen'
                }
            />

            <Navbar />

            <main className="min-h-screen bg-[#f7f4ee] px-6 pt-36 pb-24 text-[#20231f]">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="text-center">
                        <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Brasserie De Bank
                        </p>

                        <div
                            className={`mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full text-2xl ${
                                paid
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-700'
                            }`}
                        >
                            {paid ? '✓' : '…'}
                        </div>

                        <h1 className="mt-6 font-serif text-4xl sm:text-5xl">
                            {paid
                                ? 'Betaling geslaagd'
                                : 'Bestelling ontvangen'}
                        </h1>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#20231f]/55">
                            {paid
                                ? 'Bedankt voor je bestelling. We hebben je betaling ontvangen en gaan met je bestelling aan de slag.'
                                : 'Je bestelling is ontvangen. De betaling is nog niet bevestigd.'}
                        </p>
                    </div>

                    {/* Order info */}
                    <section className="mt-12 border border-black/10 bg-white p-6 sm:p-8">
                        <div className="grid gap-6 sm:grid-cols-3">
                            <div>
                                <p className="text-[9px] tracking-[0.2em] text-[#20231f]/40 uppercase">
                                    Bestelnummer
                                </p>

                                <p className="mt-2 font-serif text-xl">
                                    {order.order_number}
                                </p>
                            </div>

                            <div>
                                <p className="text-[9px] tracking-[0.2em] text-[#20231f]/40 uppercase">
                                    Afhaaltijd
                                </p>

                                <p className="mt-2 font-serif text-xl">
                                    {order.time_slot === 'asap'
                                        ? 'Zo snel mogelijk'
                                        : order.time_slot ?? '-'}
                                </p>
                            </div>

                            <div>
                                <p className="text-[9px] tracking-[0.2em] text-[#20231f]/40 uppercase">
                                    Betaling
                                </p>

                                <span
                                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                        paid
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                >
                                    {paid
                                        ? 'Betaald'
                                        : 'In afwachting'}
                                </span>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="mt-8 border-t border-black/10 pt-7">
                            <h2 className="font-serif text-2xl">
                                Jouw bestelling
                            </h2>

                            <div className="mt-6 space-y-5">
                                {(order.items ?? []).map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between gap-6 border-b border-black/10 pb-5"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {item.quantity} × {item.name}
                                            </p>

                                            <p className="mt-1 text-xs text-[#20231f]/45">
                                                €{formatPrice(item.price)} per stuk
                                            </p>

                                            {item.note && (
                                                <p className="mt-2 text-sm italic text-[#20231f]/55">
                                                    “{item.note}”
                                                </p>
                                            )}
                                        </div>

                                        <p className="shrink-0 font-medium text-[#5d6948]">
                                            €{formatPrice(item.subtotal)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-end justify-between">
                                <div>
                                    <p className="text-[9px] tracking-[0.2em] text-[#20231f]/40 uppercase">
                                        Totaal
                                    </p>
                                </div>

                                <p className="font-serif text-3xl">
                                    €{formatPrice(order.total)}
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/menus"
                            className="bg-[#20231f] px-8 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition hover:bg-[#5d6948]"
                        >
                            Terug naar de kaart
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
