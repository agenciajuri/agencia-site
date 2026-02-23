"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-40 md:pt-48 pb-16 overflow-hidden bg-background">
            {/* Background Elements - Parallax Layer */}
            <motion.div
                style={{ y: backgroundY, opacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />
                {/* Abstract Code-Based Animation (Placeholder Replacement) */}
                <motion.div
                    className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] opacity-10 border-[1px] border-primary/20 rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute inset-4 border-[1px] border-primary/10 rounded-full" />
                    <div className="absolute inset-8 border-[1px] border-primary/5 rounded-full" />
                </motion.div>
            </motion.div>

            <div className="container px-4 md:px-6 z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 px-4 py-1.5 border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase"
                    >
                        Gestão & Marketing Jurídico
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase leading-[0.9] tracking-tighter text-primary mb-8">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Receba contatos de
                        </motion.span>
                        <motion.span
                            className="block text-accent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Clientes Qualificados
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Todos os dias.
                        </motion.span>
                        <motion.span
                            className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-primary/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Com total segurança jurídica.
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                    >
                        Implementamos um setor comercial completo no seu escritório em 45 dias. Você foca nos processos, nós focamos em trazer os casos.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group w-full sm:w-auto text-base" asChild>
                                <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                    Quero uma consultoria gratuita de diagnóstico
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base" asChild>
                                <Link href="#planos">
                                    Ver os 3 planos detalhados
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mt-2">
                            Sem contratos de fidelidade abusivos e 100% focado no Provimento 205/2021.
                        </p>
                    </motion.div>

                    {/* Video Placeholder (Requested by User to increase trust) - Commented out until video is ready
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 w-full max-w-3xl aspect-video rounded-xl bg-secondary/80 border border-border flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                            <span className="text-sm font-medium text-foreground bg-background/80 px-4 py-1.5 rounded-full backdrop-blur-sm border border-border">Clique para assistir e entender o Método Juri em 1 minuto</span>
                        </div>
                    </motion.div>
                    */}
                </div>
            </div>
        </section>
    );
}
