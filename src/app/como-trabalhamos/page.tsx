import type { Metadata } from "next";
import { ArrowRight, Search, Layout, MessageSquare, BarChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Como Trabalhamos | Método Agência Juri",
    description: "Entenda nosso processo: Diagnóstico, Estrutura, Execução e Otimização. Crescimento previsível para escritórios.",
};

const STEPS = [
    {
        icon: Search,
        title: "1. Diagnóstico & Setup",
        desc: "Analisamos seu posicionamento atual, definimos as áreas prioritárias e configuramos o ambiente (Pixel de Rastreamento, Analytics, Contas de Anúncio)."
    },
    {
        icon: Layout,
        title: "2. Estrutura de Conversão",
        desc: "Criamos as Landing Pages e definimos os criativos (ads) focados na dor do seu cliente, sempre respeitando a OAB."
    },
    {
        icon: MessageSquare,
        title: "3. Tração & Atendimento",
        desc: "Lançamos as campanhas e estruturamos seu WhatsApp com scripts de pré-atendimento (triagem) para filtrar curiosos."
    },
    {
        icon: BarChart,
        title: "4. Mensuração & Otimização",
        desc: "Análise semanal de dados. Cortamos o que não funciona e escalamos o que traz retorno real (agendamentos)."
    }
];

export default function MethodPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                    O Método
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                    Não acreditamos em sorte. Acreditamos em engenharia de tráfego e processos de vendas bem definidos.
                </p>
                <Button size="lg" asChild>
                    <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
                        Aplicar Método no Meu Escritório <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </section>

            <section className="py-20 border-t border-border bg-secondary/10">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {STEPS.map((step, i) => (
                            <div key={step.title} className="flex flex-col md:flex-row gap-8 items-start relative">
                                {/* Connector Line */}
                                {i !== STEPS.length - 1 && (
                                    <div className="hidden md:block absolute left-8 top-16 bottom-[-32px] w-px bg-border z-0" />
                                )}

                                <div className="flex-shrink-0 z-10 bg-background border border-border p-4 rounded-full">
                                    <step.icon className="w-8 h-8 text-accent" />
                                </div>

                                <div className="pt-2">
                                    <h3 className="text-2xl font-display uppercase tracking-wide mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* New CTA Block */}
                    <div className="mt-20 p-8 md:p-12 bg-primary text-secondary rounded-lg text-center">
                        <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide mb-4 text-secondary">
                            Quer ver exatamente como ficaria no seu escritório?
                        </h3>
                        <p className="text-secondary/80 mb-8 max-w-xl mx-auto">
                            Faça o diagnóstico rápido (60 segundos) e receba uma recomendação personalizada.
                        </p>
                        <Button variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors" asChild>
                            <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                                Fazer Diagnóstico Rápido
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
