<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('automatic-feed-links');

    add_theme_support(
        'custom-logo',
        array(
            'height'      => 200,
            'width'       => 400,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );

    register_nav_menus([
        'header-menu' => __('Header Menu'),
        'footer-menu' => __('Footer Menu'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('header', get_template_directory_uri() . '/assets/css/header.css', true, '1.1', 'all');
    wp_enqueue_style('footer', get_template_directory_uri() . '/assets/css/footer.css', true, '1.1', 'all');
    wp_enqueue_style('landing', get_template_directory_uri() . '/assets/css/landing.css', true, '1.1', 'all');
    wp_enqueue_style('about', get_template_directory_uri() . '/assets/css/about.css', true, '1.1', 'all');
    wp_enqueue_style('work', get_template_directory_uri() . '/assets/css/work.css', true, '1.1', 'all');
    wp_enqueue_style('kitchen', get_template_directory_uri() . '/assets/css/kitchen.css', true, '1.1', 'all');

    wp_enqueue_script('header', get_template_directory_uri() . '/assets/js/header.js', '', '', true);
    wp_enqueue_script('drop-down', get_template_directory_uri() . '/assets/js/drop-down.js', '', '', true);
});


require get_template_directory() . '/post-types/arskurs.php';
require get_template_directory() . '/taxonomies/tool.php';

function get_menu(string $location)
{
    $menu = [];
    $items = wp_get_nav_menu_items($location) ?: [];

    foreach ($items as $item) {
        $parentId = (int) $item->menu_item_parent;

        if ($parentId === 0) {
            $item->children = [];
            $menu[$item->ID] = $item;

            continue;
        }

        $menu[$parentId]->children[] = $item;
    }

    return $menu;
}
