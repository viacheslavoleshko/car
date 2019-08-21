<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Mot;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $count = Mot::whereNotNull('updated_at')->count();
        $style = getenv('APP_URL') . '/sitemap/styles/index.xsl';
        $pages = ceil($count / getenv('SITEMAP_OFFSET'));
        $pwa = preg_replace('/car\./', '',  getenv('APP_URL'));

        $file = view('sitemap/index', [
            'count' => $count,
            'pages' => $pages,
            'style' => $style,
            'pwa' => $pwa,
        ]);

        Storage::disk('index')->put("sitemap.xml", $file);
        
        for($i = 1; $i <= $pages; $i++) {
            self::numbers($i);
        }
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

            $file = view('sitemap/mot', [
                'numbers' => $numbers,
                'style' => $style,
                'pwa' => $pwa,
            ]);

            Storage::disk('car')->put("$page.xml", $file);
        } else {
            abort(404);
        }
    }
}
