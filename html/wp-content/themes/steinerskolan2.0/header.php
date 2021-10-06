<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>
</head>

<body <?php body_class('body'); ?>>
    <?php wp_body_open(); ?>

    <?php $menuItems = get_menu('header-menu'); ?>


    <header>
        <?php if (has_custom_logo()) : ?>
            <div class="site-logo"><?php the_custom_logo(); ?></div>
        <?php else : ?>
            <a class="site-logo-text" href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
        <?php endif; ?>

        <!-- Hamburger -->
        <div class="open-nav-menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="black" />
            </svg>
        </div>
        <div class="menu-overlay"></div>
        <nav class="nav-menu">
            <div class="close-nav-menu">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4 4 20m16 0L4 4l16 16Z" stroke="#000" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <ul class="menu">
                <?php $currentPageId = $wp_query->queried_object_id; ?>
                <?php foreach ($menuItems as $menuItem) : ?>
                    <?php if (sizeof($menuItem->children) === 0) : ?>
                        <!-- Single -->
                        <li class="menu-item">
                            <a class="nav-link<?= $menuItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $menuItem->url; ?>">
                                <?= $menuItem->title; ?>
                            </a>
                        </li>
                    <?php else : ?>
                        <!-- Parent -->
                        <li class="menu-item menu-item-has-children">
                            <a class="nav-link<?= $menuItem->object_id == $currentPageId ? ' active' : '' ?>" data-toggle="sub-menu" href="#">
                                <?= $menuItem->title; ?>
                                <svg class="sub-menu-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9L12 17L20 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <ul class="sub-menu">
                                <?php foreach ($menuItem->children as $childItem) : ?>
                                    <!-- Children -->
                                    <li class="menu-item-child">
                                        <a class="nav-link-child<?= $childItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $childItem->url ?>">
                                            <?= $childItem->title; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
                <button class="apply" id="button">Ansök</button>
            </ul>
        </nav>

    </header>

    <main>