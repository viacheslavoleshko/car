<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mot;
//use View;

class SitemapController extends Controller
{
    /*public function sitemap()
    {
        $numbers = Mot::select(["reg", "updated_at"]) 
            // you may want to add where clauses here according to your needs
            //->orderBy("id", "desc")
            ->take(40000) // each Sitemap file must have no more than 50,000 URLs and must be no larger than 10MB
            ->get();

        $content = \View::make('sitemap', ['numbers' => $numbers]);
        return \Response::make($content)->header('Content-Type', 'text/xml;charset=utf-8');
    }*/

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

    public function index()
    {
        $numbers = Mot::orderBy('created_at', 'desc')->first();

        return response()->view('sitemap/index', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers1()
    {
        $numbers = Mot::orderBy("id", "asc")
        ->skip(getenv('SITEMAP_OFFSET') * 0)
        ->take(getenv('SITEMAP_OFFSET'))
        ->get();
        return response()->view('sitemap/mot', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers2()
    {
        $numbers = Mot::orderBy("id", "asc")
        ->skip(getenv('SITEMAP_OFFSET') * 1)
        ->take(getenv('SITEMAP_OFFSET'))
        ->get();
        return response()->view('sitemap/mot', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers3()
    {
        $numbers = Mot::orderBy("id", "asc")
        ->skip(getenv('SITEMAP_OFFSET') * 2)
        ->take(getenv('SITEMAP_OFFSET'))
        ->get();
        return response()->view('sitemap/mot', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers4()
    {
        $numbers = Mot::orderBy("id", "asc")
        ->skip(getenv('SITEMAP_OFFSET') * 3)
        ->take(getenv('SITEMAP_OFFSET'))
        ->get();
        return response()->view('sitemap/mot', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers5()
    {
        $numbers = Mot::orderBy("id", "asc")
        ->skip(getenv('SITEMAP_OFFSET') * 4)
        ->take(getenv('SITEMAP_OFFSET'))
        ->get();
        return response()->view('sitemap/mot', [
            'numbers' => $numbers,
        ])->header('Content-Type', 'text/xml');
    }
}
