<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mot;
//use View;

class SitemapController extends Controller
{
    public function sitemap()
    {
        $numbers = Mot::select(["reg", "updated_at"]) 
            // you may want to add where clauses here according to your needs
            //->orderBy("id", "desc")
            ->take(40000) // each Sitemap file must have no more than 50,000 URLs and must be no larger than 10MB
            ->get();

        $content = \View::make('sitemap', ['numbers' => $numbers]);
        return \Response::make($content)->header('Content-Type', 'text/xml;charset=utf-8');
    }

    /*public function sitemap()
    {
        $numbers = Mot::all()->first();
        return response()->view('index', ['numbers' => $numbers])->header('Content-Type', 'text/xml');
    }

    public function numbers()
    {
        $numbers = Mot::latest()->get();
        return response()->view('1', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }*/

    /* не работает
    <lastmod>{{ gmdate(DateTime::W3C, strtotime($number->updated_at)) }}</lastmod>
    <lastmod>{{ $number->updated_at->tz('GMT')->toAtomString() }}</lastmod>
    */
}
