import type { Metadata } from "next";
import { ArrowRight, Building, Building2, Check, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Serviços | Agência Juri — Estrutura de Captação para Advocacia",
    description:
        "Planos adaptados ao tamanho do seu escritório. WhatsApp profissional, anúncios direcionados e acompanhamento quinzenal.",
};

const PACKAGES = [
    {
        title: "Primeiro Fluxo",
        target: "Advogado autônomo ou início de carreira",
        icon: Users,
        description:
            "Para quem precisa dos primeiros clientes vindos do digital, com estrutura simples e segura.",
        features: [
            "Diagnóstico da sua atuação e região",
            "Página profissional do seu escritório",
            "WhatsApp organizado com atendimento automático",
            "Anúncios direcionados para sua cidade",
            "Relatório quinzenal com resultados reais"
        ],
        cta: "Solicitar Diagnóstico Gratuito",
        highlight: false
    },
    {
        title: "Fluxo Constante",
        target: "Escritório com 2 a 5 advogados",
        icon: Building,
        description:
            "Para quem já tem equipe e precisa de um volume previsível de novos contatos qualificados.",
        features: [
            "Estratégia separada por área de atuação",
            "Duas páginas profissionais do escritório",
            "Qualificação automática de quem entra em contato",
            "Painel de resultados com dados reais",
            "Reunião semanal de acompanhamento"
        ],
        cta: "Solicitar Diagnóstico Gratuito",
        highlight: true
    },
    {
        title: "Operação Completa",
        target: "Escritório consolidado ou boutique",
        icon: Building2,
        description:
            "Para quem quer dominar sua região e ter controle total da captação.",
        features: [
            "Site institucional completo e otimizado",
            "Posicionamento no Google para sua cidade",
            "Processos separados por sócio ou unidade",
            "Painel de resultados em tempo real",
            "Consultoria contínua de compliance OAB"
        ],
        cta: "Solicitar Diagnóstico Gratuito",
        highlight: false
    }
];

const INCLUDED_ITEMS = [
    {
        title: "Dentro das normas da OAB",
        description:
            "Toda comunicação revisada para estar de acordo com o Provimento 205/2021. Sem risco para seu registro."
    },
    {
        title: "Números que importam",
        description:
            "Relatórios que mostram contatos recebidos, agendamentos e custo real — não apenas cliques ou curtidas."
    },
    {
        title: "Contato direto",
        description:
            "Você fala com quem cuida da sua conta. Sem fila de atendimento, sem chamado que some."
    },
    {
        title: "Tudo é seu",
        description:
            "Sites, contas, acessos — tudo o que criamos pertence ao seu escritório. Sem fidelidade forçada."
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="container px-4 pb-16 pt-32 md:px-6">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-display uppercase tracking-tight text-primary md:text-7xl">
                        O que fazemos pelo seu escritório
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                        Montamos o processo que traz novos clientes, organiza o atendimento e gera agendamentos — tudo dentro das regras da OAB.
                    </p>
                </div>
            </section>

            <section className="border-t border-border py-16">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {PACKAGES.map((pkg, index) => (
                            <article
                                key={pkg.title}
                                className={`relative flex flex-col border p-8 shadow-[8px_8px_0_rgba(15,23,42,0.06)] ${pkg.highlight
                                    ? "border-accent bg-accent/5"
                                    : "border-border bg-card"
                                    } ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                                        Mais escolhido
                                    </div>
                                )}

                                <div className="mb-6">
                                    <pkg.icon className="mb-4 h-10 w-10 text-primary" />
                                    <h2 className="text-2xl font-display uppercase tracking-wide text-primary">
                                        {pkg.title}
                                    </h2>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">
                                        {pkg.target}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {pkg.description}
                                    </p>
                                </div>

                                <ul className="mb-8 flex-1 space-y-4">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm md:text-base">
                                            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                                            <span className="text-primary/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={pkg.highlight ? "default" : "outline"}
                                    className="min-h-[56px] h-auto w-full py-4 text-xs leading-tight md:text-sm"
                                    asChild
                                >
                                    <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank" rel="noopener noreferrer">
                                        {pkg.cta}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary py-24 text-secondary">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-display uppercase tracking-tight text-secondary md:text-5xl">
                            O que está incluso em todos os planos
                        </h2>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {INCLUDED_ITEMS.map((item) => (
                            <article key={item.title} className="border border-white/10 bg-white/5 p-6">
                                <h3 className="text-xl font-display uppercase tracking-wide text-secondary">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
