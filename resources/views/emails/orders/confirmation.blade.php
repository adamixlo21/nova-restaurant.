<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestelling {{ $order->order_number }}</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background-color: #ebe7dc;
    font-family: Arial, Helvetica, sans-serif;
    color: #20231f;
">

<table
    role="presentation"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    style="background-color: #ebe7dc; padding: 40px 15px;"
>
    <tr>
        <td align="center">

            <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                    max-width: 620px;
                    background-color: #f7f4ee;
                    border: 1px solid rgba(32,35,31,0.10);
                "
            >

                {{-- HEADER --}}
                <tr>
                    <td
                        align="center"
                        style="
                            padding: 42px 30px 36px;
                            border-bottom: 1px solid #ddd9cf;
                        "
                    >
                        <div
                            style="
                                font-size: 10px;
                                letter-spacing: 4px;
                                text-transform: uppercase;
                                color: #5d6948;
                                margin-bottom: 12px;
                            "
                        >
                            Brasserie
                        </div>

                        <div
                            style="
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 32px;
                                letter-spacing: 4px;
                                color: #20231f;
                            "
                        >
                            DE BANK
                        </div>

                        <div
                            style="
                                margin-top: 8px;
                                font-size: 9px;
                                letter-spacing: 3px;
                                text-transform: uppercase;
                                color: #5d6948;
                            "
                        >
                            Harderwijk
                        </div>
                    </td>
                </tr>

                {{-- SUCCESS --}}
                <tr>
                    <td
                        align="center"
                        style="padding: 42px 30px 20px;"
                    >
                        <div
                            style="
                                width: 56px;
                                height: 56px;
                                line-height: 56px;
                                border-radius: 50%;
                                background-color: #edf0e7;
                                color: #5d6948;
                                font-size: 24px;
                                margin-bottom: 24px;
                            "
                        >
                            ✓
                        </div>

                        <h1
                            style="
                                margin: 0;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 34px;
                                line-height: 1.2;
                                font-weight: normal;
                                color: #20231f;
                            "
                        >
                            Bedankt voor je bestelling
                        </h1>

                        <p
                            style="
                                margin: 18px auto 0;
                                max-width: 460px;
                                font-size: 14px;
                                line-height: 24px;
                                color: #66685f;
                            "
                        >
                            Hoi {{ $order->first_name }}, je betaling is succesvol
                            verwerkt en we hebben je bestelling ontvangen.
                        </p>
                    </td>
                </tr>

                {{-- ORDER INFO --}}
                <tr>
                    <td style="padding: 20px 30px 10px;">
                        <table
                            role="presentation"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            style="background-color: #edf0e7;"
                        >
                            <tr>
                                <td
                                    width="50%"
                                    style="
                                        padding: 20px;
                                        border-right: 1px solid #d8dccf;
                                    "
                                >
                                    <div
                                        style="
                                            font-size: 9px;
                                            letter-spacing: 2px;
                                            text-transform: uppercase;
                                            color: #5d6948;
                                            margin-bottom: 7px;
                                        "
                                    >
                                        Bestelnummer
                                    </div>

                                    <div
                                        style="
                                            font-family: Georgia, 'Times New Roman', serif;
                                            font-size: 18px;
                                        "
                                    >
                                        {{ $order->order_number }}
                                    </div>
                                </td>

                                <td
                                    width="50%"
                                    style="padding: 20px;"
                                >
                                    <div
                                        style="
                                            font-size: 9px;
                                            letter-spacing: 2px;
                                            text-transform: uppercase;
                                            color: #5d6948;
                                            margin-bottom: 7px;
                                        "
                                    >
                                        Afhalen
                                    </div>

                                    <div
                                        style="
                                            font-family: Georgia, 'Times New Roman', serif;
                                            font-size: 18px;
                                        "
                                    >
                                        @if($order->time_slot === 'asap')
                                            Zo snel mogelijk
                                        @else
                                            {{ $order->time_slot }}
                                        @endif
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                {{-- ITEMS --}}
                <tr>
                    <td style="padding: 30px;">
                        <div
                            style="
                                font-size: 9px;
                                letter-spacing: 3px;
                                text-transform: uppercase;
                                color: #5d6948;
                                margin-bottom: 10px;
                            "
                        >
                            Overzicht
                        </div>

                        <h2
                            style="
                                margin: 0 0 24px;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 25px;
                                font-weight: normal;
                            "
                        >
                            Jouw bestelling
                        </h2>

                        <table
                            role="presentation"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                        >
                            @foreach($order->items as $item)
                                <tr>
                                    <td
                                        style="
                                            padding: 17px 0;
                                            border-bottom: 1px solid #ddd9cf;
                                            vertical-align: top;
                                        "
                                    >
                                        <div
                                            style="
                                                font-size: 15px;
                                                font-weight: bold;
                                            "
                                        >
                                            {{ $item->quantity }} × {{ $item->name }}
                                        </div>

                                        <div
                                            style="
                                                margin-top: 6px;
                                                font-size: 12px;
                                                color: #77796f;
                                            "
                                        >
                                            €{{ number_format($item->price, 2, ',', '.') }}
                                            per stuk
                                        </div>

                                        @if($item->note)
                                            <div
                                                style="
                                                    margin-top: 9px;
                                                    padding-left: 10px;
                                                    border-left: 2px solid #c9cfbd;
                                                    font-size: 12px;
                                                    line-height: 19px;
                                                    font-style: italic;
                                                    color: #66685f;
                                                "
                                            >
                                                {{ $item->note }}
                                            </div>
                                        @endif
                                    </td>

                                    <td
                                        align="right"
                                        style="
                                            padding: 17px 0;
                                            border-bottom: 1px solid #ddd9cf;
                                            vertical-align: top;
                                            white-space: nowrap;
                                            color: #5d6948;
                                            font-weight: bold;
                                        "
                                    >
                                        €{{ number_format($item->subtotal, 2, ',', '.') }}
                                    </td>
                                </tr>
                            @endforeach
                        </table>

                        @if($order->note)
                            <div
                                style="
                                    margin-top: 25px;
                                    padding: 18px;
                                    background-color: #f0ede5;
                                "
                            >
                                <div
                                    style="
                                        font-size: 9px;
                                        letter-spacing: 2px;
                                        text-transform: uppercase;
                                        color: #5d6948;
                                        margin-bottom: 8px;
                                    "
                                >
                                    Opmerking
                                </div>

                                <div
                                    style="
                                        font-size: 13px;
                                        line-height: 21px;
                                        color: #55574f;
                                    "
                                >
                                    {{ $order->note }}
                                </div>
                            </div>
                        @endif
                    </td>
                </tr>

                {{-- TOTAL --}}
                <tr>
                    <td
                        style="
                            padding: 28px 30px;
                            background-color: #edf0e7;
                        "
                    >
                        <table
                            role="presentation"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                        >
                            <tr>
                                <td>
                                    <div
                                        style="
                                            font-size: 9px;
                                            letter-spacing: 3px;
                                            text-transform: uppercase;
                                            color: #5d6948;
                                        "
                                    >
                                        Totaal
                                    </div>

                                    <div
                                        style="
                                            margin-top: 5px;
                                            font-size: 11px;
                                            color: #77796f;
                                        "
                                    >
                                        Inclusief btw
                                    </div>
                                </td>

                                <td
                                    align="right"
                                    style="
                                        font-family: Georgia, 'Times New Roman', serif;
                                        font-size: 30px;
                                        color: #20231f;
                                    "
                                >
                                    €{{ number_format($order->total, 2, ',', '.') }}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                {{-- CTA --}}
                <tr>
                    <td
                        align="center"
                        style="padding: 35px 30px;"
                    >
                        <p
                            style="
                                margin: 0 0 25px;
                                font-size: 13px;
                                line-height: 22px;
                                color: #66685f;
                            "
                        >
                            Je bestelling wordt klaargemaakt voor het gekozen
                            afhaalmoment.
                        </p>

                        <a
                            href="{{ config('app.url') }}"
                            style="
                                display: inline-block;
                                padding: 16px 28px;
                                background-color: #20231f;
                                color: #ffffff;
                                text-decoration: none;
                                font-size: 10px;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                            "
                        >
                            Bekijk Brasserie De Bank →
                        </a>
                    </td>
                </tr>

                {{-- FOOTER --}}
                <tr>
                    <td
                        align="center"
                        style="
                            padding: 28px 30px;
                            border-top: 1px solid #ddd9cf;
                            font-size: 11px;
                            line-height: 19px;
                            color: #92948b;
                        "
                    >
                        Met vriendelijke groet,<br>

                        <strong style="color: #5d6948;">
                            Brasserie De Bank
                        </strong>
                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>
