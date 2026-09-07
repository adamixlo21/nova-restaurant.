import { useCart } from '@/components/CartContext';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}
const formatPrice = (price: string) =>
    Number(price).toFixed(2).replace('.', ',');

export default function Cart({ isOpen, onClose }: CartProps) {
    const [openNoteId, setOpenNoteId] = useState<number | null>(null);

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateItemNote,
    } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0,
    );

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {/*/!* Overlay *!/*/}
            {/*<div*/}
            {/*    onClick={onClose}*/}
            {/*    className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"*/}
            {/*/>*/}

            {/* Cart drawer */}
            <aside className="fixed top-0 right-0 z-50 flex h-screen w-full max-w-[420px] flex-col border-l border-black/10 bg-[#f7f4ee] shadow-[-20px_0_60px_rgba(0,0,0,0.12)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/10 px-6 py-6">
                    <div>
                        <p className="text-[9px] tracking-[0.3em] text-[#5d6948] uppercase">
                            Brasserie De Bank
                        </p>

                        <h2 className="mt-2 font-serif text-3xl text-[#20231f]">
                            Jouw bestelling
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="group flex h-11 w-11 items-center justify-center border border-black/10 text-xl text-[#20231f] transition hover:border-[#5d6948] hover:bg-[#5d6948] hover:text-white"
                        aria-label="Winkelmand sluiten"
                    >
                        ×
                    </button>
                </div>

                {/* Cart content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    {cart.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#5d6948]/20 text-2xl">
                                🛒
                            </div>

                            <h3 className="mt-6 font-serif text-2xl text-[#20231f]">
                                Je winkelmand is leeg
                            </h3>

                            <p className="mt-3 max-w-xs text-sm leading-6 text-[#20231f]/50">
                                Voeg een gerecht toe aan je bestelling om verder
                                te gaan.
                            </p>

                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-7 border-b border-[#5d6948] pb-1 text-[10px] tracking-[0.2em] text-[#5d6948] uppercase"
                            >
                                Bekijk de kaart
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="border border-black/10 bg-white/60 p-5 transition hover:bg-white"
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-serif text-xl text-[#20231f]">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 text-xs text-[#20231f]/45">
                                                €{formatPrice(item.price)} per
                                                stuk
                                            </p>
                                        </div>

                                        <p className="shrink-0 text-sm font-medium text-[#5d6948] text-black">
                                            €
                                            {formatPrice(
                                                (
                                                    Number(item.price) *
                                                    item.quantity
                                                ).toString(),
                                            )}
                                        </p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center border border-black/10 bg-[#f7f4ee]">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="flex h-9 w-9 items-center justify-center text-lg text-[#20231f]/60 text-black transition hover:bg-[#5d6948] hover:text-white"
                                            >
                                                −
                                            </button>

                                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-black/10 text-sm font-medium text-black">
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="flex h-9 w-9 items-center justify-center text-lg text-[#20231f]/60 transition hover:bg-[#5d6948] hover:text-white"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <span className="text-[9px] tracking-[0.15em] text-[#20231f]/35 uppercase">
                                            Aantal
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id)}
                                        className="mt-4 text-[9px] tracking-[0.18em] text-red-700/60 uppercase transition hover:text-red-700"
                                    >
                                        Verwijderen
                                    </button>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenNoteId(
                                                    openNoteId === item.id
                                                        ? null
                                                        : item.id,
                                                )
                                            }
                                            className="text-[11px] font-medium text-[#5d6948] underline underline-offset-4 transition hover:text-[#20231f]"
                                        >
                                            {item.note
                                                ? 'Opmerking wijzigen'
                                                : 'Opmerking toevoegen'}
                                        </button>

                                        {openNoteId === item.id && (
                                            <div className="mt-3">
                                                <textarea
                                                    value={item.note}
                                                    onChange={(e) =>
                                                        updateItemNote(
                                                            item.id,
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="Bijv. geen ui, saus apart..."
                                                    rows={3}
                                                    className="w-full resize-none border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm text-black transition outline-none placeholder:text-black/30 focus:border-[#5d6948]"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenNoteId(null)
                                                    }
                                                    className="mt-2 text-[10px] tracking-[0.15em] text-[#20231f]/50 uppercase transition hover:text-[#20231f]"
                                                >
                                                    Klaar
                                                </button>
                                            </div>
                                        )}

                                        {item.note &&
                                            openNoteId !== item.id && (
                                                <p className="mt-2 text-xs text-[#20231f]/50 italic">
                                                    “{item.note}”
                                                </p>
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="border-t border-black/10 bg-[#edf0e7] px-6 py-6">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                    Totaal
                                </p>

                                <p className="mt-1 text-xs text-[#20231f]/45">
                                    Inclusief btw
                                </p>
                            </div>

                            <p className="font-serif text-3xl text-[#20231f]">
                                €{formatPrice(total.toString())}
                            </p>
                        </div>

                        <Link
                            href="/checkout"
                            onClick={onClose}
                            className="group mt-6 flex w-full items-center justify-between bg-[#20231f] px-6 py-5 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:bg-[#5d6948]"
                        >
                            <span>Afrekenen</span>

                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>
                        </Link>

                        <p className="mt-4 text-center text-[10px] text-[#20231f]/35">
                            Veilig betalen
                        </p>
                    </div>
                )}
            </aside>
        </>
    );
}
