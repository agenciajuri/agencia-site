"use client";

import { motion } from "framer-motion";

const PAINS = [
    {
        title: "Respondo depois",
        description:
            "O contato manda mensagem às 21h. Você vê no dia seguinte. Ele já falou com outro escritório. Em direito de família e trabalhista, quem responde primeiro agenda primeiro."
    },
    {
        title: "WhatsApp virou bagunça",
        description:
            "Cliente novo misturado com cliente antigo, dúvida rápida junto com caso urgente. Você perde o fio da conversa, perde o contexto e perde o cliente no meio."
    },
    {
        title: "Todo contato parece igual",
        description:
            "Chegam 15, 20 mensagens no dia. Quais são casos reais? Quais são curiosos? Sem qualificação, você gasta o mesmo tempo com todo mundo — inclusive com quem nunca vai contratar."
    },
    {
        title: "Investiu em anúncio e não deu em nada",
        description:
            "Você já pagou para aparecer no Google ou no Instagram. Vieram contatos, mas ninguém organizou o atendimento. O dinheiro foi embora e a sensação que ficou é que marketing não funciona para advogado."
    }
];

export function PainSection() {
    return (
        <section className="bg-background py-24">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="inline-flex items-center gap-2"
                    >
                        <span className="h-[2px] w-8 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
                            O problema que ninguém resolve
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.08 }}
                        className="mt-6 text-4xl font-display uppercase tracking-tight text-primary md:text-5xl lg:text-6xl"
                    >
                        Seu escritório perde clientes toda semana — e o problema não é falta de procura.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.14 }}
                        className="mt-6 max-w-3xl border-l-4 border-accent bg-secondary/20 px-5 py-5 text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        Em áreas como família, trabalhista e previdenciário, gente procurando advogado não falta. O que falta é processo. O contato chega pelo WhatsApp, ninguém responde a tempo, a conversa se perde no meio de outras e o cliente procura outro escritório. Não é falta de competência. É falta de estrutura.
                    </motion.p>
                </div>

                <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
                    {PAINS.map((pain, index) => (
                        <motion.article
                            key={pain.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            className="border border-primary/10 border-l-4 border-l-accent bg-secondary/10 p-6 shadow-[8px_8px_0_rgba(15,23,42,0.06)]"
                        >
                            <h3 className="text-2xl font-display uppercase tracking-tight text-primary">
                                {pain.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                {pain.description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-12 max-w-4xl text-center text-base leading-relaxed text-primary md:text-lg"
                >
                    Se alguma dessas situações é rotina no seu escritório, o problema tem solução — e começa com um diagnóstico rápido.
                </motion.p>
            </div>
        </section>
    );
}
