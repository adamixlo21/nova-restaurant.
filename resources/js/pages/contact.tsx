
import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';

export default function Contact() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        message: '',
    });

    return (
        <>

            <Head title="Contact" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="px-6 py-24 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                            Contact
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
                            Get in touch.
                        </h1>

                        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#20231f]/65">
                            Have a question, want to make a reservation, or simply
                            want to get in touch? We would love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Contact information + form */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

                        {/* Information */}
                        <div>
                            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                Visit Us
                            </p>

                            <h2 className="font-serif text-4xl">
                                We are here for you
                            </h2>

                            <div className="mt-10 space-y-8">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                        Address
                                    </p>

                                    <p className="mt-2 text-sm leading-6">
                                        Brasserie De Bank
                                        <br />
                                        Your address here
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                        Phone
                                    </p>

                                    <p className="mt-2 text-sm">
                                        Your phone number
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                        Email
                                    </p>

                                    <p className="mt-2 text-sm">
                                        Your email address
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                        Opening Hours
                                    </p>

                                    <p className="mt-2 text-sm leading-6">
                                        Monday – Sunday
                                        <br />
                                        10:00 – 22:00
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Form */}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                post('/contact');
                            }}
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs uppercase tracking-[0.15em]"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d6948]"
                                />

                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs uppercase tracking-[0.15em]"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d6948]"
                                />

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs uppercase tracking-[0.15em]"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows={6}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full resize-none border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm outline-none transition focus:border-[#5d6948]"
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
                                className="w-full bg-[#20231f] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>



                    </div>
                </section>

            </main>


        </>
    );
}
