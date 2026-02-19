"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "Vocês fazem marketing jurídico sem risco com a OAB?",
        answer: "Trabalhamos com comunicação informativa e sobriedade, alinhando peças e páginas às regras aplicáveis e evitando promessas, apelos e linguagem agressiva ou comercial demais."
    },
    {
        question: "Marketing jurídico é permitido?",
        answer: "Sim, desde que respeite limites éticos e normas da OAB, com foco informativo."
    },
    {
        question: "Eu já tentei tráfego e não funcionou. O que muda aqui?",
        answer: "Normalmente falha por falta de estrutura: página ruim, mensagem inicial fraca, atendimento desorganizado e ausência de mensuração. A gente corrige o sistema inteiro, não só 'o anúncio'."
    },
    {
        question: "Vocês prometem resultados?",
        answer: "Não. Promessa fere boa prática e aumenta risco de frustração. Nosso compromisso é com processo, rastreabilidade e melhoria contínua."
    },
    {
        question: "Qual o melhor: formulário ou WhatsApp?",
        answer: "Depende do seu momento. WhatsApp costuma reduzir atrito; formulário melhora qualificação. Podemos usar ambos com rastreio por origem."
    },
    {
        question: "Quanto tempo para começar?",
        answer: "Como você decide rápido: dá para iniciar com um setup essencial e evoluir por etapas (estrutura → mensuração → otimização)."
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
