import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  CheckCircle2,
  XCircle,
  BookOpen,
  ListChecks,
  MessageSquareQuote,
  Zap,
  Flower2,
  ShieldCheck,
  Clock,
  Star,
  Sparkles,
  HeartPulse,
  Brain,
  Compass,
} from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Protocolo de Controle da Ansiedade — 7 práticas para 7 ansiedades" },
      {
        name: "description",
        content:
          "Guia prático com 7 técnicas para controlar a crise no momento em que ela surge. Sem depender de ninguém. Acesso imediato por R$ 47.",
      },
      { property: "og:title", content: "Protocolo de Controle da Ansiedade" },
      {
        property: "og:description",
        content: "7 práticas para cada uma das 7 principais ansiedades. Reencontre sua serenidade.",
      },
    ],
  }),
});

const forYou = [
  "Sente que a ansiedade aparece “do nada” e te derruba",
  "Tem medo de ter crise em público, no trabalho, no trânsito, em casa",
  "Quer algo prático, que você consiga aplicar mesmo com a mente acelerada",
  "Quer parar de depender de terceiros para se acalmar",
  "Busca um caminho que inclua equilíbrio emocional + espiritualidade (de forma simples)",
];

const notForYou = [
  "Você procura promessas milagrosas ou “cura instantânea”",
  "Você quer terceirizar sua melhora sem colocar nada em prática",
];

const benefits = [
  "Controlar a crise no momento em que ela surge",
  "Interromper o ciclo de pensamentos que alimenta a ansiedade",
  "Entender seus gatilhos com clareza",
  "Criar autonomia emocional para reduzir a frequência das crises",
  "Viver com mais leveza, segurança interna e conexão espiritual",
];

const deliverables = [
  {
    icon: BookOpen,
    title: "E-book — Protocolo de controle da Ansiedade",
    desc: "Um caminho estruturado que guia você da confusão emocional ao controle interno. Um “mapa” para seguir quando a ansiedade tentar assumir o comando.",
  },
  {
    icon: ListChecks,
    title: "Checklists e Guias Rápidos",
    desc: "O que fazer durante uma crise (passo a passo direto) e a rotina diária anti-ansiedade. Quando a crise vier, você não vai precisar “pensar”. Você só vai seguir.",
  },
  {
    icon: MessageSquareQuote,
    title: "Scripts e Prompts Mentais",
    desc: "Frases para interromper pensamentos negativos, comandos mentais de controle emocional e exercícios auto-guiados para retomar o eixo.",
  },
];

const bonuses = [
  {
    icon: Zap,
    tag: "Bônus 1",
    title: "Checklist: Identificação Rápida de Gatilhos",
    desc: "Reconheça em poucos minutos o que está gerando sua ansiedade. Saia do modo automático e enxergue o padrão por trás das crises.",
  },
  {
    icon: Flower2,
    tag: "Bônus 2",
    title: "Guia: O Poder dos Florais",
    desc: "Como os florais atuam no estado emocional, qual usar para cada tipo de ansiedade, receitas para momentos de tensão e combinações para um cuidado contínuo.",
  },
];

const transformations = [
  { icon: Brain, text: "Controle emocional" },
  { icon: HeartPulse, text: "Mais qualidade nos relacionamentos" },
  { icon: Sparkles, text: "Clareza mental no dia a dia" },
  { icon: Compass, text: "Mais leveza e segurança interna" },
  { icon: Flower2, text: "Conexão espiritual sem complicar" },
  { icon: ShieldCheck, text: "Liberdade de não viver refém da ansiedade" },
];

