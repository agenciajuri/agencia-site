"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "Isso substitui meu atendimento?",
        answer: "Não. Organiza o início: triagem, qualificação, follow-up e agendamento. Você entra com prioridade e contexto."
    },
    {
        question: "Dá pra atender áudio?",
        answer: "Sim — a automação entende áudio e texto, transcreve e organiza."
    },
    {
        question: "Dá pra usar com Google Calendar?",
        answer: "Sim — agenda e confirmações com base na sua disponibilidade."
    },
    {
        question: "Serve pra escritório pequeno/médio?",
        answer: "É onde mais ajuda, porque reduz perda por falta de tempo e cria processo sem aumentar equipe."
    }
];

export function Faq() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-12 text-center">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border border-border">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-secondary/30 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-lg font-medium pr-8">{faq.question}</span>
                                {openIndex === i ? (
                                    <Minus className="h-5 w-5 text-accent flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
