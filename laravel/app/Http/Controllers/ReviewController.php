<?php
namespace App\Http\Controllers;


use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
   public function addReview(Request $request)
   {
       $number = $request->input('reg');
       $data = \App\Models\Mot::select('reg')->where('reg', $number)->get();
       if ($data->first()) {
           $type = $request->input('type');
           $star = $request->input('star');
           $message = $request->input('message');
           Review::insert([
               'type' => $type,
               'reg' => $number,
               'star' => $star,
               'message' => $message
           ]);
           echo json_encode([
               'success' => true
           ]);
       } else {
           echo json_encode([
               'error' => 'Number not Found'
           ]);
       }
   }

   public function getReview(Request $request) {
       $number = $request->header('number');
       echo json_encode([
               'reviews' => Review::select('*')->where('reg', $number)->get()
       ]);

   }
}
