<?php
namespace App\Http\Controllers;


use Stripe\PaymentIntent;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function stripeGet()
    {
        Stripe::setApiKey('sk_test_JRhsECeXwRuf6vkIUDKT28UH');
        $response = PaymentIntent::create ([
            "amount" => 1500,
            "currency" => "gbp",
            'payment_method' => 'pm_card_visa',
            'confirmation_method' => 'manual',
            'payment_method_types' => ['card'],
            'confirm' => true,
        ]);
        return response()->json(['token' => $response]);
    }
}
