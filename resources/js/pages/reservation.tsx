import { Head, useForm } from '@inertiajs/react';

export default function Reservation() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        message: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/reservation');
    }

    return (
        <>
            <Head title="Reservation" />

            <div className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <main className="px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-3xl">

                        <div className="mb-12 text-center">
                            <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                Reservations
                            </p>

                            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
                                Reserve a Table
                            </h1>

                            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/60">
                                Choose a date and time and let us know how many
                                guests will be joining you.
                            </p>
                        </div>

                        <form
                            onSubmit={submit}
                            className="border border-black/10 bg-white p-8 sm:p-10"
                        >
                            {/* Name */}
                            <div className="mb-6">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                />

                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                />

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="mb-6">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                />

                                {errors.phone && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Date & Time */}
                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                        Date
                                    </label>

                                    <input
                                        type="date"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData('date', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                    />

                                    {errors.date && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                        Time
                                    </label>

                                    <input
                                        type="time"
                                        value={data.time}
                                        onChange={(e) =>
                                            setData('time', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                    />

                                    {errors.time && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.time}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="mb-6">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                    Number of Guests
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={data.guests}
                                    onChange={(e) =>
                                        setData(
                                            'guests',
                                            Number(e.target.value),
                                        )
                                    }
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                />

                                {errors.guests && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.guests}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mb-8">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                    Message
                                </label>

                                <textarea
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className="w-full resize-none border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none focus:border-[#5d6948]"
                                />

                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#20231f] px-6 py-4 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:opacity-50"
                            >
                                {processing
                                    ? 'Sending...'
                                    : 'Request Reservation'}
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
