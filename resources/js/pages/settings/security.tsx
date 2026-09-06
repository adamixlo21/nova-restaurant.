import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';
import SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import type { Props as ManageTwoFactorProps } from '@/components/manage-two-factor';
import ManageTwoFactor from '@/components/manage-two-factor';

// oxfmt-ignore
type Props = {
    passwordRules: string;
} & ManageTwoFactorProps;

export default function Security(props: Props) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <Head title="Beveiliging" />

            <main className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-[#20231f] sm:px-10 lg:px-12">
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="border-b border-black/10 pb-8">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                            Account
                        </p>

                        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                            Beveiliging
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/55">
                            Beheer het wachtwoord en de extra beveiliging van
                            het beheeraccount.
                        </p>
                    </div>

                    {/* Password */}
                    <section className="mt-10 border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-10">
                        <div className="mb-8">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Wachtwoord
                            </p>

                            <h2 className="mt-3 font-serif text-3xl">
                                Wachtwoord wijzigen
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                Gebruik een sterk en uniek wachtwoord voor het
                                beheeraccount van Brasserie De Bank.
                            </p>
                        </div>

                        <Form
                            {...SecurityController.update.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            resetOnError={[
                                'password',
                                'password_confirmation',
                                'current_password',
                            ]}
                            resetOnSuccess
                            onError={(errors) => {
                                if (errors.password) {
                                    passwordInput.current?.focus();
                                }

                                if (errors.current_password) {
                                    currentPasswordInput.current?.focus();
                                }
                            }}
                            className="space-y-7"
                        >
                            {({ errors, processing }) => (
                                <>
                                    <div>
                                        <label
                                            htmlFor="current_password"
                                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                        >
                                            Huidig wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="current_password"
                                            ref={currentPasswordInput}
                                            name="current_password"
                                            autoComplete="current-password"
                                            placeholder="Huidig wachtwoord"
                                            className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.current_password}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                        >
                                            Nieuw wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="password"
                                            ref={passwordInput}
                                            name="password"
                                            autoComplete="new-password"
                                            placeholder="Nieuw wachtwoord"
                                            passwordrules={props.passwordRules}
                                            className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.password}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password_confirmation"
                                            className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#20231f]/55"
                                        >
                                            Bevestig nieuw wachtwoord
                                        </label>

                                        <PasswordInput
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            autoComplete="new-password"
                                            placeholder="Herhaal nieuw wachtwoord"
                                            passwordrules={props.passwordRules}
                                            className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={
                                                errors.password_confirmation
                                            }
                                        />
                                    </div>

                                    <div className="border-t border-black/10 pt-7">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group flex w-full items-center justify-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                        >
                                            {processing
                                                ? 'Bezig met opslaan...'
                                                : 'Wachtwoord opslaan'}

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

                    {/* Two-factor */}
                    <section className="mt-8 border border-[#5d6948]/10 bg-[#edf0e7] p-7 sm:p-10">
                        <div className="mb-8">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Extra beveiliging
                            </p>

                            <h2 className="mt-3 font-serif text-3xl">
                                Tweestapsverificatie
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                Voeg een extra beveiligingslaag toe aan het
                                account door naast het wachtwoord ook een
                                verificatiecode te gebruiken.
                            </p>
                        </div>

                        <ManageTwoFactor
                            canManageTwoFactor={props.canManageTwoFactor}
                            requiresConfirmation={props.requiresConfirmation}
                            twoFactorEnabled={props.twoFactorEnabled}
                        />
                    </section>

                    {/* Security info */}
                    <section className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="border border-black/10 bg-white p-7">
                            <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                Tip
                            </p>

                            <h3 className="mt-4 font-serif text-2xl">
                                Gebruik een uniek wachtwoord
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#20231f]/50">
                                Gebruik voor dit beheeraccount geen wachtwoord
                                dat ook voor andere websites of accounts wordt
                                gebruikt.
                            </p>
                        </div>

                        <div className="border border-black/10 bg-[#ebe7dc] p-7">
                            <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                Beheeraccount
                            </p>

                            <h3 className="mt-4 font-serif text-2xl">
                                Alleen voor medewerkers
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#20231f]/50">
                                Deel de inloggegevens alleen met mensen die de
                                website van Brasserie De Bank mogen beheren.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
