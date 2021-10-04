<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('post-thumbnails');
    add_theme_support('widgets');
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 56,
            'width'       => 128,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('header', get_template_directory_uri() . '/assets/css/header.css', true, '1.1', 'all');
    wp_enqueue_style('404', get_template_directory_uri() . '/assets/css/404.css', true, '1.1', 'all');
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', '', '', true);
});
