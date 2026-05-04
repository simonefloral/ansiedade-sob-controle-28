=== Protocolo Ansiedade — Tema WordPress ===

Tema de landing page (uma página) para o e-book
"Protocolo de Controle da Ansiedade — 7 práticas para cada uma das 7 principais ansiedades".

== Como instalar ==

1. Coloque todos os arquivos dentro de uma pasta chamada:
       protocolo-ansiedade
2. Compacte essa pasta em um .zip:
       protocolo-ansiedade.zip
3. No WordPress: Aparência → Temas → Adicionar Novo → Enviar Tema → selecione o .zip → Instalar → Ativar.
4. Vá em Configurações → Leitura → "A página inicial exibe" → "Sua página inicial mais recente"
   (a landing usa automaticamente o template `front-page.php`).

== Personalização ==

Aparência → Personalizar → "Oferta / Checkout":
- URL do Checkout (Hotmart, Kiwify, etc.)
- Preço exibido (ex.: R$ 47)
- Imagem da capa do e-book

Aparência → Personalizar → Identidade do Site:
- Logo e nome do site

== Imagem da capa ==

Para a imagem padrão funcionar, crie a pasta `assets/` dentro do tema e
salve sua capa como `assets/ebook-cover.jpg`. OU defina uma imagem direto
pelo Personalizador (recomendado).

== Arquivos ==

- style.css        → Cabeçalho do tema + todos os estilos
- functions.php    → Setup do tema, fontes, customizer
- header.php       → Cabeçalho HTML + topo do site
- footer.php       → Rodapé
- front-page.php   → A landing page completa
- index.php        → Fallback
- page.php         → Páginas internas (sobre, política, etc.)

== Créditos ==

Fontes: Playfair Display + Inter (Google Fonts).
Sem dependências de plugins.
