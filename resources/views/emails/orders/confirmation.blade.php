<x-mail::message>
    # Bedankt voor je bestelling

    Hoi {{ $order->first_name }},

    We hebben je bestelling ontvangen en je betaling is succesvol verwerkt.

    **Bestelnummer:** {{ $order->order_number }}

    **Afhalen:**
    @if($order->time_slot === 'asap')
        Zo snel mogelijk
    @else
        {{ $order->time_slot }}
    @endif

    ---

    ## Jouw bestelling

    @foreach($order->items as $item)

        **{{ $item->quantity }} × {{ $item->name }}**
        €{{ number_format($item->price, 2, ',', '.') }} per stuk

        @if($item->note)
            _Opmerking: {{ $item->note }}_
        @endif

        **€{{ number_format($item->subtotal, 2, ',', '.') }}**

        ---

    @endforeach

    @if($order->note)
        ## Opmerking bij bestelling

        {{ $order->note }}
    @endif

    ## Totaal

    **€{{ number_format($order->total, 2, ',', '.') }}**

    Je bestelling wordt klaargemaakt voor het gekozen afhaalmoment.

    <x-mail::button :url="config('app.url')">
        Bekijk Brasserie De Bank
    </x-mail::button>

    Met vriendelijke groet,
    **Brasserie De Bank**
</x-mail::message>
