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
            <div><?php the_custom_logo(); ?></div>
        <?php else : ?>
            <a href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
        <?php endif; ?>

        <nav class="navbar">
            <ul class="navbar-nav">
                <?php $currentPageId = $wp_query->queried_object_id; ?>
                <?php foreach ($menuItems as $menuItem) : ?>
                    <?php if (sizeof($menuItem->children) === 0) : ?>
                        <!-- Single -->
                        <li class="nav-item">
                            <a class="nav-link<?= $menuItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $menuItem->url; ?>">
                                <?= $menuItem->title; ?>
                            </a>
                        </li>
                    <?php else : ?>
                        <!-- Parent -->
                        <div>
                            <li class="parent-nav-item">
                                <a class="nav-link<?= $menuItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $menuItem->url; ?>">
                                    <?= $menuItem->title; ?>
                                </a>
                            </li>
                            <ul class="child-navbar-nav">
                                <?php foreach ($menuItem->children as $childItem) : ?>
                                    <!-- Children -->
                                    <li class="nav-item">
                                        <a class="nav-link<?= $childItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $childItem->url ?>">
                                            <?= $childItem->title; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
                <button class="apply" id="button">Ansök</button>
            </ul>
        </nav>
    </header>

    <main>