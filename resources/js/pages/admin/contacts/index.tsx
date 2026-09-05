import { Head, router } from '@inertiajs/react';
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
    function deleteContact(id: number) {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/contacts/${id}`);
        }
    }

    return (
        <>
            <Head title="Messages" />

            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">

                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                                <div>
                                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                        Management
                                    </p>

                                    <h1 className="font-serif text-4xl tracking-tight text-[#20231f] sm:text-5xl">
                                        Messages
                                    </h1>

                                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/55">
                                        View and manage messages sent through
                                        the contact form.
                                    </p>
                                </div>

                                {/* Total */}
                                <div className="border border-[#5d6948]/20 bg-white px-6 py-4">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#20231f]/40">
                                        Total Messages
                                    </p>

                                    <p className="mt-1 font-serif text-3xl text-[#20231f]">
                                        {contacts.length}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Empty state */}
                        {contacts.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-white px-6 py-20 text-center">
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

                                <h2 className="mt-5 font-serif text-2xl text-[#20231f]">
                                    No messages yet
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    Messages submitted through the contact
                                    form will appear here.
                                </p>
                            </div>
                        ) : (
                            /* Message cards */
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {contacts.map((contact) => (
                                    <article
                                        key={contact.id}
                                        className="group flex flex-col border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/30 hover:shadow-lg"
                                    >

                                        {/* Card header */}
                                        <div className="border-b border-black/5 p-6">

                                            <div className="flex items-start justify-between gap-4">
                                                <div className="min-w-0">

                                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                        Message from
                                                    </p>

                                                    <h2 className="mt-2 truncate font-serif text-2xl text-[#20231f]">
                                                        {contact.name}
                                                    </h2>

                                                </div>

                                                <span className="shrink-0 text-[10px] uppercase tracking-[0.15em] text-[#20231f]/30">
                                                    #{contact.id}
                                                </span>
                                            </div>

                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="mt-3 block truncate text-sm text-[#20231f]/50 transition hover:text-[#5d6948]"
                                            >
                                                {contact.email}
                                            </a>

                                        </div>

                                        {/* Message body */}
                                        <div className="flex-1 p-6">

                                            <div className="mb-4 flex items-center gap-3">
                                                <span className="h-px w-6 bg-[#5d6948]/40" />

                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                                    Message
                                                </p>
                                            </div>

                                            <p className="whitespace-pre-wrap text-sm leading-7 text-[#20231f]/65">
                                                {contact.message}
                                            </p>

                                        </div>

                                        {/* Card footer */}
                                        <div className="flex items-center justify-between border-t border-black/5 bg-[#f7f4ee]/50 px-6 py-4">

                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.15em] text-[#20231f]/30">
                                                    Received
                                                </p>

                                                <p className="mt-1 text-xs text-[#20231f]/55">
                                                    {new Date(
                                                        contact.created_at
                                                    ).toLocaleDateString(
                                                        'en-GB',
                                                        {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        }
                                                    )}
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    deleteContact(contact.id)
                                                }
                                                className="text-[10px] uppercase tracking-[0.15em] text-red-500 transition hover:text-red-700"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </article>
                                ))}
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </>
    );
}
