<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @for ($i = 1; $i <= ceil($count / getenv('SITEMAP_OFFSET')); $i++ )
    <sitemap>
        <loc>{{ url("gmaps/car/{$i}") }}</loc>
    </sitemap>
    @endfor
</sitemapindex>