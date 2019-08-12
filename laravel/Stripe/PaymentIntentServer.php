<?php
namespace App;
use Stripe\PaymentIntent;
use Stripe\Stripe;

Stripe::setApiKey('sk_test_JRhsECeXwRuf6vkIUDKT28UH');
class PaymentIntentServer
{
 public function Creatable() {
     $this->expectsRequest(
         'post',
         '/v1/payment_intents'
     );
     $intent = PaymentIntent::create([
         'amount' => 1099,
         'currency' => 'gbp',
         'payment_method_types' => ['card'],
         'confirm' => true,
     ]);
     $this->assertInstanceOf("Stripe\\PaymentIntent", $intent);
 }
}
