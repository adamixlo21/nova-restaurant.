import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';

const formatPrice = (price: string) =>
    Number(price).toFixed(2).replace('.', ',');

export default function Checkout() {
    const { cart } = useCart();

    const { data, setData, post, processing, errors, transform } = useForm({
        order_type: 'pickup',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        note: '',
        time_slot: '',

        items: [] as {
            id: number;
            quantity: number;
            note: string;
        }[],
    });
    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        transform((formData) => ({
            ...formData,

            items: cart.map((item) => ({
                id: item.id,
                quantity: item.quantity,
                note: item.note,
            })),
        }));

        post('/checkout', {
            onSuccess: () => {
                console.log('Order created successfully');
            },

            onError: (errors) => {
                console.log('Checkout errors:', errors);
            },

            onFinish: () => {
                console.log('Checkout request finished');
            },
        });
    };

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0,
    );

    return (
        <>
            <Head title="Afrekenen" />
            <Navbar />

            <main className="min-h-screen bg-[#f7f4ee] px-6 pt-32 pb-20 text-[#20231f]">
                <div className="mx-auto max-w-5xl">
                    <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                        Brasserie De Bank
                    </p>

                    <h1 className="mt-4 font-serif text-5xl">Afrekenen</h1>

                    <form
                        onSubmit={submit}
                        className="mt-12 grid gap-10 lg:grid-cols-2"
                    >
                        {/* Customer information */}
                        <section>
                            <h2 className="font-serif text-2xl">
                                Jouw gegevens
                            </h2>

                            <div className="mt-6 space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                            Voornaam *
                                        </label>

                                        <input
                                            type="text"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData(
                                                    'first_name',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full border border-black/10 bg-white px-4 py-4 transition outline-none focus:border-[#5d6948]"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                            Achternaam *
                                        </label>

                                        <input
                                            type="text"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData(
                                                    'last_name',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full border border-black/10 bg-white px-4 py-4 transition outline-none focus:border-[#5d6948]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                        Telefoonnummer *
                                    </label>

                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-white px-4 py-4 transition outline-none focus:border-[#5d6948]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                        E-mailadres *
                                    </label>

                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-white px-4 py-4 transition outline-none focus:border-[#5d6948]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                        Opmerking
                                    </label>

                                    <textarea
                                        value={data.note}
                                        onChange={(e) =>
                                            setData('note', e.target.value)
                                        }
                                        rows={4}
                                        placeholder="Bijv. allergieën of andere opmerkingen..."
                                        className="w-full resize-none border border-black/10 bg-white px-4 py-4 transition outline-none placeholder:text-black/25 focus:border-[#5d6948]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[10px] tracking-[0.18em] text-[#20231f]/50 uppercase">
                                        Tijdvak kiezen *
                                    </label>

                                    <select
                                        value={data.time_slot}
                                        onChange={(e) =>
                                            setData('time_slot', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-white px-4 py-4 transition outline-none focus:border-[#5d6948]"
                                    >
                                        <option value="">Kies een tijd</option>

                                        <option value="asap">
                                            Zo snel mogelijk
                                        </option>

                                        <option value="17:00">17:00</option>
                                        <option value="17:15">17:15</option>
                                        <option value="17:30">17:30</option>
                                        <option value="17:45">17:45</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:15">18:15</option>
                                        <option value="18:30">18:30</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Order summary */}
                        <section className="border border-black/10 bg-white p-6">
                            <h2 className="font-serif text-2xl">
                                Jouw bestelling
                            </h2>

                            <div className="mt-6 space-y-4">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between gap-4 border-b border-black/10 pb-4"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {item.name}
                                            </p>

                                            <p className="mt-1 text-xs text-black/50">
                                                {item.quantity} × €
                                                {formatPrice(item.price)}
                                            </p>
                                        </div>

                                        <p className="text-[#5d6948]">
                                            €
                                            {formatPrice(
                                                (
                                                    Number(item.price) *
                                                    item.quantity
                                                ).toString(),
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-between border-t border-black/10 pt-5">
                                <span className="font-medium">Totaal</span>

                                <span className="font-serif text-2xl">
                                    €{formatPrice(total.toString())}
                                </span>
                            </div>
                            {Object.keys(errors).length > 0 && (
                                <div className="mt-6 border border-red-300 bg-red-50 p-4">
                                    <pre className="text-xs whitespace-pre-wrap text-red-700">
                                        {JSON.stringify(errors, null, 2)}
                                    </pre>
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={processing || cart.length === 0}
                                className="mt-6 w-full bg-[#20231f] px-6 py-5 text-[10px] tracking-[0.25em] text-white uppercase transition hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing
                                    ? 'Bestelling verwerken...'
                                    : 'Bestelling plaatsen'}
                            </button>
                        </section>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
}
