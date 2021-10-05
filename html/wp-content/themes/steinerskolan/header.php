<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php $menuItems = wp_get_nav_menu_items('Primary'); ?>

  <header>
    <nav>
      <?php if (has_custom_logo()) : ?>
        <div class="logo"><?php the_custom_logo(); ?></div>
      <?php else : ?>
        <a href="<?php echo site_url(); ?>"> <?php bloginfo('name'); ?></a>
      <?php endif; ?>
      <ul class="menu">
        <?php $currentPageId = $wp_query->queried_object_id;
        foreach ($menuItems as $item) : ?>
          <li class="list-item">
            <a class="<?php echo $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?php echo $item->url; ?>">
              <?php echo $item->title; ?>
            </a>
            <?php if ($item->children > 0) : ?>
              <ul class="menu">
                <?php foreach ($item->children as $childItem) : ?>
                  <li class="list-item">
                    <a class="<?php echo $childItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?php echo $childItem->url; ?>">
                      <?php echo $childItem->title; ?>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
        <button class="apply" id="button">Ansök</button>
      </ul>
    </nav>
  </header>
  <main>