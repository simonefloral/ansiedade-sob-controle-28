<?php
/**
 * Header
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Guia prático com 7 técnicas para controlar a crise no momento em que ela surge. Sem depender de ninguém. Acesso imediato.">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container">
		<?php if ( has_custom_logo() ) : ?>
			<?php the_custom_logo(); ?>
		<?php else : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-brand">
				<?php bloginfo( 'name' ); ?>
			</a>
		<?php endif; ?>

		<a href="<?php echo esc_url( protocolo_get_checkout_url() ); ?>" class="btn btn-gold">
			Quero o Protocolo
		</a>
	</div>
</header>

<main id="content">
