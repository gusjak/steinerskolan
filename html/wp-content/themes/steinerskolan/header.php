<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php $menuItems = wp_get_nav_menu_items('menu'); ?>

  <header>
    <nav>
      <?php if (has_custom_logo()) : ?>
        <div class="site-logo"><?php the_custom_logo(); ?></div>
      <?php else : ?>
        <a class="navbar-brand" href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
      <?php endif; ?>
      <ul class="menu">
        <?php
        $currentPageId = $wp_query->queried_object_id;
        foreach ($menuItems as $item) : ?>
          <a class="<?php echo $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?php echo $item->url; ?>">
            <li class="list-item">
              <?php echo $item->title; ?>
            </li>
          </a>
        <?php endforeach; ?>
        <button class="apply" id="btn">Ansök</button>
      </ul>
    </nav>
  </header>