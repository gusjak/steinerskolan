<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('menus');
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', false, null);
    wp_enqueue_style('nav', get_template_directory_uri() . '/assets/css/nav.css', false, null);
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js');
});
