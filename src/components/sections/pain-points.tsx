"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ThumbsDown, Clock } from "lucide-react";

export function PainPoints() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 rounded-full text-xs font-bold tracking-widest text-primary uppercase mb-6"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        A realidade
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-6">
                        Por que a maioria dos advogados falha no marketing?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: ThumbsDown,
                            title: "Falta de tempo para postar vira desculpa",
                            desc: "Você estudou para ser advogado, não social media. Nós assumimos a operação e você foca em advogar."
                        },
                        {
                            icon: AlertTriangle,
                            title: "Medo de punições e processos da OAB",
                            desc: "O marketing jurídico é uma faca de dois gumes. Nós cuidamos do compliance para você dormir tranquilo."
                        },
                        {
                            icon: Clock,
                            title: "Agências prometem \"likes\", não contratos",
                            desc: "Você precisa de agendamentos e contratos assinados, não de métricas de vaidade que não pagam as contas."
                        }
                    ].map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-secondary/30 border border-border p-8 rounded-lg hover:border-primary/30 transition-colors flex flex-col items-start"
                        >
                            <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-6">
                                <point.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-display uppercase tracking-wide mb-3">
                                {point.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
