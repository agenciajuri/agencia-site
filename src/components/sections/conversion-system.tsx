"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, Megaphone, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConversionSystem() {
    return (
        <section className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden" id="conversao">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">

                {/* Intro: Por que funciona melhor */}
                <div className="max-w-3xl border-l-4 border-accent pl-6 mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display uppercase tracking-tighter leading-[0.9] mb-6"
                    >
                        Por que funciona melhor em <br />
                        <span className="text-primary">Família, Trabalhista e Previdenciário?</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                            Porque são áreas com: <strong className="text-foreground">Alta urgência e emocional</strong> (Família), <strong className="text-foreground">Volume e prazos curtos</strong> (Trabalhista) e <strong className="text-foreground">Muita dúvida e repetição</strong> (Previdenciário).
                        </p>
                        <div className="bg-background border border-primary/20 p-5 sm:p-6 md:p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                            <p className="font-bold text-primary mb-4 uppercase text-sm md:text-base tracking-wider">A automação mantém o lead no trilho e te entrega a conversa &quot;mastigada&quot;:</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-muted-foreground">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> O que a pessoa quer</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Qual o contexto</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Qual a prioridade</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Qual o próximo passo (agendar, etc)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Grid 2 Columns for Site & Tráfego */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">

                    {/* Site de Conversão */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-background p-6 sm:p-8 md:p-12 shadow-xl border-t-4 border-primary relative group hover:-translate-y-1 transition-transform"
                    >
                        <Layout className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 text-primary">
                            Site de Conversão
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 font-medium">
                            Feito para levar ao WhatsApp (sem desperdício).
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Seu site precisa conduzir a ação com clareza. A gente cria páginas rápidas, diretas e com fluxo pensado para: <strong>entender → confiar → clicar → conversar → agendar.</strong>
                        </p>
                        <ul className="space-y-4 text-sm md:text-base text-muted-foreground mb-8 border-t border-border pt-8">
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary mt-1.5 rounded-none shrink-0" /> Estrutura com foco em conversão (headline clara + prova + CTA)</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary mt-1.5 rounded-none shrink-0" /> Páginas por área (Família / Trabalhista / Previdenciário)</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary mt-1.5 rounded-none shrink-0" /> Botões e CTAs integrados com a automação do WhatsApp</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary mt-1.5 rounded-none shrink-0" /> Ajustes e manutenção pelo nosso time</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary mt-1.5 rounded-none shrink-0" /> Comunicação alinhada à publicidade da advocacia (informativa)</li>
                        </ul>
                    </motion.div>

                    {/* Tráfego Pago */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-primary text-secondary p-6 sm:p-8 md:p-12 shadow-xl border-t-4 border-accent relative group hover:-translate-y-1 transition-transform"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Megaphone className="w-64 h-64" />
                        </div>
                        <Megaphone className="w-10 h-10 text-accent mb-6 relative z-10" />
                        <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 relative z-10 text-white">
                            Tráfego Pago
                        </h3>
                        <p className="text-lg text-secondary/90 mb-6 font-medium relative z-10">
                            Método para baixar custo e subir qualidade.
                        </p>
                        <p className="text-secondary/80 mb-8 leading-relaxed relative z-10">
                            Tráfego não é &quot;impulsionar&quot; e torcer. Nosso foco é atrair leads com intenção real, reduzir custo e melhorar a consistência com testes contínuos.
                        </p>
                        <ul className="space-y-4 text-sm md:text-base text-secondary/80 mb-8 border-t border-white/10 pt-8 relative z-10">
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-accent mt-1.5 rounded-none shrink-0" /> Criativos e mensagens por área específica</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-accent mt-1.5 rounded-none shrink-0" /> Testes constantes para achar o que gera lead melhor (não só barato)</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-accent mt-1.5 rounded-none shrink-0" /> Otimização cirúrgica por métricas e qualidade de contato</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-accent mt-1.5 rounded-none shrink-0" /> Ritmo quinzenal: o que foi testado, o que ganhou, o que muda</li>
                            <li className="flex items-start gap-3"><div className="w-2 h-2 bg-accent mt-1.5 rounded-none shrink-0" /> Nós trabalhamos de forma proativa: você não precisa &quot;pedir ajuste&quot;</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Combo/CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-background border border-border p-6 sm:p-8 md:p-16 shadow-2xl relative overflow-hidden">
                        {/* Decorative background logo or shape */}
                        <div className="absolute top-12 right-12 opacity-[0.03] pointer-events-none rotate-12">
                            <Zap className="w-96 h-96" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="w-8 h-[2px] bg-accent" />
                                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                                        O Combo Que Mais Fecha
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tighter mb-6 text-primary leading-[0.9]">
                                    Site <br />
                                    <span className="text-accent">+ WhatsApp</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Seu anúncio ou indicação pode até trazer gente. <strong className="text-foreground">Mas o que fecha é o atendimento.</strong>
                                </p>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Quando você combina site de conversão e WhatsApp 24/7, você responde rápido sem ficar refém do celular, mantém o lead aquecido e entra na conversa já com contexto. Isso é previsibilidade para o seu escritório.
                                </p>
                            </div>

                            <div className="flex-1 w-full flex flex-col items-center justify-center p-8 bg-secondary/5 border border-border/50 text-center">
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 uppercase tracking-wide text-primary">Quer parar de perder lead e ganhar rotina?</h3>
                                <p className="text-sm text-muted-foreground mb-8">Organizamos seu WhatsApp e agenda, e deixamos seu site pronto para converter.</p>

                                <Button
                                    size="lg"
                                    className="w-full group h-16 md:h-20 bg-accent text-accent-foreground rounded-none shadow-xl hover:-translate-y-1 transition-all text-xs md:text-sm font-bold uppercase tracking-wider"
                                    asChild
                                >
                                    <Link href="https://typebot.co/diagnostico-advogados" target="_blank">
                                        Quero o combo Site + WhatsApp
                                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
