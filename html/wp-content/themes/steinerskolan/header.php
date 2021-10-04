<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php $menuItems = wp_get_nav_menu_items('huvudmeny'); ?>

  <nav>
    <a href="<?php echo home_url() ?>">
      <img class="menuLogo" src="http://164.90.221.71//wp-content/uploads/2021/10/logo.png" alt="steinerlogo" />
    </a>
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
      <a href=""><button class="apply">Ansök</button></a>
    </ul>
  </nav>