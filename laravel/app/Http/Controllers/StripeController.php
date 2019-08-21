<?php
namespace App\Http\Controllers;


use App\Models\Vdi;
use App\Models\Stolen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Illuminate\Database\Eloquent\Model;

class StripeController extends Controller
{
    public function confirmPayment(\Illuminate\Http\Request $request) {
        $paymentId = $request->header('token');
        $regNumb = $request->header('number');
        $intentId = $request->header('paymentIntent');
        $product = $request->header('product');
        $data =  \App\Models\Mot::select('reg')->where('reg', $regNumb)->get();
        $price = ($product == '1') ? 700 : 1499;
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
                        $record = \App\Models\Stripe::select('*')->where('payment_intent', $intent->id)->first();
                    }
                    $request->replace(['number' => $record->reg]);
                }

                if ($intentId != '') {
                    $intent = PaymentIntent::retrieve(
                        $intentId
                    );
                    $intent->confirm();
                }
                $this->generatePaymentResponse($intent, $request, $record);
            } catch (\Stripe\Error\Base $e) {
                return response()->json(['error' => $e]);
            }
        } else {
            echo json_encode([
                'NotFound' => 'RegNumb not found',
            ]);
        }
    }    
    
    public function generatePaymentResponse($intent, $request, $record)
    {
        \App\Models\Stripe::where('payment_intent', $intent->id)->update([
            'status' => $intent->status
        ]);
        if ($intent->status == 'requires_source_action' && $intent->next_action->type == 'use_stripe_sdk') {
            echo json_encode([
                'requires_action' => true,
                'payment_intent_client_secret' => $intent->client_secret,

            ]);
        } else if ($intent->status == 'succeeded') {
            
             if($record->product == '1') {
                 StealController::ifStolen($request);
             }
             if($record->product == '2') {
                 VdiController::curlNumberPlate($request);
             }

            echo json_encode([
              'success' => true,
                'product' => $record->product
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Invalid PaymentIntent status']);
        }

    }
}
