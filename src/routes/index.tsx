import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircle2, Brain, Heart, Users, Briefcase, Moon, Sparkles, Activity, BookOpen, Clock, ShieldCheck, Star } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Protocolo de Controle da Ansiedade — E-book" },
      { name: "description", content: "Descubra 7 práticas comprovadas para cada uma das 7 principais ansiedades. Um protocolo passo a passo para reencontrar a calma." },
      { property: "og:title", content: "Protocolo de Controle da Ansiedade" },
      { property: "og:description", content: "7 práticas para cada uma das 7 principais ansiedades. Reencontre sua serenidade." },
    ],
  }),
});

const anxieties = [
  { icon: Brain, title: "Ansiedade Generalizada", desc: "A preocupação constante que rouba seu presente." },
  { icon: Users, title: "Ansiedade Social", desc: "O medo de julgamento que isola e paralisa." },
  { icon: Briefcase, title: "Ansiedade de Performance", desc: "A pressão de sempre ter que entregar mais." },
  { icon: Heart, title: "Ansiedade Antecipatória", desc: "O futuro imaginado que assombra o agora." },
  { icon: Moon, title: "Ansiedade Noturna", desc: "Os pensamentos que invadem sua hora de descanso." },
  { icon: Activity, title: "Ansiedade Somática", desc: "Quando o corpo grita o que a mente cala." },
  { icon: Sparkles, title: "Ansiedade Existencial", desc: "As grandes perguntas que tiram o seu chão." },
];

const benefits = [
  "49 práticas testadas e fáceis de aplicar no dia a dia",
  "Protocolo específico para cada tipo de ansiedade",
  "Técnicas baseadas em neurociência e terapias contemporâneas",
  "Exercícios de 5 minutos para crises agudas",
  "Linguagem acessível, sem jargões clínicos",
  "Diário de acompanhamento incluso",
];

function Index() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Você está na lista! Verifique seu e-mail em instantes.");
    setEmail("");
  };

  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> E-book Exclusivo
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Protocolo de Controle da{" "}
              <span className="text-gradient-gold italic">Ansiedade</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              <strong className="text-foreground">7 práticas</strong> para cada uma das{" "}
              <strong className="text-foreground">7 principais ansiedades</strong>. Um caminho claro
              para silenciar o ruído interno e reencontrar sua serenidade.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={scrollToCta} className="h-12 px-8 text-base shadow-[var(--shadow-gold)]">
                Quero meu exemplar
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToCta} className="h-12 px-8 text-base">
                Ver o que está dentro
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <span>+2.000 leitores</span>
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
              alt="Capa do e-book Protocolo de Controle da Ansiedade"
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
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl">Você reconhece estes sinais?</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            O coração acelera sem motivo. Os pensamentos giram em loop. O sono não vem,
            ou vem cheio de inquietação. Tarefas simples parecem montanhas. Você não está
            sozinho — e <strong className="text-foreground">existe um caminho de volta para a calma</strong>.
          </p>
        </div>
      </section>

      {/* AS 7 ANSIEDADES */}
      <section className="bg-secondary/40 px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">O Protocolo</span>
            <h2 className="mt-3 text-3xl md:text-5xl">As 7 ansiedades que tratamos</h2>
            <p className="mt-5 text-muted-foreground">
              Cada tipo de ansiedade tem origens, gatilhos e respostas específicas. Por isso, cada uma
              recebe um conjunto único de 7 práticas no e-book.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {anxieties.map(({ icon: Icon, title, desc }, i) => (
              <Card
                key={title}
                className="group border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gold">
                  0{i + 1}
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center border-2 border-dashed border-primary/30 bg-transparent p-7 text-center">
              <div className="text-5xl text-gradient-gold">7×7</div>
              <p className="mt-2 text-sm font-medium text-foreground">49 práticas</p>
              <p className="text-xs text-muted-foreground">protocolos completos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-secondary to-accent/50 blur-2xl" />
            <img
              src={ebookCover}
              alt="E-book aberto"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative mx-auto w-full max-w-sm rotate-3 drop-shadow-xl"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">O que você leva</span>
            <h2 className="mt-3 text-3xl md:text-5xl">Tudo o que está dentro</h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-6 rounded-2xl border border-border bg-card p-5">
              <BookOpen className="h-10 w-10 text-primary" />
              <div>
                <p className="font-semibold text-foreground">+ 180 páginas</p>
                <p className="text-sm text-muted-foreground">PDF + ePub para qualquer dispositivo</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> Acesso imediato
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE / DEPOIMENTOS */}
      <section className="bg-primary px-6 py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl">Quem já encontrou a calma</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Mariana S.", role: "Professora", text: "Em duas semanas, minhas crises noturnas diminuíram drasticamente. As práticas são simples e funcionam." },
              { name: "Rafael L.", role: "Engenheiro", text: "Finalmente entendi que tenho mais de um tipo de ansiedade. Os protocolos específicos mudaram tudo." },
              { name: "Camila P.", role: "Psicóloga", text: "Recomendo aos meus pacientes como material complementar. Linguagem clara e técnicas bem fundamentadas." },
            ].map((t) => (
              <Card key={t.name} className="border-white/10 bg-white/5 p-6 text-primary-foreground backdrop-blur">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed opacity-90">"{t.text}"</p>
                <p className="mt-5 text-sm font-semibold">{t.name}</p>
                <p className="text-xs opacity-70">{t.role}</p>
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
                Oferta de Lançamento
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl">
                Comece sua jornada para a <span className="text-gradient-gold italic">calma</span>
              </h2>
              <div className="mt-8 flex items-baseline justify-center gap-3">
                <span className="text-lg text-muted-foreground line-through">R$ 97</span>
                <span className="text-6xl font-bold text-primary">R$ 27</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">pagamento único · acesso vitalício</p>

              <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3">
                <Input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                />
                <Button type="submit" size="lg" className="h-12 text-base shadow-[var(--shadow-gold)]">
                  Quero o e-book agora
                </Button>
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Acesso imediato</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Pagamento seguro</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-center text-3xl md:text-5xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-12">
            {[
              { q: "Esse e-book substitui terapia?", a: "Não. O Protocolo é um material complementar, educativo e prático. Casos clínicos sempre devem ser acompanhados por um profissional de saúde mental." },
              { q: "Em quanto tempo verei resultados?", a: "Muitos leitores relatam alívio nas primeiras semanas, especialmente com as técnicas para crises agudas. A consistência é o que transforma." },
              { q: "Como recebo o e-book?", a: "Após a confirmação do pagamento, o link de download chega no seu e-mail em até 5 minutos. Você terá acesso vitalício." },
              { q: "Funciona para qualquer idade?", a: "O conteúdo é indicado a partir dos 16 anos. As práticas são seguras e adaptáveis a diferentes contextos de vida." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do valor, sem perguntas." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-6 py-10">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p className="font-serif text-lg text-foreground">Protocolo de Controle da Ansiedade</p>
          <p className="mt-2">© {new Date().getFullYear()} · Todos os direitos reservados</p>
        </div>
      </footer>
    </main>
  );
}
