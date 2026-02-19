import type { Metadata } from "next";
import { ArrowRight, Check, Users, Building, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Serviços | Agência Juri — Estrutura para Advocacia",
    description: "Tráfego, landing pages, WhatsApp organizado e mensuração. Fluxo adaptado para autônomos, pequenos escritórios e boutiques.",
};

const PACKAGES = [
    {
        title: "Essencial",
        price: "R$ 997/mês",
        target: "Autônomo ou início de carreira",
        icon: Users,
        description: "Ideal para quem quer o primeiro cliente pago em 30-45 dias.",
        features: [
            "Diagnóstico Comercial",
            "1 Página Exclusiva de Apresentação",
            "WhatsApp Profissional Configurado",
            "Anúncios Direcionados (Google/Meta)",
            "Relatório Quinzenal"
        ],
        cta: "Selecionar Plano",
        highlight: false
    },
    {
        title: "Crescimento",
        price: "R$ 1.797/mês",
        target: "Pequeno escritório (2-5 advogados)",
        icon: Building,
        description: "Para escritórios que precisam organizar o fluxo de entrada.",
        features: [
            "Estratégia por Área de Atuação",
            "2 Páginas Exclusivas de Apresentação",
            "Funil Completo de Triagem",
            "Mensuração Avançada (UTMs)",
            "Governança Semanal"
        ],
        cta: "Selecionar Plano",
        highlight: true
    },
    {
        title: "Escala",
        price: "R$ 2.597/mês",
        target: "Boutique ou Consolidado",
        icon: Building2,
        description: "Dominar a região e escalar operação comercial.",
        features: [
            "Site Institucional Completo",
            "SEO Local Otimizado",
            "Funis por Unidade/Sócio",
            "Dashboards de BI em Tempo Real",
            "Consultoria Compliance Contínua"
        ],
        cta: "Selecionar Plano",
        highlight: false
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Header Section */}
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                    Nossos Serviços
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Entregamos estrutura comercial completa, adaptada ao tamanho e maturidade do seu escritório.
                </p>
            </section>

            {/* Packages Section */}
            <section className="py-16 border-t border-border">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PACKAGES.map((pkg) => (
                            <div
                                key={pkg.title}
                                className={`relative flex flex-col p-8 border ${pkg.highlight
                                    ? "border-accent bg-accent/5"
                                    : "border-border bg-card"
                                    }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                        Mais Escolhido
                                    </div>
                                )}

                                <div className="mb-6">
                                    <pkg.icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-2xl font-display uppercase tracking-wide mb-1">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                                        {pkg.target}
                                    </p>
                                    <p className="text-2xl font-bold text-foreground mb-4">
                                        {pkg.price}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                                        {pkg.description}
                                    </p>
                                </div>

                                <ul className="flex-1 space-y-4 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                            <span className="text-primary/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={pkg.highlight ? "default" : "outline"}
                                    className="w-full"
                                    asChild
                                >
                                    <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                        {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Snippet */}
            <section className="py-24 bg-primary text-secondary">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-8">
                        O que está incluso em todos os planos?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
                        <div className="p-6 border border-white/10">
                            <h3 className="font-bold uppercase tracking-wide mb-2">Compliance OAB</h3>
                            <p className="text-sm text-secondary/70">Todas as peças e páginas revisadas para não ferir o código de ética.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <h3 className="font-bold uppercase tracking-wide mb-2">Mensuração Real</h3>
                            <p className="text-sm text-secondary/70">Relatórios que mostram leads, agendamentos e custo real, não apenas &quot;cliques&quot;.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <h3 className="font-bold uppercase tracking-wide mb-2">Suporte Próximo</h3>
                            <p className="text-sm text-secondary/70">Contato direto com quem cuida da sua conta. Sem chamados infinitos.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <h3 className="font-bold uppercase tracking-wide mb-2">Propriedade Intelectual</h3>
                            <p className="text-sm text-secondary/70">Tudo o que criamos (sites, contas, pixels) é seu. Sem fidelidade forçada.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
