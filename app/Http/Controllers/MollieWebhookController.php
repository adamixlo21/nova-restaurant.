<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Mollie\Api\Http\Requests\GetPaymentRequest;
use Mollie\Laravel\Facades\Mollie;

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
        } elseif ($payment->isCanceled()) {
            $order->update([
                'payment_status' => 'cancelled',
            ]);
        } elseif ($payment->isFailed()) {
            $order->update([
                'payment_status' => 'failed',
            ]);
        } elseif ($payment->isExpired()) {
            $order->update([
                'payment_status' => 'expired',
            ]);
        }

        return response('OK', 200);
    }
}
