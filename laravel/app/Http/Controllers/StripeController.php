<?php
namespace App\Http\Controllers;


use App\Models\Vdi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Illuminate\Database\Eloquent\Model;

class StripeController extends Controller
{

    public function confirmPayment(\Illuminate\Http\Request $request) {
              $paymentId = $request->header('token');
              $regNumb = $request->header('regnumb');
              $intentId = $request->header('paymentIntent');
              $product = $request->header('product');
              if ($product == '1')
                  $price = 700;


                   else $price = 1499;

               $data =  \App\Models\Mot::select('reg')->where('reg', $regNumb)->get();
              if($data->first()) {
                  Stripe::setApiKey(env(BUY_REPORT_SERCET_KEY));
                  try {
                      if ($paymentId != '') {
                          $intent = PaymentIntent::create([
                              'payment_method' => $paymentId,
                              "amount" => $price,
                              "currency" => "gbp",
                              'confirmation_method' => 'manual',
                              'payment_method_types' => ['card'],
                              "statement_descriptor" => "Car Check",
                              "statement_descriptor_suffix" => $regNumb,
                              'confirm' => true,
                          ]);
                          $record = \App\Models\Stripe::select('*')->where('payment_intent', $intent->id)->first();
                          if (!$record) {
                              \App\Models\Stripe::insert([
                                  'status' => 'intent',
                                  'reg' => $regNumb,
                                  'payment_intent' => $intent->id,
                                  'product' => $product,
                                  'price' => $price
                              ]);
                          }
                      }

                      if ($intentId != '') {
                          $intent = PaymentIntent::retrieve(
                              $intentId
                          );
                          $intent->confirm();
                      }
                       $this->generatePaymentResponse($intent,$product);
                  } catch (\Stripe\Error\Base $e) {
                      return response()->json(['error' => $e]);
                  }
              } else {
                      echo json_encode([
                     'NotFound' => 'RegNumb not found',
            ]);
        }
          }
    public function generatePaymentResponse($intent, $product) {
        \App\Models\Stripe::where('payment_intent', $intent->id)->update([
            'status' => $intent->status
        ]);
        if ($intent->status == 'requires_source_action' &&
            $intent->next_action->type == 'use_stripe_sdk') {
            echo json_encode([
                'requires_action' => true,
                'payment_intent_client_secret' => $intent->client_secret
            ]);
        } else if ($intent->status == 'succeeded') {
            VdiController::fill();

            echo json_encode([
              'success' => true,
                'product' => $product
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Invalid PaymentIntent status']);
        }

    }

}
