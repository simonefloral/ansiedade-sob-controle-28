<?php
/**
 * Protocolo Ansiedade — Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'protocolo_ansiedade_setup' ) ) :
	function protocolo_ansiedade_setup() {
		load_theme_textdomain( 'protocolo-ansiedade', get_template_directory() . '/languages' );

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo', array(
			'height'      => 60,
			'width'       => 200,
			'flex-height' => true,
			'flex-width'  => true,
		) );
		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'responsive-embeds' );

		register_nav_menus( array(
			'primary' => __( 'Menu Principal', 'protocolo-ansiedade' ),
		) );
	}
endif;
add_action( 'after_setup_theme', 'protocolo_ansiedade_setup' );

/**
 * Enqueue styles & fonts
 */
function protocolo_ansiedade_assets() {
	// Google Fonts (Playfair Display + Inter)
	wp_enqueue_style(
		'protocolo-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap',
		array(),
		null
	);

	// Main stylesheet
	wp_enqueue_style(
		'protocolo-ansiedade-style',
		get_stylesheet_uri(),
		array( 'protocolo-fonts' ),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'protocolo_ansiedade_assets' );

/**
 * Customizer — Checkout URL e textos editáveis
 */
function protocolo_ansiedade_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'protocolo_offer', array(
		'title'    => __( 'Oferta / Checkout', 'protocolo-ansiedade' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'protocolo_checkout_url', array(
		'default'           => '#cta',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( 'protocolo_checkout_url', array(
		'label'   => __( 'URL do Checkout (ex.: Hotmart, Kiwify)', 'protocolo-ansiedade' ),
		'section' => 'protocolo_offer',
		'type'    => 'url',
	) );

	$wp_customize->add_setting( 'protocolo_price', array(
		'default'           => 'R$ 47',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'protocolo_price', array(
		'label'   => __( 'Preço exibido', 'protocolo-ansiedade' ),
		'section' => 'protocolo_offer',
		'type'    => 'text',
	) );

	$wp_customize->add_setting( 'protocolo_ebook_image', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'protocolo_ebook_image', array(
		'label'   => __( 'Imagem da capa do e-book', 'protocolo-ansiedade' ),
		'section' => 'protocolo_offer',
	) ) );
}
add_action( 'customize_register', 'protocolo_ansiedade_customize_register' );

/**
 * Helper: get checkout URL
 */
function protocolo_get_checkout_url() {
	$url = get_theme_mod( 'protocolo_checkout_url', '#cta' );
	return $url ? $url : '#cta';
}

function protocolo_get_price() {
	return get_theme_mod( 'protocolo_price', 'R$ 47' );
}

function protocolo_get_ebook_image() {
	$img = get_theme_mod( 'protocolo_ebook_image' );
	return $img ? $img : get_template_directory_uri() . '/assets/ebook-cover.jpg';
}
