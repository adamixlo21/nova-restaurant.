<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Mollie\Api\Http\Data\Money;
use Mollie\Api\Http\Requests\CreatePaymentRequest;
use Mollie\Laravel\Facades\Mollie;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_type' => ['required', 'in:pickup'],

            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],

            'note' => ['nullable', 'string', 'max:1000'],
            'time_slot' => ['required', 'string', 'max:50'],

            'items' => ['required', 'array', 'min:1'],

            'items.*.id' => [
                'required',
                'integer',
                'exists:menu_items,id',
            ],

            'items.*.quantity' => [
                'required',
                'integer',
                'min:1',
                'max:20',
            ],

            'items.*.note' => [
                'nullable',
                'string',
                'max:500',
            ],
        ]);

        $order = DB::transaction(function () use ($validated) {
            $total = 0;
            $items = [];

            foreach ($validated['items'] as $cartItem) {
                $menuItem = MenuItem::findOrFail($cartItem['id']);

                $price = (float) $menuItem->price;
                $subtotal = $price * $cartItem['quantity'];

                $total += $subtotal;

                $items[] = [
                    'menu_item_id' => $menuItem->id,
                    'name' => $menuItem->name,
                    'price' => $price,
                    'quantity' => $cartItem['quantity'],
                    'note' => $cartItem['note'] ?? null,
                    'subtotal' => $subtotal,
                ];
            }

            $order = Order::create([
                'order_number' => 'DB-' . strtoupper(Str::random(8)),
                'order_type' => $validated['order_type'],
                'first_name' => $validated['first_name'],
                'last_name' => $validated['last_name'],
                'phone' => $validated['phone'],
                'email' => $validated['email'],
                'note' => $validated['note'] ?? null,
                'time_slot' => $validated['time_slot'],
                'total' => $total,
                'status' => 'pending',
                'payment_status' => 'pending',
            ]);

            $order->items()->createMany($items);

            return $order;
        });

        $paymentRequest = new CreatePaymentRequest(
            description: 'Bestelling ' . $order->order_number,
            amount: new Money(
                'EUR',
                number_format((float) $order->total, 2, '.', '')
            ),
            redirectUrl: route('checkout.payment.return', $order),
            webhookUrl: route('mollie.webhook'),
            metadata: [
                'order_id' => $order->id,
                'order_number' => $order->order_number,
            ],
        );

        $payment = Mollie::send($paymentRequest);

        $order->update([
            'mollie_payment_id' => $payment->id,
        ]);

        return Inertia::location($payment->getCheckoutUrl());
    }
}
