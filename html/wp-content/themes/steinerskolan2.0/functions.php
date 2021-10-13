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
    wp_enqueue_style('about-school', get_template_directory_uri() . '/assets/css/about-school.css', true, '1.1', 'all');
    wp_enqueue_style('contact', get_template_directory_uri() . '/assets/css/contact.css', true, '1.1', 'all');
    wp_enqueue_style('footer', get_template_directory_uri() . '/assets/css/footer.css', true, '1.1', 'all');
    wp_enqueue_style('landing', get_template_directory_uri() . '/assets/css/landing.css', true, '1.1', 'all');
    wp_enqueue_style('nav', get_template_directory_uri() . '/assets/css/nav.css', true, '1.1', 'all');
    wp_enqueue_style('parents', get_template_directory_uri() . '/assets/css/parents.css', true, '1.1', 'all');
    wp_enqueue_style('kitchen', get_template_directory_uri() . '/assets/css/kitchen.css', true, '1.1', 'all');
    wp_enqueue_style('working', get_template_directory_uri() . '/assets/css/working.css', true, '1.1', 'all');
    wp_enqueue_style('waldorf', get_template_directory_uri() . '/assets/css/waldorf.css', true, '1.1', 'all');

    // Global scripts
    wp_enqueue_script('header', get_template_directory_uri() . '/assets/js/header.js', '', '', true);
});

function my_scripts()
{
    if (is_page(76)) {
        wp_enqueue_script('drop-down-about', get_template_directory_uri() . '/assets/js/drop-down-about.js', array(), '1.0.0', true);
    }

    if (is_page(78)) {
        wp_enqueue_script('drop-down-work', get_template_directory_uri() . '/assets/js/drop-down-work.js', array(), '1.0.0', true);
        wp_enqueue_script('preschool', get_template_directory_uri() . '/assets/js/preschool.js', array(), '1.0.0', true);
    }

    if (is_page(784)) {
        wp_enqueue_script('drop-down-waldorf', get_template_directory_uri() . '/assets/js/drop-down-waldorf.js', array(), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'my_scripts');


add_action('wp_enqueue_scripts', 'load_custom_js');

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
