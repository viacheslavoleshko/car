<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<?php echo '<'.'?'.'xml-stylesheet href="'. $style .'" type="text/xsl"?>'."\n"; ?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @for ($i = 1; $i <= $pages; $i++ )
    <sitemap>
        <loc>{{ $pwa . "/gmaps/car/car/{$i}.xml" }}</loc>
    </sitemap>
    @endfor
</sitemapindex>
