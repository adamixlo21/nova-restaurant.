import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';

export default function Appearance() {
    return (
        <>
            <Head title="Weergave" />

            <main className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-[#20231f] sm:px-10 lg:px-12">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="border-b border-black/10 pb-8">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                            Instellingen
                        </p>

                        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                            Weergave
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/55">
                            Kies hoe de beheeromgeving eruitziet tijdens het
                            werken.
                        </p>
                    </div>

                    {/* Appearance card */}
                    <section className="mt-10 border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-10">
                        <div className="mb-8">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Thema
                            </p>

                            <h2 className="mt-3 font-serif text-3xl">
                                Kies je voorkeur
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#20231f]/50">
                                Je kunt kiezen tussen licht, donker of de
                                systeeminstelling van je apparaat.
                            </p>
                        </div>

                        <div className="border-t border-black/10 pt-7">
                            <AppearanceTabs />
                        </div>
                    </section>

                    {/* Info */}
                    <section className="mt-8 border border-[#5d6948]/10 bg-[#edf0e7] p-7 sm:p-8">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#5d6948]">
                            Persoonlijke voorkeur
                        </p>

                        <h2 className="mt-2 font-serif text-2xl">
                            Alleen voor jouw account
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/55">
                            Deze instelling verandert alleen hoe jij de
                            beheeromgeving ziet. De openbare restaurantwebsite
                            blijft hetzelfde.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
