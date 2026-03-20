import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Target, BarChart2, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Gestão de Tráfego para Advogados | Agência Juri",
    description: "Campanhas Google Ads e Meta Ads focadas em agendamento qualificado. Chega de curiosos e leads desqualificados.",
};

export default function TrafficPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        <Target className="w-4 h-4" />
                        Aquisição Qualificada
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                        Gestão de Tráfego <br />
                        <span className="text-accent">Que traz clientes, não curiosos</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Para advogados, &quot;clique barato&quot; é prejuízo. Nossa gestão foca em intenção de contratação, com triagem rigorosa e palavras-chave que convertem.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                            Solicitar Análise de Campanha <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Problem/Solution */}
            <section className="py-20 bg-secondary/30 border-y border-border">
                <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6">
                            Por que suas campanhas falham?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Público muito amplo (trazendo gente sem dinheiro)",
                                "Palavras-chave erradas (ex: 'grátis', 'modelo', 'dúvida')",
                                "Landing Page genérica que não passa autoridade",
                                "Falta de negativação de termos curiosos"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-destructive font-bold">✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-card border border-border p-8 shadow-sm">
                        <h3 className="text-xl font-display uppercase tracking-wide mb-4 text-primary">
                            O Método Agência Juri
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <strong className="block text-primary uppercase text-sm tracking-wide">Segmentação por Renda</strong>
                                    <span className="text-sm text-muted-foreground">Filtramos públicos para evitar leads desqualificados.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <strong className="block text-primary uppercase text-sm tracking-wide">Intenção de Busca</strong>
                                    <span className="text-sm text-muted-foreground">Focamos em &quot;advogado inventário gOiânia&quot; e não &quot;como fazer inventário&quot;.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <strong className="block text-primary uppercase text-sm tracking-wide">Google + Meta (Remarketing)</strong>
                                    <span className="text-sm text-muted-foreground">Cercamos o lead: ele te acha no Google e te vê no Instagram.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Niches */}
            <section className="py-20 container px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-12 text-center">
                    Experiência por Área
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Família & Sucessões", desc: "Divórcio, Inventário, Guarda. Foco em urgência e empatia." },
                        { title: "Trabalhista", desc: "Reclamante (bancário/comércio) e Empresarial (preventivo)." },
                        { title: "Previdenciário", desc: "Planejamento, BPC/LOAS e Aposentadorias específicas." },
                        { title: "Cível & Consumidor", desc: "Imobiliário, Contratos e Indenizatórias de alto valor." }
                    ].map((area) => (
                        <div key={area.title} className="p-6 border border-border hover:border-primary/50 transition-colors group">
                            <h3 className="text-lg font-display uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {area.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* New CTA Block */}
                <div className="mt-20 p-8 md:p-12 bg-primary text-secondary rounded-lg text-center">
                    <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide mb-4 text-secondary">
                        Quer ver como esse serviço ficaria no seu escritório?
                    </h3>
                    <p className="text-secondary/80 mb-8 max-w-xl mx-auto">
                        Faça o diagnóstico rápido de 60 segundos e receba recomendação personalizada.
                    </p>
                    <Button variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors" asChild>
                        <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                            Fazer Diagnóstico Rápido
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
