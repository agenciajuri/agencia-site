"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SocialProof() {
    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center min-h-[70vh]">
            {/* Background Image Layer */}
            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/image/advogado-escritorio-justica-primeiro-plano.jpg"
                    alt="Estátua da Justiça em primeiro plano com advogado ao fundo em escritório"
                    fill
                    className="object-cover object-center grayscale-[30%] opacity-40 mix-blend-overlay"
                />
                {/* Heavy Dark Overlay for Brutalist Contrast */}
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* Brutalist Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-2 mb-8"
                    >
                        <span className="w-8 h-[2px] bg-accent" />
                        <span className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            O Próximo Passo
                        </span>
                        <span className="w-8 h-[2px] bg-accent" />
                    </motion.div>

                    {/* Massive Typography Main Call */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display uppercase tracking-tighter leading-[0.9] text-secondary mb-8"
                    >
                        Aumente o Volume <br />
                        <span className="text-accent underline decoration-4 underline-offset-8">Com Qualidade.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-secondary/70 max-w-2xl mb-12 leading-relaxed"
                    >
                        Quer parar de perder tempo com curiosos lotando sua caixa? Ativamos <strong className="text-secondary">Tráfego Pago</strong> com método, inteligência e otimização quinzenal proativa.
                    </motion.p>

                    {/* High Impact CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col gap-4 w-full max-w-3xl mx-auto"
                    >
                        <Button
                            size="lg"
                            className="group h-16 md:h-20 px-4 md:px-8 bg-accent text-accent-foreground hover:bg-white hover:text-black rounded-none transition-all text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest shadow-2xl relative overflow-hidden"
                            asChild
                        >
                            <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                                <span className="relative z-10 flex items-center justify-center w-full">
                                    Quero a operação completa (Site + WA + Tráfego)
                                    <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
                                </span>
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                            </Link>
                        </Button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 md:h-16 px-4 bg-transparent border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/60 hover:text-white rounded-none transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                asChild
                            >
                                <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                                    Quero parar de perder lead no WhatsApp
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 md:h-16 px-4 bg-transparent border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/60 hover:text-white rounded-none transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                asChild
                            >
                                <Link href="https://viewer.agenciajuri.com.br/diagnostico-advogados" target="_blank">
                                    Quero previsibilidade de captação e agenda
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
