"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
    {
        name: "Essencial",
        price: "R$ 997",
        period: "/mês",
        persona: "1º Fluxo de Clientes",
        features: [
            "Diagnóstico de Atuação",
            "1 Página Exclusiva de Apresentação",
            "WhatsApp Profissional Configurado",
            "Anúncios Direcionados (Google/Meta)",
            "Relatório Quinzenal de Contatos"
        ],
        idealFor: "Para o advogado autônomo que precisa do primeiro fluxo de clientes pagos."
    },
    {
        name: "Crescimento",
        price: "R$ 1.797",
        period: "/mês",
        persona: "Volume Constante",
        features: [
            "Estratégia por Área de Atuação",
            "2 Páginas Exclusivas de Apresentação",
            "Funil Completo de Triagem Automática",
            "Rastreamento de Interesse Real",
            "Reunião de Acompanhamento Semanal"
        ],
        idealFor: "Para escritórios que já têm equipe e precisam de volume constante.",
        featured: true
    },
    {
        name: "Escala",
        price: "R$ 2.597",
        period: "/mês",
        persona: "Autoridade Máxima",
        features: [
            "Site Institucional Completo",
            "SEO Local Otimizado",
            "Funis por Unidade ou Sócio",
            "Painel de Controle de Resultados",
            "Consultoria Compliance Contínua"
        ],
        idealFor: "Para quem quer dominar sua região e ser autoridade máxima na área."
    }
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-secondary/30" id="planos">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-4">
                            Planos com foco em resultados
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Escolha o plano que combina com o porte do seu escritório. Tudo com compliance OAB e mensuração real de agendamentos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group relative flex flex-col p-8 rounded-lg border transition-all duration-300",
                                plan.featured
                                    ? "bg-background border-accent/50 shadow-lg ring-1 ring-accent/20"
                                    : "bg-background/50 border-border hover:border-primary/30"
                            )}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-0 -mt-3 mr-4 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                                    Mais Escolhido
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-display uppercase tracking-wide mb-1 text-primary">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                                    {plan.persona}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="mb-8 space-y-3 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className="text-xs text-muted-foreground mb-4 italic border-t pt-4">
                                    {plan.idealFor}
                                </p>
                                <Button
                                    variant={plan.featured ? "default" : "outline"}
                                    className="w-full group"
                                    asChild
                                >
                                    <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                        Selecionar Plano
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
