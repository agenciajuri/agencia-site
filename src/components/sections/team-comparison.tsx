"use client";

import { motion, useMotionValue, useSpring, useInView, animate } from "framer-motion";
import { Users, Clock, ShieldCheck, ArrowRight, CheckCircle2, LineChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

/** Self-contained component to animate numbers when they enter the viewport */
function CountUpAmount({ target, decimals = 0, className }: { target: number, decimals?: number, className?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    return (
        <motion.span
            ref={nodeRef}
            className={className}
            onViewportEnter={() => {
                const node = nodeRef.current;
                if (!node) return;
                animate(0, target, {
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                    onUpdate(value) {
                        node.textContent = value.toLocaleString("pt-BR", {
                            minimumFractionDigits: decimals,
                            maximumFractionDigits: decimals,
                        });
                    },
                });
            }}
            viewport={{ once: true }}
        >
            0
        </motion.span>
    );
}

/** Each salary row — extracted to honour React hooks rules */
function CostRow({ role, min, max, delay }: { role: string; min: number; max: number; delay: number }) {
    return (
        <motion.div
            initial={{ x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex border-b border-primary/10 p-4 hover:bg-secondary/5 transition-colors items-center"
        >
            <div className="w-1/2 flex items-center gap-3">
                <Users className="w-4 h-4 text-accent hidden sm:block" />
                <span className="text-sm md:text-base font-semibold text-primary">{role}</span>
            </div>
            <div className="w-1/2 text-sm md:text-base font-mono font-semibold text-primary tabular-nums">
                R$ <CountUpAmount target={min} />{" "}
                <span className="text-muted-foreground font-sans text-xs">a</span>{" "}
                R$ <CountUpAmount target={max} />/mês
            </div>
        </motion.div>
    );
}

export function TeamComparison() {
    const teamCosts = [
        { role: "Arquiteto/Engenheiro de Software", min: 15450, max: 25900 },
        { role: "Analista de BI Sênior (Dados)", min: 10900, max: 18250 },
        { role: "Growth Marketing Sênior", min: 17500, max: 29200 },
        { role: "Growth Comercial/Business", min: 21100, max: 36800 },
    ];

    return (
        <section className="py-24 md:py-32 bg-secondary/5 border-t border-border relative overflow-hidden" id="operacao">
            <div className="container px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Team Cost Comparison */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-8 h-[2px] bg-accent" />
                            <span className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                                Simulação de Custo de Mercado
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-display uppercase tracking-tighter leading-[0.9] mb-6 text-primary"
                        >
                            Quanto custaria montar <br />
                            <span className="text-muted-foreground">esse time internamente?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-lg mb-4 leading-relaxed max-w-xl text-foreground/80"
                        >
                            Para rodar a mesma operação que a gente entrega — táfego, automação, site e dados — seu escritório precisaria contratar esses profissionais de forma independente, cada um com seu salário de mercado:
                        </motion.p>

                        {/* Disclaimer — preempts price confusion */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="flex items-start gap-3 mb-8 bg-amber-50 border border-amber-300 px-4 py-3"
                        >
                            <span className="text-amber-500 text-lg font-black shrink-0 mt-0.5">!</span>
                            <p className="text-sm text-amber-800 font-medium leading-snug">
                                <strong>Atenção:</strong> os valores abaixo são salários estimados de mercado para cada profissional contratado de forma independente. <strong>Não são o preço do nosso serviço.</strong> Esta simulação existe para mostrar o contexto do investimento alternativo.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-background border border-primary/20 shadow-xl"
                        >
                            {/* Table Header */}
                            <div className="flex border-b border-primary/20 p-4 bg-primary text-secondary">
                                <span className="w-1/2 font-bold uppercase tracking-wider text-xs md:text-sm">Profissional (Contratação Direta)</span>
                                <span className="w-1/2 font-bold uppercase tracking-wider text-xs md:text-sm">Salário Mercado / Mês</span>
                            </div>

                            {/* Table Rows with staggered animation + count-up per row */}
                            <div className="flex flex-col">
                                {teamCosts.map((item, index) => (
                                    <CostRow
                                        key={index}
                                        role={item.role}
                                        min={item.min}
                                        max={item.max}
                                        delay={0.35 + index * 0.08}
                                    />
                                ))}
                            </div>

                            {/* Table Footer — big animated total */}
                            <div className="p-6 md:p-8 bg-zinc-50 border-t-4 border-accent">
                                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Se você contratasse cada um separadamente, o custo mensal seria:</span>
                                <div className="text-2xl md:text-4xl font-display font-bold text-primary tracking-tighter mb-3 tabular-nums">
                                    R$ <CountUpAmount target={64950} />
                                    {" "}<span className="text-lg md:text-2xl text-muted-foreground font-sans">a</span>{" "}
                                    R$ <CountUpAmount target={110150} />
                                    <span className="text-lg text-muted-foreground font-sans tracking-normal">/mês</span>
                                </div>
                                <p className="text-xs md:text-sm text-muted-foreground italic">
                                    * Sem contar encargos trabalhistas, ferramentas, servidores e o tempo de gestão desse time.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 p-6 border-l-4 border-accent bg-accent/5"
                        >
                            <p className="font-bold text-primary text-base md:text-lg leading-snug mb-1">
                                Com a Agência Juri, você acessa essa mesma capacidade operacional
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                sem contratar, sem gerenciar e sem fixo elevado. Um serviço integrado, focado em execução e resultado para o seu escritório.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Routine & Timeframe */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary text-secondary p-8 md:p-12 shadow-2xl relative"
                        >
                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />

                            <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-8 text-white">
                                Prazo e Rotina <br />
                                <span className="text-accent text-lg">claro e sem enrolação</span>
                            </h3>

                            <div className="flex flex-col gap-8">

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 uppercase tracking-wider text-white">Implantação</h4>
                                        <p className="text-secondary/70 leading-relaxed text-sm md:text-base">
                                            Colocamos o funil no ar (site + WhatsApp + rastreio + campanhas iniciais) em <strong className="text-white">7 a 14 dias*</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 uppercase tracking-wider text-white">Acompanhamento</h4>
                                        <p className="text-secondary/70 leading-relaxed text-sm md:text-base">
                                            Reuniões ou reportes <strong className="text-white">quinzenais</strong> com base em dados para decisões e próximos testes.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <LineChart className="w-6 h-6 text-accent mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 uppercase tracking-wider text-white">Maturação</h4>
                                        <p className="text-secondary/70 leading-relaxed text-sm md:text-base">
                                            O funil fica mais forte e preciso conforme os dados reais (volume e qualidade) entram.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 text-xs text-secondary/50">
                                *O prazo depende do envio de materiais básicos e aprovações (logo, áreas, acesso à agenda).
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <div className="flex items-start gap-3 p-4 bg-background border border-border mt-4">
                                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                    Nosso objetivo é fechar contratos e crescer seu faturamento. Sem promessa vazia. Garantimos método, rotina e operação completa, <strong className="text-foreground">respeitando a publicidade da OAB.</strong>
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
