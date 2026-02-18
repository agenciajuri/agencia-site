"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import NumberTicker from "@/components/ui/number-ticker";

export function SocialProof() {
    return (
        <section className="py-24 border-y border-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-6">
                            Por que escritórios consolidados nos escolhem?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Fugimos do &quot;marketing de promessas&quot;. Nossa abordagem é baseada em dados, processos claros e respeito absoluto às normas da OAB.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Especialistas em OAB e LGPD",
                                "Foco em custo real por agendamento (não só clique)",
                                "Relatórios de Business Intelligence",
                                "Atendimento consultivo (não operacional)"
                            ].map((item) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-primary font-medium"
                                >
                                    <CheckCircle2 className="text-accent h-5 w-5" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-[400px] bg-secondary/50 border border-border p-8 flex items-center justify-center">
                        {/* Placeholder for abstract visualization or stats */}
                        <div className="text-center">
                            <span className="block text-7xl font-display font-bold text-primary mb-2">
                                <NumberTicker value={40} suffix="%" prefix="+" className="text-primary" />
                            </span>
                            <span className="uppercase tracking-widest text-sm text-muted-foreground">
                                Média de aumento em agendamentos qualificados
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
