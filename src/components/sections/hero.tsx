"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image Layer with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/image/hero-estatua-justica-balanca-fundo-escuro.jpg"
                    alt="Estátua da Justiça com balança e espada em fundo escuro"
                    fill
                    priority
                    className="object-cover object-left md:object-center grayscale-[50%] opacity-90"
                    quality={90}
                />
                {/* Heavy Overlay — raised for text contrast */}
                <div className="absolute inset-0 bg-black/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
            </motion.div>

            {/* Content Layer */}
            <div className="container relative z-10 px-4 md:px-6 pt-36 md:pt-40 lg:pt-32 pointer-events-none">
                <div className="max-w-4xl mx-auto md:ml-0 md:mr-auto pointer-events-auto">

                    {/* Brutalist Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-[2px] bg-accent shrink-0" />
                        <span className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-black/70 px-2 py-1">
                            Não somos ag. genérica. Somos operação de crescimento.
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <h1 className="text-[2.25rem] leading-[0.95] sm:text-5xl lg:text-[4rem] font-display uppercase sm:leading-[0.9] tracking-tighter text-white mb-6 md:mb-8">
                        <motion.span
                            className="block text-white mb-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Seu Escritório
                        </motion.span>
                        <motion.span
                            className="block text-accent"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Não Pode Perder Lead
                        </motion.span>
                        <motion.span
                            className="block text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Por Demora no WhatsApp.
                        </motion.span>
                    </h1>

                    {/* Subtítulo — fora do h1, sem uppercase herdado */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug"
                    >
                        Automação 24/7 + Site de Conversão
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-xl font-medium text-white/80 mb-8 tracking-wide"
                    >
                        Para advocacia de alta demanda.
                    </motion.p>

                    {/* Brutalist Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-8 leading-relaxed border-l-4 border-accent pl-4 sm:pl-6 bg-black/80 py-3 sm:py-4 pr-4"
                    >
                        Em áreas de alta demanda, o gargalo não é "faltar anúncio". O gargalo é processo: lead entra, rola demora na resposta, a conversa vira bagunça e o lead esfria. <strong className="text-accent font-bold">A gente estrutura toda sua operação</strong> para atrair, converter, atender e agendar no automático.
                    </motion.p>

                    {/* Quick Proof Bullets */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.65 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm sm:text-base font-semibold"
                    >
                        <li className="flex items-center gap-3 bg-black/70 px-3 py-2.5 text-white"><div className="w-2 h-2 bg-accent rounded-full shrink-0" /> Atendimento texto + áudio, 24h/dia</li>
                        <li className="flex items-center gap-3 bg-black/70 px-3 py-2.5 text-white"><div className="w-2 h-2 bg-accent rounded-full shrink-0" /> Follow-up automático no lead frio</li>
                        <li className="flex items-center gap-3 bg-black/70 px-3 py-2.5 text-white"><div className="w-2 h-2 bg-accent rounded-full shrink-0" /> Agendamento no Google Calendar</li>
                        <li className="flex items-center gap-3 bg-black/70 px-3 py-2.5 text-white"><div className="w-2 h-2 bg-accent rounded-full shrink-0" /> Resumo enviado direto no seu WhatsApp</li>
                    </motion.ul>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5"
                    >
                        <Button
                            size="lg"
                            className="group h-14 sm:h-16 px-4 sm:px-8 bg-accent text-accent-foreground rounded-none border-b-4 border-accent-foreground/50 hover:border-b-0 hover:translate-y-1 transition-all text-xs sm:text-sm font-bold uppercase tracking-wider text-center"
                            asChild
                        >
                            <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                Quero organizar WhatsApp/Agenda
                                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 sm:h-16 px-4 sm:px-8 rounded-none border-zinc-500 text-zinc-100 hover:text-white hover:bg-white/10 transition-colors text-xs sm:text-sm font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-center"
                            asChild
                        >
                            <Link href="#conversao">
                                Quero site que converte
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="text-xs font-mono text-white/40 mt-6 md:mt-8 uppercase tracking-widest bg-black/50 inline-block px-3 py-1"
                    >
                        [ Conformidade 100% com Provimento 205/2021 OAB ]
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
