import { Head, router } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

interface Props {
    contacts: Contact[];
}

export default function Index({ contacts }: Props) {
    const [search, setSearch] = useState('');
    const [selectedContact, setSelectedContact] = useState<Contact | null>(
        null,
    );

    function deleteContact(id: number) {
        if (confirm('Weet je zeker dat je dit bericht wilt verwijderen?')) {
            router.delete(`/admin/contacts/${id}`, {
                preserveScroll: true,
            });

            if (selectedContact?.id === id) {
                setSelectedContact(null);
            }
        }
    }

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    function formatDateTime(date: string) {
        return new Date(date).toLocaleString('nl-NL', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    const filteredContacts = useMemo(() => {
        const query = search.toLowerCase().trim();

        if (!query) {
            return contacts;
        }

        return contacts.filter((contact) => {
            return (
                contact.name.toLowerCase().includes(query) ||
                contact.email.toLowerCase().includes(query) ||
                contact.message.toLowerCase().includes(query)
            );
        });
    }, [contacts, search]);

    return (
        <>
            <Head title="Berichten" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">


                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10">
                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Admin · Berichten
                            </p>

                            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <h1 className="font-serif text-4xl sm:text-5xl">
                                        Berichten
                                    </h1>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                        Bekijk berichten die via het
                                        contactformulier zijn verstuurd.
                                    </p>
                                </div>

                                <div className="border border-black/10 bg-white px-6 py-4">
                                    <p className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                        Totaal
                                    </p>

                                    <p className="mt-1 font-serif text-3xl">
                                        {contacts.length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        {contacts.length > 0 && (
                            <div className="mb-6 border border-black/10 bg-white p-4 sm:p-5">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Zoek op naam, e-mail of bericht..."
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 pr-10 text-sm transition outline-none placeholder:text-[#20231f]/30 focus:border-[#5d6948]"
                                    />

                                    {search && (
                                        <button
                                            type="button"
                                            onClick={() => setSearch('')}
                                            className="absolute top-1/2 right-4 -translate-y-1/2 text-lg text-[#20231f]/35 transition hover:text-[#20231f]"
                                            aria-label="Zoeken wissen"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>

                                {search && (
                                    <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            {filteredContacts.length}{' '}
                                            {filteredContacts.length === 1
                                                ? 'bericht'
                                                : 'berichten'}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setSearch('')}
                                            className="text-[9px] tracking-[0.18em] text-[#5d6948] uppercase"
                                        >
                                            Zoeken wissen
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Empty */}
                        {contacts.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ebe7dc] text-[#5d6948]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>

                                <h2 className="mt-5 font-serif text-3xl">
                                    Nog geen berichten
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    Nieuwe berichten via het contactformulier
                                    verschijnen hier.
                                </p>
                            </div>
                        ) : filteredContacts.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Berichten
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Geen berichten gevonden
                                </h2>

                                <p className="mt-3 text-sm text-[#20231f]/50">
                                    Probeer een andere zoekopdracht.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSearch('')}
                                    className="mt-7 border border-black/10 px-6 py-4 text-[9px] tracking-[0.18em] uppercase transition hover:border-[#20231f]"
                                >
                                    Zoeken wissen
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Desktop table */}
                                <div className="hidden overflow-hidden border border-black/10 bg-white xl:block">
                                    <div className="grid grid-cols-[95px_minmax(130px,0.8fr)_minmax(170px,1fr)_minmax(200px,1.25fr)_215px] gap-4 border-b border-black/10 bg-[#ebe7dc] px-5 py-4">
                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Datum
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Naam
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            E-mail
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Bericht
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Acties
                                        </p>
                                    </div>

                                    <div className="divide-y divide-black/10">
                                        {filteredContacts.map((contact) => (
                                            <div
                                                key={contact.id}
                                                className="grid grid-cols-[95px_minmax(130px,0.8fr)_minmax(170px,1fr)_minmax(200px,1.25fr)_215px] items-center gap-4 px-5 py-5 transition hover:bg-[#f7f4ee]"
                                            >
                                                <p className="text-xs text-[#20231f]/45">
                                                    {formatDate(
                                                        contact.created_at,
                                                    )}
                                                </p>

                                                <div className="min-w-0">
                                                    <p className="truncate font-medium">
                                                        {contact.name}
                                                    </p>

                                                    <p className="mt-1 text-[9px] tracking-[0.16em] text-[#20231f]/30 uppercase">
                                                        #{contact.id}
                                                    </p>
                                                </div>

                                                <a
                                                    href={`mailto:${contact.email}`}
                                                    className="truncate text-sm text-[#20231f]/55 transition hover:text-[#5d6948]"
                                                >
                                                    {contact.email}
                                                </a>

                                                <p className="truncate text-sm text-[#20231f]/50">
                                                    {contact.message}
                                                </p>

                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedContact(
                                                                contact,
                                                            )
                                                        }
                                                        className="inline-flex min-w-[88px] items-center justify-center bg-[#20231f] px-3 py-2.5 text-[8px] tracking-[0.12em] text-white uppercase transition hover:bg-[#5d6948]"
                                                    >
                                                        Bekijken
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteContact(
                                                                contact.id,
                                                            )
                                                        }
                                                        className="inline-flex min-w-[100px] items-center justify-center border border-red-200 bg-red-50 px-3 py-2.5 text-[8px] tracking-[0.1em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                    >
                                                        Verwijderen
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tablet / Mobile */}
                                <div className="grid gap-4 sm:grid-cols-2 xl:hidden">
                                    {filteredContacts.map((contact) => (
                                        <article
                                            key={contact.id}
                                            className="flex flex-col border border-black/10 bg-white p-5"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="min-w-0">
                                                    <p className="text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                                        Bericht van
                                                    </p>

                                                    <h2 className="mt-2 truncate font-serif text-2xl">
                                                        {contact.name}
                                                    </h2>
                                                </div>

                                                <span className="shrink-0 text-[9px] tracking-[0.15em] text-[#20231f]/30 uppercase">
                                                    #{contact.id}
                                                </span>
                                            </div>

                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="mt-3 block text-sm break-all text-[#20231f]/50 transition hover:text-[#5d6948]"
                                            >
                                                {contact.email}
                                            </a>

                                            <p className="mt-5 line-clamp-3 flex-1 text-sm leading-7 text-[#20231f]/60">
                                                {contact.message}
                                            </p>

                                            <div className="mt-5 border-t border-black/10 pt-4">
                                                <p className="text-[8px] tracking-[0.18em] text-[#20231f]/30 uppercase">
                                                    Ontvangen
                                                </p>

                                                <p className="mt-1 text-xs text-[#20231f]/50">
                                                    {formatDate(
                                                        contact.created_at,
                                                    )}
                                                </p>
                                            </div>

                                            <div className="mt-5 grid grid-cols-2 gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedContact(
                                                            contact,
                                                        )
                                                    }
                                                    className="bg-[#20231f] px-4 py-3 text-[9px] tracking-[0.16em] text-white uppercase transition hover:bg-[#5d6948]"
                                                >
                                                    Bekijken
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        deleteContact(
                                                            contact.id,
                                                        )
                                                    }
                                                    className="border border-red-200 bg-red-50 px-4 py-3 text-[9px] tracking-[0.12em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                >
                                                    Verwijderen
                                                </button>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </div>

            {/* Modal */}
            {selectedContact && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-[2px]"
                    onClick={() => setSelectedContact(null)}
                >
                    <div
                        className="max-h-[90vh] w-full max-w-xl overflow-y-auto border border-black/10 bg-[#f7f4ee] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-[#20231f] p-6 text-[#f7f4ee] sm:p-8">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
                                        Bericht
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl text-white">
                                        {selectedContact.name}
                                    </h2>

                                    <p className="mt-2 text-sm text-white/45">
                                        {formatDateTime(
                                            selectedContact.created_at,
                                        )}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedContact(null)}
                                    className="text-2xl text-white/40 transition hover:text-white"
                                    aria-label="Sluiten"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] tracking-[0.2em] text-[#5d6948] text-black uppercase">
                                    Contactgegevens
                                </p>

                                <p className="mt-4 font-medium text-black">
                                    {selectedContact.name}
                                </p>

                                <a
                                    href={`mailto:${selectedContact.email}`}
                                    className="hover:text-[#5d6948 mt-2 block text-sm break-all text-[#20231f]/60 text-black transition"
                                >
                                    {selectedContact.email}
                                </a>

                                <a
                                    href={`mailto:${selectedContact.email}`}
                                    className="mt-5 inline-flex bg-[#20231f] px-5 py-3 text-[9px] tracking-[0.16em] text-white uppercase transition hover:bg-[#5d6948]"
                                >
                                    E-mail beantwoorden
                                </a>
                            </div>

                            <div className="mt-6 border border-black/10 bg-[#ebe7dc] p-5">
                                <p className="text-[9px] tracking-[0.2em] text-[#5d6948] text-black uppercase">
                                    Bericht
                                </p>

                                <p className="mt-3 text-sm leading-7 break-words whitespace-pre-wrap text-[#20231f]/70 text-black">
                                    {selectedContact.message}
                                </p>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedContact(null)}
                                    className="border border-black/10 px-6 py-4 text-[9px] tracking-[0.18em] text-black uppercase transition hover:bg-[#20231f] hover:text-white"
                                >
                                    Sluiten
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        deleteContact(selectedContact.id)
                                    }
                                    className="border border-red-200 bg-red-50 px-6 py-4 text-[9px] tracking-[0.16em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                >
                                    Bericht verwijderen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
