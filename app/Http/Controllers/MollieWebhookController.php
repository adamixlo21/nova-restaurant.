<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Mollie\Api\Http\Requests\GetPaymentRequest;
use Mollie\Laravel\Facades\Mollie;
use App\Mail\OrderConfirmation;
use Illuminate\Support\Facades\Mail;

class MollieWebhookController extends Controller
{
    public function __invoke(Request $request)
    {
        $paymentId = $request->input('id');

        if (!$paymentId) {
            return response('Missing payment id', 400);
        }

        $payment = Mollie::send(
            new GetPaymentRequest(id: $paymentId)
        );

        $order = Order::where(
            'mollie_payment_id',
            $payment->id
        )->first();

        if (!$order) {
            return response('Order not found', 404);
        }

        if ($payment->isPaid()) {
            $order->update([
                'payment_status' => 'paid',
                'status' => 'confirmed',
            ]);

            if ($order->confirmation_email_sent_at === null) {
                Mail::to($order->email)->send(
                    new OrderConfirmation($order)
                );

                $order->update([
                    'confirmation_email_sent_at' => now(),
                ]);
            }
        }

        return response('OK', 200);
    }
}
