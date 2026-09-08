import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';

const formatPrice = (price: string | number) =>
    Number(price).toFixed(2).replace('.', ',');

export default function Checkout() {
    const { cart } = useCart();

    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform,
    } = useForm({
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

    const total = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * item.quantity,
        0,
    );

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

        post('/checkout');
    };

    return (
        <>
            <Head title="Afrekenen" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f4ee] pt-[76px] text-[#20231f]">
                {/* Header */}
                <section className="border-b border-black/5 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Link
                            href="/menus"
                            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                        >
                            <span className="transition-transform group-hover:-translate-x-1">
                                ←
                            </span>

                            Terug naar de kaart
                        </Link>

                        <div className="mt-8 max-w-2xl">
                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
                                Afrekenen
                            </h1>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                Controleer je bestelling en vul je gegevens in.
                                Daarna word je doorgestuurd naar Mollie om veilig
                                te betalen.
                            </p>
                        </div>
                    </div>
                </section>

                {cart.length === 0 ? (
                    <section className="px-5 py-24 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-xl text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#5d6948]/20 text-2xl">
                                🛒
                            </div>

                            <h2 className="mt-6 font-serif text-3xl">
                                Je winkelmand is leeg
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-[#20231f]/50">
                                Voeg eerst een gerecht toe voordat je kunt
                                afrekenen.
                            </p>

                            <Link
                                href="/menus"
                                className="mt-8 inline-flex bg-[#20231f] px-7 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition hover:bg-[#5d6948]"
                            >
                                Bekijk de kaart
                            </Link>
                        </div>
                    </section>
                ) : (
                    <form
                        onSubmit={submit}
                        className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-10 lg:py-20"
                    >
                        {/* LEFT */}
                        <div className="space-y-10">
                            {/* Pickup */}
                            <section className="border border-black/10 bg-[#ebe7dc]/50 p-6 sm:p-8">
                                <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Bestelmethode
                                </p>

                                <div className="mt-4 flex items-center justify-between gap-6">
                                    <div>
                                        <h2 className="font-serif text-2xl">
                                            Afhalen
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/50">
                                            Je bestelling staat op het gekozen
                                            tijdstip voor je klaar.
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-sm text-white">
                                        ✓
                                    </div>
                                </div>
                            </section>

                            {/* Customer info */}
                            <section>
                                <div>
                                    <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                                        Stap 01
                                    </p>

                                    <h2 className="mt-3 font-serif text-3xl">
                                        Jouw gegevens
                                    </h2>
                                </div>

                                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                                    <Field
                                        label="Voornaam"
                                        required
                                        error={errors.first_name}
                                    >
                                        <input
                                            type="text"
                                            autoComplete="given-name"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData(
                                                    'first_name',
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClass(
                                                !!errors.first_name,
                                            )}
                                        />
                                    </Field>

                                    <Field
                                        label="Achternaam"
                                        required
                                        error={errors.last_name}
                                    >
                                        <input
                                            type="text"
                                            autoComplete="family-name"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData(
                                                    'last_name',
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClass(
                                                !!errors.last_name,
                                            )}
                                        />
                                    </Field>

                                    <Field
                                        label="Telefoonnummer"
                                        required
                                        error={errors.phone}
                                    >
                                        <input
                                            type="tel"
                                            autoComplete="tel"
                                            placeholder="06 12345678"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData(
                                                    'phone',
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClass(
                                                !!errors.phone,
                                            )}
                                        />
                                    </Field>

                                    <Field
                                        label="E-mailadres"
                                        required
                                        error={errors.email}
                                    >
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            placeholder="naam@email.nl"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClass(
                                                !!errors.email,
                                            )}
                                        />
                                    </Field>
                                </div>
                            </section>

                            {/* Time */}
                            <section>
                                <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Stap 02
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Afhaaltijd
                                </h2>

                                <div className="mt-7">
                                    <Field
                                        label="Tijdvak kiezen"
                                        required
                                        error={errors.time_slot}
                                    >
                                        <select
                                            value={data.time_slot}
                                            onChange={(e) =>
                                                setData(
                                                    'time_slot',
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClass(
                                                !!errors.time_slot,
                                            )}
                                        >
                                            <option value="">
                                                Kies een tijd
                                            </option>

                                            <option value="asap">
                                                Zo snel mogelijk
                                            </option>

                                            <option value="17:00">
                                                17:00
                                            </option>

                                            <option value="17:15">
                                                17:15
                                            </option>

                                            <option value="17:30">
                                                17:30
                                            </option>

                                            <option value="17:45">
                                                17:45
                                            </option>

                                            <option value="18:00">
                                                18:00
                                            </option>

                                            <option value="18:15">
                                                18:15
                                            </option>

                                            <option value="18:30">
                                                18:30
                                            </option>
                                        </select>
                                    </Field>
                                </div>
                            </section>

                            {/* General note */}
                            <section>
                                <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Optioneel
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Opmerking
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#20231f]/45">
                                    Heb je een algemene opmerking voor de
                                    bestelling?
                                </p>

                                <textarea
                                    value={data.note}
                                    onChange={(e) =>
                                        setData('note', e.target.value)
                                    }
                                    rows={4}
                                    maxLength={1000}
                                    placeholder="Bijv. allergieën of andere opmerkingen..."
                                    className="mt-6 w-full resize-none border border-black/10 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/25 focus:border-[#5d6948]"
                                />
                            </section>
                        </div>

                        {/* RIGHT */}
                        <aside className="lg:sticky lg:top-28 lg:self-start">
                            <div className="border border-black/10 bg-white">
                                <div className="border-b border-black/10 px-6 py-6">
                                    <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                                        Overzicht
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl">
                                        Jouw bestelling
                                    </h2>
                                </div>

                                <div className="max-h-[420px] space-y-0 overflow-y-auto px-6">
                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border-b border-black/10 py-5 last:border-b-0"
                                        >
                                            <div className="flex items-start justify-between gap-5">
                                                <div>
                                                    <p className="font-serif text-lg">
                                                        {item.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#20231f]/45">
                                                        {item.quantity} × €
                                                        {formatPrice(
                                                            item.price,
                                                        )}
                                                    </p>

                                                    {item.note && (
                                                        <div className="mt-3 border-l-2 border-[#5d6948]/30 pl-3">
                                                            <p className="text-xs leading-5 text-[#20231f]/50 italic">
                                                                “{item.note}”
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                <p className="shrink-0 text-sm font-medium text-[#5d6948]">
                                                    €
                                                    {formatPrice(
                                                        Number(item.price) *
                                                        item.quantity,
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-black/10 bg-[#edf0e7] px-6 py-6">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                                Totaal
                                            </p>

                                            <p className="mt-1 text-[11px] text-[#20231f]/40">
                                                Inclusief btw
                                            </p>
                                        </div>

                                        <p className="font-serif text-3xl">
                                            €{formatPrice(total)}
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group mt-6 flex w-full items-center justify-between bg-[#20231f] px-6 py-5 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <span>
                                            {processing
                                                ? 'Doorsturen...'
                                                : 'Bestellen en betalen'}
                                        </span>

                                        {!processing && (
                                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                                →
                                            </span>
                                        )}
                                    </button>

                                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#20231f]/40">
                                        <span>🔒</span>
                                        <span>
                                            Veilig betalen via Mollie
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </form>
                )}
            </main>

            <Footer />
        </>
    );
}

function Field({
                   label,
                   required = false,
                   error,
                   children,
               }: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-2 block text-[10px] tracking-[0.16em] text-[#20231f]/50 uppercase">
                {label}
                {required && (
                    <span className="ml-1 text-[#5d6948]">*</span>
                )}
            </label>

            {children}

            {error && (
                <p className="mt-2 text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}

function inputClass(error: boolean) {
    return `w-full border bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/25 ${
        error
            ? 'border-red-400 focus:border-red-500'
            : 'border-black/10 focus:border-[#5d6948]'
    }`;
}
