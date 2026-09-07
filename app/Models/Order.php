<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'mollie_payment_id',
        'order_number',
        'order_type',
        'first_name',
        'last_name',
        'phone',
        'email',
        'note',
        'time_slot',
        'total',
        'status',
        'payment_status',
    ];

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
