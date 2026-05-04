<?php
/**
 * Front Page — Landing Page do Protocolo de Controle da Ansiedade
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();

$checkout = protocolo_get_checkout_url();
$price    = protocolo_get_price();
$ebook    = protocolo_get_ebook_image();
?>

<!-- ============ HERO ============ -->
<section class="hero">
	<div class="container hero-grid">
		<div class="fade-up">
			<span class="eyebrow">✦ Página de Vendas</span>
			<h1>Protocolo de controle da <span class="text-gradient-gold">Ansiedade</span></h1>
			<p class="hero-lead"><strong>7 práticas</strong> para cada uma das <strong>7 principais ansiedades</strong>.</p>
			<p class="hero-sub">
				Sem depender de outra pessoa. Sem se sentir refém da própria mente.
				Com um passo a passo simples e prático para usar no exato momento em que a crise aparece.
			</p>
			<div style="margin-top: 2rem;">
				<a href="<?php echo esc_url( $checkout ); ?>" class="btn btn-gold btn-lg">Quero acessar o método agora</a>
			</div>
			<div class="hero-meta">
				<span class="stars">★★★★★ <span style="color: var(--muted-foreground);">Avaliado por leitores</span></span>
				<span>🛡 Garantia 7 dias</span>
			</div>
		</div>

		<div class="hero-image">
			<img src="<?php echo esc_url( $ebook ); ?>" alt="Capa do e-book Protocolo de controle da Ansiedade" loading="eager" />
		</div>
	</div>
</section>

<!-- ============ PROBLEMA ============ -->
<section class="section">
	<div class="container section-narrow">
		<h2 style="text-align:center;">Quando a crise vem, você não precisa "ser forte". Você precisa de <span class="text-gradient-gold">direção</span>.</h2>
		<p style="margin-top:2rem; font-size:1.1rem; color: var(--muted-foreground);">
			Se você já passou por uma crise de ansiedade, você sabe como é:
		</p>
		<ul class="list-clean">
			<li><span class="icon">♥</span><span>O corpo entra em alerta (coração acelerado, aperto no peito, tremor, falta de ar).</span></li>
			<li><span class="icon">✦</span><span>A mente dispara (pensamentos catastróficos, medo de perder o controle, sensação de perigo).</span></li>
			<li><span class="icon">✧</span><span>E quanto mais você tenta "se acalmar", pior parece ficar…</span></li>
		</ul>
		<p style="margin-top:2rem; font-size:1.1rem;">
			O problema não é falta de força. <strong>É falta de um plano simples para seguir</strong> — mesmo quando sua cabeça está em caos.
		</p>
	</div>
</section>

<!-- ============ O QUE É ============ -->
<section class="section section-muted">
	<div class="container">
		<span class="section-eyebrow">O método</span>
		<h2 class="section-title">O que é o Protocolo de controle da Ansiedade</h2>
		<p class="section-intro">
			Um guia prático com <strong>7 técnicas</strong>, organizadas em um passo a passo, para você:
		</p>
		<ul class="list-clean" style="max-width:680px; margin-left:auto; margin-right:auto;">
			<li><span class="icon">✓</span><span>Controlar a crise no momento em que ela surge</span></li>
			<li><span class="icon">✓</span><span>Interromper o ciclo de pensamentos que alimenta a ansiedade</span></li>
			<li><span class="icon">✓</span><span>Entender seus gatilhos com clareza</span></li>
			<li><span class="icon">✓</span><span>Criar autonomia emocional para reduzir a frequência das crises</span></li>
			<li><span class="icon">✓</span><span>Viver com mais leveza, segurança interna e conexão espiritual</span></li>
		</ul>
		<p style="text-align:center; max-width:640px; margin:2.5rem auto 0; color: var(--muted-foreground);">
			Você não vai encontrar aqui "textão motivacional" ou teoria que você não consegue aplicar.
			É um método para usar <strong style="color: var(--foreground);">na vida real</strong>, nos dias difíceis, quando você mais precisa.
		</p>
	</div>
</section>

<!-- ============ PARA QUEM É ============ -->
<section class="section">
	<div class="container">
		<h2 class="section-title">Para quem é (e para quem não é)</h2>
		<div class="two-col">
			<div class="card">
				<h3>É para você se…</h3>
				<ul>
					<li>Sente que a ansiedade aparece "do nada" e te derruba</li>
					<li>Tem medo de ter crise em público, no trabalho, no trânsito, em casa</li>
					<li>Quer algo prático, que você consiga aplicar mesmo com a mente acelerada</li>
					<li>Quer parar de depender de terceiros para se acalmar</li>
					<li>Busca um caminho que inclua equilíbrio emocional + espiritualidade (de forma simples)</li>
				</ul>
			</div>
			<div class="card card-danger">
				<h3>Não é para você se…</h3>
				<ul>
					<li>Você procura promessas milagrosas ou "cura instantânea"</li>
					<li>Você quer terceirizar sua melhora sem colocar nada em prática</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ============ ENTREGÁVEIS ============ -->
<section class="section section-muted">
	<div class="container">
		<span class="section-eyebrow">Entregáveis</span>
		<h2 class="section-title">O que você recebe ao entrar</h2>
		<div class="cards-grid">
			<div class="feature-card">
				<div class="feature-icon">📖</div>
				<h3>E-book — Protocolo de controle da Ansiedade</h3>
				<p>Um caminho estruturado que guia você da confusão emocional ao controle interno. Um "mapa" para seguir quando a ansiedade tentar assumir o comando.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">✓</div>
				<h3>Checklists e Guias Rápidos</h3>
				<p>O que fazer durante uma crise (passo a passo direto) e a rotina diária anti-ansiedade. Quando a crise vier, você não vai precisar "pensar". Você só vai seguir.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">💬</div>
				<h3>Scripts e Prompts Mentais</h3>
				<p>Frases para interromper pensamentos negativos, comandos mentais de controle emocional e exercícios auto-guiados para retomar o eixo.</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ BÔNUS ============ -->
<section class="section">
	<div class="container" style="max-width: 1000px;">
		<div style="text-align:center;">
			<span class="tag-pill">🎁 Bônus exclusivos</span>
			<h2 style="margin-top:1rem;">Para acelerar seus resultados</h2>
		</div>
		<div class="two-col">
			<div class="bonus-card">
				<span class="bonus-tag">Bônus 1</span>
				<div class="feature-icon">⚡</div>
				<h3>Checklist: Identificação Rápida de Gatilhos</h3>
				<p style="color: var(--muted-foreground);">Reconheça em poucos minutos o que está gerando sua ansiedade. Saia do modo automático e enxergue o padrão por trás das crises.</p>
			</div>
			<div class="bonus-card">
				<span class="bonus-tag">Bônus 2</span>
				<div class="feature-icon">🌸</div>
				<h3>Guia: O Poder dos Florais</h3>
				<p style="color: var(--muted-foreground);">Como os florais atuam no estado emocional, qual usar para cada tipo de ansiedade, receitas para momentos de tensão e combinações para um cuidado contínuo.</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ TRANSFORMAÇÃO ============ -->
<section class="section">
	<div class="container" style="max-width: 1000px;">
		<h2 class="section-title">O que muda quando você aplica o protocolo</h2>
		<p class="section-intro">Você não está comprando "um e-book". Você está adquirindo:</p>
		<div class="trans-grid">
			<div class="trans-item"><div class="feature-icon">🧠</div><span>Controle emocional</span></div>
			<div class="trans-item"><div class="feature-icon">♥</div><span>Mais qualidade nos relacionamentos</span></div>
			<div class="trans-item"><div class="feature-icon">✦</div><span>Clareza mental no dia a dia</span></div>
			<div class="trans-item"><div class="feature-icon">🧭</div><span>Mais leveza e segurança interna</span></div>
			<div class="trans-item"><div class="feature-icon">🌸</div><span>Conexão espiritual sem complicar</span></div>
			<div class="trans-item"><div class="feature-icon">🛡</div><span>Liberdade de não viver refém da ansiedade</span></div>
		</div>
	</div>
</section>

<!-- ============ CTA / OFERTA ============ -->
<section id="cta" class="cta-section">
	<div class="container">
		<div class="cta-card">
			<span class="tag-pill">Acesso imediato</span>
			<h2 style="margin-top:1.25rem;">Comece sua jornada para o <span class="text-gradient-gold">controle interno</span></h2>

			<div class="price" style="margin-top:2rem;"><?php echo esc_html( $price ); ?></div>
			<p class="price-note">à vista ou parcelado</p>

			<div class="access-info">
				📥 Download disponível por 1 ano na plataforma. Após baixar, o material é seu para sempre.
			</div>

			<div style="margin-top: 2rem;">
				<a href="<?php echo esc_url( $checkout ); ?>" class="btn btn-gold btn-lg" style="width:100%; max-width:420px;">
					Quero o Protocolo por <?php echo esc_html( $price ); ?>
				</a>
			</div>

			<div class="trust-row">
				<span>🛡 Garantia 7 dias</span>
				<span>⏱ Acesso imediato</span>
				<span>✓ Pagamento seguro</span>
			</div>

			<div class="guarantee">
				<h3>🔐 Garantia incondicional de 7 dias</h3>
				<p>
					Você tem 7 dias para acessar o conteúdo e ver se faz sentido pra você.
					Se não fizer, é só pedir reembolso. <strong style="color: var(--foreground);">Sem perguntas. Sem risco.</strong>
				</p>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
