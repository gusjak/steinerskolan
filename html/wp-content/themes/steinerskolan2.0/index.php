<!-- Default page for every menu item that doesn't have a specified template.  -->
<?php get_header(); ?>

<?php if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); ?>

        <?php the_content(); ?>

    <?php endwhile; ?>

<?php endif; ?>

<?php get_footer(); ?>