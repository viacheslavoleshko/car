<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<?php echo '<'.'?'.'xml-stylesheet href="'. $style .'" type="text/xsl"?>'."\n"; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" 
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    @foreach ($numbers as $number)
        <url>
            <priority>0.8</priority>
            <loc>{{ $pwa . "/vehicle/check/{$number->reg}" }}</loc>
            <lastmod>{{ $number->updated_at->tz('UTC')->toAtomString() }}</lastmod>
            <changefreq>monthly</changefreq>
        </url>
    @endforeach
</urlset>
