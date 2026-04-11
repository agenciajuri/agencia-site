"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Filter, Search, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PHASES = [
    {
        step: "01",
        icon: Search,
        title: "Varredura",
        description: "Identificamos quem está procurando advogado na sua cidade e na sua área de atuação — pessoas com demanda real que ainda não encontraram seu escritório."
    },
    {
        step: "02",
        icon: Target,
        title: "Atração",
        description: "Colocamos seu escritório na frente dessas pessoas por meio de anúncios direcionados, sempre dentro das normas do Provimento 205/2021. Só comunicação informativa, focada na sua região."
    },
    {
        step: "03",
        icon: Filter,
        title: "Qualificação Automática",
        description: "Quando a pessoa entra em contato pelo WhatsApp, um atendimento automático inteligente faz as perguntas certas: o que aconteceu, qual a urgência, qual a cidade. Filtra quem é curioso e encaminha quem tem caso real."
    },
    {
        step: "04",
        icon: CalendarCheck,
        title: "Consulta",
        description: "Você recebe o contato já qualificado, com resumo do caso e horário marcado na sua agenda. Entra na conversa sabendo o contexto e com prioridade definida."
    }
];

export function TeamComparison() {
    return (
        <section id="metodo" className="overflow-hidden bg-background py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="inline-flex items-center gap-2"
                    >
                        <span className="h-[2px] w-8 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
                            Método Juri
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.08 }}
                        className="mt-6 text-4xl font-display uppercase tracking-tight text-primary md:text-5xl lg:text-6xl"
                    >
                        Do primeiro contato à consulta agendada — em 4 etapas.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.14 }}
                        className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        Um processo claro para o seu escritório parar de perder clientes por falta de organização. Sem promessas vazias, sem complicação.
                    </motion.p>
                </div>

                <div className="relative mx-auto mt-16 max-w-6xl">
                    <div className="absolute bottom-6 left-6 top-6 w-px bg-primary/15 lg:hidden" />
                    <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-primary/15 lg:block" />

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
                        {PHASES.map((phase, index) => {
                            const Icon = phase.icon;

                            return (
                                <motion.div
                                    key={phase.step}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1, duration: 0.45 }}
                                    className="relative pl-16 lg:pl-0 lg:pt-14"
                                >
                                    <div className="absolute left-[13px] top-7 z-10 h-6 w-6 border-4 border-background bg-accent lg:left-1/2 lg:-ml-3 lg:top-0" />

                                    <article className="relative h-full border border-primary/15 bg-background p-6 shadow-[8px_8px_0_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 lg:pt-10">
                                        <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
                                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                            Fase {phase.step}
                                        </span>
                                        <div className="mt-5 inline-flex h-14 w-14 items-center justify-center border border-primary/15 bg-secondary/20 text-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-5 text-2xl font-display uppercase tracking-tight text-primary">
                                            {phase.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                            {phase.description}
                                        </p>
                                    </article>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-16 max-w-3xl border-l-4 border-accent bg-secondary/10 p-6 md:p-8"
                >
                    <p className="text-lg font-medium leading-relaxed text-primary md:text-xl">
                        Quer ver como isso funciona no seu escritório?
                    </p>
                    <Button
                        size="lg"
                        className="group mt-6 min-h-[56px] h-auto rounded-none bg-accent px-6 py-4 text-xs font-bold uppercase tracking-wider leading-tight text-accent-foreground transition-all hover:-translate-y-1 hover:bg-accent/90 md:min-h-[64px] md:text-sm"
                        asChild
                    >
                        <Link
                            href="https://viewer.agenciajuri.com.br/diagnostico-advogados"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Consultar Viabilidade para meu Escritório
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
