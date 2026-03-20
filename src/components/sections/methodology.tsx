"use client";

import { motion } from "framer-motion";
import { Bot, Layout, Megaphone, LineChart, CalendarCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Methodology() {
    return (
        <section className="py-24 bg-primary text-secondary overflow-hidden">
            <div className="container px-4 md:px-6">

                {/* Header Section offset to left */}
                <div className="max-w-xl mb-16 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/20 rounded-none text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        Como Funciona (Passo a Passo)
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tighter leading-[0.9]">
                        Tecnologia + Toque Humano
                    </h2>
                </div>

                {/* Asymmetric Tension Layout (Image Left/Back, Content Right/Front Overlapping) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative">

                    {/* Image Column - Pushed to back */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative h-[400px] lg:h-[600px] z-0"
                    >
                        <Image
                            src="/image/consultoria-juridica-reuniao-mesa-livro.jpg"
                            alt="Cena de consultoria jurídica com livro de direito e estátua da Justiça na mesa"
                            fill
                            className="object-cover grayscale-[30%] opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary" />
                    </motion.div>

                    {/* Content Column - Pulled to front, overlapping image */}
                    <div className="lg:col-span-6 lg:-ml-24 z-10 flex flex-col justify-center">
                        <div className="bg-background text-foreground p-8 md:p-12 shadow-2xl border-l-4 border-accent relative">

                            {/* Ethical Badge overlapping border */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary text-secondary rounded-full flex flex-col items-center justify-center rotate-12 shadow-xl border border-secondary/20 hidden md:flex cursor-default hover:rotate-0 transition-all duration-300">
                                <span className="text-[10px] uppercase font-bold tracking-wider">Provimento</span>
                                <span className="text-xl font-display font-bold leading-none">205</span>
                            </div>

                            <p className="text-muted-foreground mb-8 text-lg font-medium">
                                Operação completa de atração, conversão e fechamento. O gargalo do seu escritório deixa de ser captação.
                            </p>

                            <div className="flex flex-col gap-8">
                                {[
                                    {
                                        step: "01",
                                        icon: Megaphone,
                                        title: "Atrair (Tráfego)",
                                        microcopy: "Anúncio sem método dá movimento. Método dá agenda.",
                                        desc: "Trazer volume com qualidade, não só curiosos. Criativos, segmentação, testes A/B e otimização por intenção.",
                                        cta: "Quero atrair leads mais qualificados"
                                    },
                                    {
                                        step: "02",
                                        icon: Layout,
                                        title: "Converter (Site)",
                                        microcopy: "Seu site não é vitrine. É roteiro de conversão.",
                                        desc: "Transformar visita em clique. Páginas por área, prova social, botões certos, integrações e rastreio.",
                                        cta: "Quero um site pronto pra converter"
                                    },
                                    {
                                        step: "03",
                                        icon: Bot,
                                        title: "Atender (WhatsApp 24/7)",
                                        microcopy: "O lead não espera. Seu WhatsApp também não.",
                                        desc: "Secretária digital (texto+áudio), perguntas de qualificação, transcrição e follow-up automático.",
                                        cta: "Quero atendimento 24/7 no WhatsApp"
                                    },
                                    {
                                        step: "04",
                                        icon: CalendarCheck,
                                        title: "Fechar (Agendamento)",
                                        microcopy: "Você entra na hora certa — com o resumo pronto.",
                                        desc: "Agendamento pelo Google Calendar, confirmações, resumo do caso enviado por WhatsApp/e-mail para você.",
                                        cta: "Quero mais agendamentos com organização"
                                    },
                                    {
                                        step: "05",
                                        icon: LineChart,
                                        title: "Medir (Otimização)",
                                        microcopy: "Sem dado, é opinião. Com dado, é crescimento.",
                                        desc: "Acompanhamento a cada 15 dias, leitura de qualidade do lead, ajustes no funil contínuos.",
                                        cta: "Quero previsibilidade e controle"
                                    }
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-12 h-12 bg-primary/5 border border-primary/20 flex flex-col items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 rounded-none relative">
                                                <step.icon className="w-5 h-5" />
                                                <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground/50 rotate-[-90deg]">
                                                    {step.step}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start mt-1">
                                            <h3 className="text-xl font-display uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-primary/80 font-bold tracking-wide italic text-sm mb-2">
                                                &ldquo;{step.microcopy}&rdquo;
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                                <strong className="text-foreground/80 font-semibold">O que entrega:</strong> {step.desc}
                                            </p>
                                            <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors mt-auto">
                                                {step.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
