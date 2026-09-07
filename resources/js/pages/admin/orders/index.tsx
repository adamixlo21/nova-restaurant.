import { Head, Link } from '@inertiajs/react';

interface Order {
    id: number;
    order_number: string;
    first_name: string;
    last_name: string;
    total: string;
    status: string;
    payment_status: string;
    time_slot: string | null;
    created_at: string;
}

const statusClasses: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    preparing: 'bg-orange-100 text-orange-800',
    ready: 'bg-green-100 text-green-800',
    completed: 'bg-gray-200 text-gray-700',
    cancelled: 'bg-red-100 text-red-800',
};

const statusLabels: Record<string, string> = {
    pending: 'In afwachting',
    confirmed: 'Bevestigd',
    preparing: 'In bereiding',
    ready: 'Klaar',
    completed: 'Afgerond',
    cancelled: 'Geannuleerd',
};

export default function OrdersIndex({ orders }: { orders: Order[] }) {
    return (
        <>
            <Head title="Bestellingen" />

            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Bestellingen
                </h1>

                <div className="mt-6 space-y-4">
                    {orders.map((order) => (
                        <Link
                            key={order.id}
                            href={`/admin/orders/${order.id}`}
                            className="block border p-5 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center justify-between gap-6">
                                <div>
                                    <p className="font-semibold">
                                        {order.order_number}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {order.first_name} {order.last_name}
                                    </p>

                                    {order.time_slot && (
                                        <p className="mt-1 text-sm text-gray-500">
                                            Afhalen: {order.time_slot}
                                        </p>
                                    )}

                                    <div className="mt-3">
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                                statusClasses[order.status] ??
                                                'bg-gray-100 text-gray-700'
                                            }`}
                                        >
                                            {statusLabels[order.status] ??
                                                order.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold">
                                        €
                                        {Number(order.total)
                                            .toFixed(2)
                                            .replace('.', ',')}
                                    </p>

                                    <span
                                        className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                            order.payment_status === 'paid'
                                                ? 'bg-green-100 text-green-800'
                                                : order.payment_status === 'failed'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                    >
                                        {order.payment_status === 'paid'
                                            ? 'Betaald'
                                            : order.payment_status === 'failed'
                                                ? 'Mislukt'
                                                : 'Betaling in afwachting'}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
