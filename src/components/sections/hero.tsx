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
                        Marketing Jurídico com Compliance OAB
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] tracking-tighter text-primary mb-8">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Estrutura de
                        </motion.span>
                        <motion.span
                            className="block text-accent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Captação & Controle
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Para Advogados: Do Clique ao Agendamento em Até 45 Dias
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                    >
                        Planos fixos a partir de R$ 997. Organizamos seu comercial jurídico com método, mensuração e blindagem ética. Sem mágica. Apenas processos que já funcionaram em +40 escritórios.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="group w-full sm:w-auto" asChild>
                            <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                Descobrir meu plano ideal
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                            <Link href="/servicos">
                                Ver os 3 planos detalhados
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
