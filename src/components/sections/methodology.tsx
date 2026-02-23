"use client";

import { motion } from "framer-motion";
import { Target, Filter, BarChart3 } from "lucide-react";

export function Methodology() {
    return (
        <section className="py-24 bg-primary text-secondary">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-20 relative">
                    {/* Compliance OAB Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="absolute -top-10 md:-top-16 -right-4 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-background rounded-full border-4 border-accent flex flex-col items-center justify-center shadow-2xl rotate-12 z-20"
                    >
                        <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">Protocolo</span>
                        <span className="text-sm md:text-base font-display text-primary uppercase font-bold text-center leading-tight">Ética<br />Garantida</span>
                        <span className="text-[8px] md:text-[10px] bg-accent text-white px-2 py-0.5 rounded-full mt-1">Prov. 205</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        O Nosso Método Juri
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-6 mt-4">
                        A solução: Simples e Direta
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-secondary/10 z-0" />

                    {[
                        {
                            step: "01",
                            icon: Target,
                            title: "Atração Ética",
                            desc: "Criamos anúncios que respeitam a OAB e atraem quem realmente precisa de um advogado no momento exato da busca."
                        },
                        {
                            step: "02",
                            icon: Filter,
                            title: "Triagem Automática",
                            desc: "Filtramos curiosos para que você ou sua equipe recebam apenas casos reais e qualificados diretamente no WhatsApp."
                        },
                        {
                            step: "03",
                            icon: BarChart3,
                            title: "Acompanhamento Claro",
                            desc: "Você recebe relatórios simples que mostram quanto investiu, quantos agendamentos teve e qual o retorno real gerado."
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 bg-primary border border-secondary/20 rounded-full flex flex-col items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-xs font-bold text-accent mb-1 uppercase tracking-widest">{step.step}</span>
                                <step.icon className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-display uppercase tracking-wide mb-3">
                                {step.title}
                            </h3>
                            <p className="text-secondary/70 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
