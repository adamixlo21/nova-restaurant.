import { Form, Head, Link, usePage } from '@inertiajs/react';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import InputError from '@/components/input-error';
import { send } from '@/routes/verification';
import { edit as editSecurity } from '@/routes/security';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function Profile({
                                    mustVerifyEmail,
                                    status,
                                }: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Profiel" />

            <main className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-[#20231f] sm:px-10 lg:px-12">
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="flex flex-col gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Account
                            </p>

                            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                Mijn profiel
                            </h1>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Beheer de naam en het e-mailadres waarmee je
                                inlogt in de beheeromgeving van Brasserie De
                                Bank.
                            </p>
                        </div>

                        <Link
                            href="/dashboard"
                            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]"
                        >
                            <span className="transition-transform group-hover:-translate-x-1">
                                ←
                            </span>

                            Dashboard
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                        {/* User card */}
                        <aside>
                            <div className="border border-black/10 bg-[#ebe7dc] p-7">
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                    Ingelogd als
                                </p>

                                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#5d6948] font-serif text-xl text-white">
                                    {auth.user.name
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>

                                <h2 className="mt-5 font-serif text-2xl">
                                    {auth.user.name}
                                </h2>

                                <p className="mt-2 break-all text-sm text-[#20231f]/50">
                                    {auth.user.email}
                                </p>

                                <div className="mt-7 border-t border-black/10 pt-6">
                                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                        Beheerder
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#20231f]/55">
                                        Dit account heeft toegang tot de
                                        beheeromgeving van Brasserie De Bank.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Form */}
                        <section className="border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-10">
                            <div className="mb-8">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Profielgegevens
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Gegevens aanpassen
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-[#20231f]/50">
                                    Pas hieronder de naam of het e-mailadres van
                                    het beheeraccount aan.
                                </p>
                            </div>

                            {status === 'profile-updated' && (
                                <div className="mb-7 flex items-start gap-4 border border-[#5d6948]/20 bg-[#edf0e7] px-5 py-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-sm text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                            Opgeslagen
                                        </p>

                                        <p className="mt-1 text-sm text-[#20231f]/60">
                                            Je profielgegevens zijn bijgewerkt.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <Form
                                {...ProfileController.update.form()}
                                options={{
                                    preserveScroll: true,
                                }}
                                className="space-y-7"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                            >
                                                Naam
                                            </label>

                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                defaultValue={auth.user.name}
                                                required
                                                autoComplete="name"
                                                placeholder="Naam"
                                                className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.name}
                                            />
                                        </div>

                                        {/* Email */}
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
                                                defaultValue={auth.user.email}
                                                required
                                                autoComplete="username"
                                                placeholder="E-mailadres"
                                                className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>

                                        {/* Email verification */}
                                        {mustVerifyEmail &&
                                            auth.user.email_verified_at ===
                                            null && (
                                                <div className="border border-amber-200 bg-amber-50 px-5 py-4">
                                                    <p className="text-sm leading-6 text-amber-900/70">
                                                        Je e-mailadres is nog
                                                        niet geverifieerd.
                                                    </p>

                                                    <Link
                                                        href={send()}
                                                        as="button"
                                                        className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#5d6948] underline underline-offset-4"
                                                    >
                                                        Verificatiemail opnieuw
                                                        versturen
                                                    </Link>

                                                    {status ===
                                                        'verification-link-sent' && (
                                                            <p className="mt-3 text-sm text-green-700">
                                                                Er is een nieuwe
                                                                verificatiemail
                                                                verstuurd.
                                                            </p>
                                                        )}
                                                </div>
                                            )}

                                        {/* Save */}
                                        <div className="border-t border-black/10 pt-7">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="group flex w-full items-center justify-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                            >
                                                {processing
                                                    ? 'Bezig met opslaan...'
                                                    : 'Wijzigingen opslaan'}

                                                {!processing && (
                                                    <span className="transition-transform group-hover:translate-x-1">
                                                        →
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </section>
                    </div>

                    {/* Password */}
                    <section className="mt-8 border border-black/10 bg-[#edf0e7] p-7 sm:p-8">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#5d6948]">
                                    Beveiliging
                                </p>

                                <h2 className="mt-2 font-serif text-2xl">
                                    Wachtwoord wijzigen
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#20231f]/50">
                                    Houd het beheeraccount veilig met een sterk
                                    wachtwoord.
                                </p>
                            </div>

                            <Link
                                href={editSecurity()}
                                className="shrink-0 border border-[#5d6948]/25 bg-white px-6 py-4 text-center text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:border-[#5d6948]"
                            >
                                Wachtwoord wijzigen
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
