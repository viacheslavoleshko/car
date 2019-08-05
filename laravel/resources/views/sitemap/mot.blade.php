<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" 
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    @foreach ($numbers as $number)
        <url>
            <loc>{{ url("/mot/{$number->reg}") }}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
    @endforeach
</urlset>