<?php
/**
 * Fallback template — redireciona para a front-page quando aplicável.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

// Se for a home, usa front-page.php
if ( is_front_page() ) {
	get_template_part( 'front-page' );
	return;
}

get_header(); ?>

<section class="section">
	<div class="container section-narrow">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class(); ?>>
					<h1><?php the_title(); ?></h1>
					<div class="entry-content">
						<?php the_content(); ?>
					</div>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<h1>Nada encontrado</h1>
			<p>Volte para a <a href="<?php echo esc_url( home_url( '/' ) ); ?>">página inicial</a>.</p>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
