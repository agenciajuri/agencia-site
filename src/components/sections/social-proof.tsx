"use client";

import { motion, animate } from "framer-motion";
import { useRef } from "react";

const METRICS = [
    {
        value: 93,
        prefix: "",
        suffix: "%",
        description: "dos contatos respondidos em menos de 2 minutos"
    },
    {
        value: 3,
        prefix: "",
        suffix: "x",
        description: "mais consultas agendadas com atendimento automático no WhatsApp"
    },
    {
        value: 40,
        prefix: "+",
        suffix: "%",
        description: "mais agendamentos com site profissional + WhatsApp integrados"
    }
];

const TESTIMONIALS = [
    {
        quote: "Antes eu perdia metade dos contatos porque não conseguia responder rápido. Hoje o WhatsApp filtra, qualifica e agenda sozinho. Entro na conversa já sabendo o contexto.",
        author: "Advogado Trabalhista, Goiânia - GO"
    },
    {
        quote: "O site antigo era bonito mas não gerava contato. Depois que trocaram pra página com foco em conversão e integraram com o WhatsApp, os agendamentos dobraram em 45 dias.",
        author: "Advogada Família e Sucessões, Brasília - DF"
    },
    {
        quote: "Sempre tive medo de fazer anúncio e levar problema com a OAB. Eles montaram tudo dentro do Provimento 205 e eu parei de ter medo de receber notificação da seccional.",
        author: "Advogado Previdenciarista, Anápolis - GO"
    }
];

function MetricValue({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);

    return (
        <motion.span
            ref={ref}
            onViewportEnter={() => {
                const node = ref.current;

                if (!node) {
                    return;
                }

                animate(0, value, {
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    onUpdate(latest) {
                        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
                    }
                });
            }}
            viewport={{ once: true }}
        >
            {`${prefix}0${suffix}`}
        </motion.span>
    );
}

export function SocialProof() {
    return (
        <section className="relative overflow-hidden bg-primary py-24 text-secondary md:py-32">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_40%)]" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-6 inline-flex items-center gap-2">
                            <span className="h-[2px] w-8 bg-accent" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
                                Resultados de quem já usa
                            </span>
                        </div>

                        <h2 className="text-4xl font-display uppercase tracking-tight text-secondary md:text-5xl lg:text-6xl">
                            Números reais de escritórios atendidos.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary/70 md:text-lg">
                            Um escritório bem estruturado não depende de sorte. Depende de resposta rápida, qualificação clara e acompanhamento constante.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {METRICS.map((metric, index) => (
                            <motion.div
                                key={metric.description}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ delay: index * 0.1, duration: 0.45 }}
                                className="border border-white/15 bg-white/[0.04] p-6 shadow-[10px_10px_0_rgba(0,0,0,0.16)]"
                            >
                                <p className="text-4xl font-display uppercase tracking-tight text-accent md:text-5xl">
                                    <MetricValue
                                        value={metric.value}
                                        prefix={metric.prefix}
                                        suffix={metric.suffix}
                                    />
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-secondary/75 md:text-base">
                                    {metric.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <motion.article
                                key={testimonial.author}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.45 }}
                                className="flex h-full flex-col justify-between border border-white/15 bg-black/20 p-6"
                            >
                                <p className="text-base leading-relaxed text-secondary/85">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <p className="mt-6 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-accent/90">
                                    {testimonial.author}
                                </p>
                            </motion.article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
