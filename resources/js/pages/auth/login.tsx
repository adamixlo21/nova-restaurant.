import { Form, Head, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { store } from '@/routes/login';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status }: Props) {
    return (
        <>
            <Head title="Beheer login | Brasserie De Bank" />

            <main className="min-h-screen w-full bg-[#f7f4ee] text-[#20231f]">
                <div className="grid min-h-screen w-full lg:grid-cols-2">
                    {/* LEFT SIDE */}
                    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-12 sm:px-10 lg:px-16">
                        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full border border-[#5d6948]/10" />
                        <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full border border-[#5d6948]/10 lg:hidden" />

                        <div className="relative w-full max-w-md">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>

                                Terug naar website
                            </Link>

                            <div className="mt-12">
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Brasserie De Bank
                                </p>

                                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                    Welkom terug.
                                </h1>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-[#20231f]/55">
                                    Log in om menu&apos;s, reserveringen,
                                    actualiteiten, vacatures en berichten te
                                    beheren.
                                </p>
                            </div>

                            {status && (
                                <div className="mt-8 border border-[#5d6948]/20 bg-[#edf0e7] px-5 py-4 text-sm leading-6 text-[#20231f]/65">
                                    {status}
                                </div>
                            )}

                            <Form
                                {...store.form()}
                                resetOnSuccess={['password']}
                                className="mt-10"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        {/* EMAIL */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                            >
                                                E-mailadres
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                autoComplete="email"
                                                placeholder="info@brasseriedebank.nl"
                                                className="w-full border border-black/10 bg-white px-4 py-4 text-sm text-[#20231f] outline-none transition placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                            />

                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

                                        {/* PASSWORD */}
                                        <div className="mt-6">
                                            <label
                                                htmlFor="password"
                                                className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                            >
                                                Wachtwoord
                                            </label>

                                            <PasswordInput
                                                id="password"
                                                name="password"
                                                required
                                                autoComplete="current-password"
                                                placeholder="Wachtwoord"
                                                className="w-full border border-black/10 bg-white px-4 py-4 text-sm text-[#20231f] outline-none transition placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                            />

                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>

                                        {/* REMEMBER */}
                                        <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-[#20231f]/55">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                value="1"
                                                className="h-4 w-4 accent-[#5d6948]"
                                            />

                                            Ingelogd blijven
                                        </label>

                                        {/* SUBMIT */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group mt-8 flex w-full items-center justify-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#4f5a3d] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Bezig met inloggen...'
                                                : 'Inloggen'}

                                            {!processing && (
                                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            )}
                                        </button>
                                    </>
                                )}
                            </Form>

                            <div className="mt-8 border-t border-black/10 pt-6">
                                <p className="text-center text-xs leading-6 text-[#20231f]/35">
                                    Beheeromgeving Brasserie De Bank
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* RIGHT SIDE */}
                    <section className="relative hidden min-h-screen w-full overflow-hidden lg:block">
                        <img
                            src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                            alt="Brasserie De Bank"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                        <div className="absolute bottom-12 left-12 right-12 text-white">
                            <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                                Brasserie De Bank
                            </p>

                            <h2 className="mt-2 font-serif text-3xl">
                                Websitebeheer
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                                Alles wat nodig is om de website van De Bank
                                eenvoudig te beheren.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
