<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Mot;

class SitemapController extends Controller
{
    public function index()
    {
        $count = Mot::whereNotNull('updated_at')->count();
        $style = getenv('APP_URL') . '/sitemap/styles/index.xsl';
        $pages = ceil($count / getenv('SITEMAP_OFFSET'));

        return response()->view('sitemap/index', [
            'count' => $count,
            'pages' => $pages,
            'style' => $style,
        ])->header('Content-Type', 'text/xml');
    }

    public function numbers($page)
    {
        $count = Mot::whereNotNull('updated_at')->count();
        $style = getenv('APP_URL') . '/sitemap/styles/xml.xsl';
        $pwa = preg_replace('/car\./', '',  getenv('APP_URL'));

        if ( $page <= ceil($count / getenv('SITEMAP_OFFSET')) && $page != 0 ) {
            $numbers = Mot::whereNotNull('updated_at')
                ->orderBy("cnt", "desc")
                ->skip(getenv('SITEMAP_OFFSET') * ($page - 1) )
                ->take(getenv('SITEMAP_OFFSET'))
                ->get();

            $file = response()->view('sitemap/mot', [
                'numbers' => $numbers,
                'style' => $style,
                'pwa' => $pwa,
            ])->header('Content-Type', 'text/xml');

            Storage::disk('pwa')->put("$page.xml", $file);
        } else {
            abort(404);
        }
    }
}