function Index() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Você está na lista! Verifique seu e-mail em instantes.");
    setEmail("");
  };

  const CHECKOUT_URL = "https://pay.kiwify.com.br/TE1COlz";
  const goToCheckout = () => {
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" />

      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Protocolo de controle da{" "}
              <span className="text-gradient-gold italic">Ansiedade</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/80 md:text-xl">
              <strong>7 práticas</strong> para cada uma das <strong>7 principais ansiedades</strong>.
            </p>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Sem depender de outra pessoa. Sem se sentir refém da própria mente. Com um passo a passo
              simples e prático para usar no exato momento em que a crise aparece.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={goToCheckout} className="h-12 px-8 text-base shadow-[var(--shadow-gold)]">
                Quero acessar o método agora
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <span>Avaliado por leitores</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[var(--gold)]/20 blur-3xl md:h-96 md:w-96" />
            <img
              src={ebookCover}
              alt="Capa do e-book Protocolo de controle da Ansiedade"
              width={1024}
              height={1024}
              className="relative w-full max-w-md animate-float drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.25))" }}
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-center text-3xl md:text-5xl">
            Quando a crise vem, você não precisa “ser forte”. Você precisa de{" "}
            <span className="text-gradient-gold italic">direção</span>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Se você já passou por uma crise de ansiedade, você sabe como é:
          </p>
          <ul className="mt-6 space-y-4 text-foreground/90">
            <li className="flex gap-3">
              <HeartPulse className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span>O corpo entra em alerta (coração acelerado, aperto no peito, tremor, falta de ar).</span>
            </li>
            <li className="flex gap-3">
              <Brain className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span>A mente dispara (pensamentos catastróficos, medo de perder o controle, sensação de perigo).</span>
            </li>
            <li className="flex gap-3">
              <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span>E quanto mais você tenta “se acalmar”, pior parece ficar…</span>
            </li>
          </ul>
          <p className="mt-8 text-lg text-foreground">
            O problema não é falta de força.{" "}
            <strong>É falta de um plano simples para seguir</strong> — mesmo quando sua cabeça está em caos.
          </p>
        </div>
      </section>

      {/* O QUE É */}
      <section className="bg-secondary/40 px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">O método</span>
            <h2 className="mt-3 text-3xl md:text-5xl">
              O que é o Protocolo de controle da Ansiedade
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Um guia prático com <strong className="text-foreground">7 técnicas</strong>, organizadas em
              um passo a passo, para você:
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-2xl gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
            Você não vai encontrar aqui “textão motivacional” ou teoria que você não consegue aplicar.
            É um método para usar <strong className="text-foreground">na vida real</strong>, nos dias
            difíceis, quando você mais precisa.
          </p>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-3xl md:text-5xl">Para quem é (e para quem não é)</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl text-primary">É para você se…</h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-destructive/20 bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl text-destructive">Não é para você se…</h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="bg-secondary/40 px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Entregáveis</span>
            <h2 className="mt-3 text-3xl md:text-5xl">O que você recebe ao entrar</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="group border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--gold-foreground)]">
              🎁 Bônus exclusivos
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl">Para acelerar seus resultados</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {bonuses.map(({ icon: Icon, tag, title, desc }) => (
              <Card
                key={title}
                className="relative overflow-hidden border-2 border-[var(--gold)]/30 bg-card p-8 shadow-[var(--shadow-gold)]"
              >
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-br from-[var(--gold)] to-[oklch(0.72_0.15_70)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--gold-foreground)]">
                  {tag}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[oklch(0.72_0.15_70)] text-[var(--gold-foreground)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl">
              O que muda quando você aplica o protocolo
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Você não está comprando “um e-book”. Você está adquirindo:
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map(({ icon: Icon, text }) => (
              <Card
                key={text}
                className="flex items-center gap-4 border-border/60 bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground">{text}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / OFERTA */}
      <section id="cta" className="bg-hero-gradient px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl">
          <Card className="overflow-hidden border-2 border-[var(--gold)]/30 bg-card p-10 shadow-[var(--shadow-elegant)] md:p-14">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[var(--gold)]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--gold-foreground)]">
                Acesso imediato
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl">
                Comece sua jornada para o{" "}
                <span className="text-gradient-gold italic">controle interno</span>
              </h2>

              <div className="mt-8 flex items-baseline justify-center gap-3">
                <span className="text-6xl font-bold text-primary">R$ 47</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">à vista ou parcelado</p>

              <div className="mx-auto mt-6 max-w-md rounded-xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
                📥 Download disponível por 1 ano na plataforma. Após baixar, o material é seu para sempre.
              </div>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
                <Button onClick={goToCheckout} size="lg" className="h-12 text-base shadow-[var(--shadow-gold)]">
                  Quero o Protocolo por R$ 47
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" /> Acesso imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Pagamento seguro
                </span>
              </div>

              {/* GARANTIA */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-secondary/30 p-6 text-left">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <h3 className="text-xl">🔐 Garantia incondicional de 7 dias</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Você tem 7 dias para acessar o conteúdo e ver se faz sentido pra você. Se não fizer,
                  é só pedir reembolso. <strong className="text-foreground">Sem perguntas. Sem risco.</strong>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-6 py-10">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p className="font-serif text-lg text-foreground">Protocolo de controle da Ansiedade</p>
          <p className="mt-2">© {new Date().getFullYear()} · Todos os direitos reservados</p>
        </div>
      </footer>
    </main>
  );
}
