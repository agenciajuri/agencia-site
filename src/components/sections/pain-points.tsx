"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

export function PainPoints() {
    return (
        <section className="py-32 bg-background relative overflow-hidden flex items-center min-h-[80vh]">

            {/* Background Image - Z-axis Layering */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/image/sobre-valores-justica-maos-profissional.jpg"
                        alt="Pessoa segurando estátua da Justiça, com destaque para a balança"
                        fill
                        className="object-cover object-center grayscale-[50%] opacity-40 md:opacity-70"
                    />
                    {/* Gradient fade to blend with background on the left edge */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-transparent" />
                    <div className="absolute inset-0 bg-background/20" />
                </div>
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Typography Block */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-12 h-[1px] bg-primary" />
                            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                                Automação de WhatsApp
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase tracking-tighter leading-[0.85] mb-8 text-primary">
                            A Sua Nova <br />
                            <span className="text-accent underline decoration-4 underline-offset-8">Secretária</span><br />
                            Digital 24/7.
                        </h2>

                        <p className="text-lg text-foreground/75 leading-relaxed md:max-w-md border-l-2 border-primary/20 pl-6 mb-6">
                            Em áreas de alta demanda, o que mata a conversão é: &quot;respondo depois&quot;, conversa perdida e lead frio. Sua secretária digital faz o primeiro atendimento do jeito certo e te entrega clareza e prioridade.
                        </p>
                        <p className="text-lg text-foreground/75 leading-relaxed md:max-w-md border-l-2 border-accent pl-6 bg-accent/10 py-4">
                            <strong className="text-primary">Resultado:</strong> menos tempo perdido com &quot;curioso&quot;, menos interrupção e mais atendimentos encaminhados com organização.
                        </p>
                    </div>

                    {/* Right Brutalist Value Blocks - Overlapping the image */}
                    <div className="md:col-span-7 flex flex-col justify-center gap-4 mt-12 md:mt-0">
                        <h3 className="text-2xl font-display uppercase tracking-wide text-primary mb-2 md:-ml-12 z-10">O que ela faz na prática:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: "Triagem Eficiente",
                                    desc: "Qualifica motivo, urgência, cidade e tipo de caso."
                                },
                                {
                                    icon: Handshake,
                                    title: "Perguntas Objetivas",
                                    desc: "Evita conversas longas e sem direção com o cliente."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Áudio e Texto",
                                    desc: "Atende e entende áudio, com transcrição de contexto."
                                },
                                {
                                    icon: Handshake,
                                    title: "Follw-up Automático",
                                    desc: "Chama novamente se a pessoa parar de responder."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Google Calendar",
                                    desc: "Agendamento automático direto na sua agenda."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Resumo Direto",
                                    desc: "Você recebe o resumo pra entrar só quando faz sentido."
                                }
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-background border border-primary/15 p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 shadow-xl md:-ml-8 hover:-translate-y-1 transition-transform duration-300 relative group"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-accent transition-colors" />

                                    <h3 className="text-lg font-display uppercase tracking-wide text-primary">
                                        {point.title}
                                    </h3>
                                    <p className="text-foreground/65 leading-relaxed text-sm">
                                        {point.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
