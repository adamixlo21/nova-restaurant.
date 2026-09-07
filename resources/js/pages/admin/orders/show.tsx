import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface OrderItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    note: string | null;
    subtotal: string;
}

interface Order {
    id: number;
    order_number: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    note: string | null;
    time_slot: string | null;
    total: string;
    status: string;
    payment_status: string;
    items: OrderItem[];
}

export default function OrderShow({ order }: { order: Order }) {
    const [status, setStatus] = useState(order.status);

    const updateStatus = () => {
        router.patch(`/admin/orders/${order.id}/status`, {
            status,
        });
    };
    return (
        <>
            <Head title={order.order_number} />

            <div className="p-6">
                <Link
                    href="/admin/orders"
                    className="text-sm text-gray-500 hover:text-black"
                >
                    ← Terug naar bestellingen
                </Link>

                <div className="mt-6">
                    <h1 className="text-3xl font-bold">{order.order_number}</h1>

                    <p className="mt-2 text-gray-500">
                        {order.first_name} {order.last_name}
                    </p>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <section className="border p-6">
                        <h2 className="text-xl font-semibold">Klantgegevens</h2>

                        <div className="mt-4 space-y-2 text-sm">
                            <p>
                                {order.first_name} {order.last_name}
                            </p>

                            <p>{order.phone}</p>
                            <p>{order.email}</p>

                            <p>Afhaaltijd: {order.time_slot ?? '-'}</p>

                            {order.note && <p>Opmerking: {order.note}</p>}
                        </div>
                    </section>

                    <section className="border p-6">
                        <h2 className="text-xl font-semibold">Status</h2>
                        <div className="mt-4">
                            <label className="mb-2 block text-sm font-medium">
                                Bestelstatus
                            </label>

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-3"
                            >
                                <option value="pending">In afwachting</option>
                                <option value="confirmed">Bevestigd</option>
                                <option value="preparing">In bereiding</option>
                                <option value="ready">Klaar</option>
                                <option value="completed">Afgerond</option>
                                <option value="cancelled">Geannuleerd</option>
                            </select>

                            <button
                                type="button"
                                onClick={updateStatus}
                                className="mt-3 bg-[#20231f] px-5 py-3 text-sm text-white transition hover:bg-[#5d6948]"
                            >
                                Status opslaan
                            </button>
                        </div>
                        <div className="mt-4 space-y-2 text-sm">

                            <p>Betaling: {order.payment_status}</p>
                        </div>
                    </section>
                </div>

                <section className="mt-6 border p-6">
                    <h2 className="text-xl font-semibold">Gerechten</h2>

                    <div className="mt-5 space-y-4">
                        {order.items.map((item) => (
                            <div key={item.id} className="border-b pb-4">
                                <div className="flex justify-between gap-4">
                                    <div>
                                        <p className="font-medium">
                                            {item.quantity} × {item.name}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            €{Number(item.price).toFixed(2)} per
                                            stuk
                                        </p>

                                        {item.note && (
                                            <p className="mt-2 text-sm">
                                                Opmerking: {item.note}
                                            </p>
                                        )}
                                    </div>

                                    <p className="font-semibold">
                                        €{Number(item.subtotal).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between text-xl font-bold">
                        <span>Totaal</span>
                        <span>€{Number(order.total).toFixed(2)}</span>
                    </div>
                </section>
            </div>
        </>
    );
}
