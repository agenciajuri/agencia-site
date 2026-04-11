"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    },
    {
        question: "Vocês entendem as regras da OAB?",
        answer: "Sim. Toda comunicação segue o Provimento 205/2021. Não usamos promessa de resultado, linguagem sensacionalista nem captação ativa de clientela. É o nosso diferencial técnico."
    },
    {
        question: "Já investi em marketing antes e não funcionou. Por que seria diferente?",
        answer: "Porque a maioria das agências genéricas não entende o contexto jurídico. Aqui o foco não é \"fazer post bonito\" — é estruturar captação com processo: atração do público certo, triagem automática e atendimento rápido. Se o lead chega e ninguém responde em 2 minutos, não é problema de anúncio."
    },
    {
        question: "Meus clientes vêm por indicação. Preciso mesmo de marketing digital?",
        answer: "Indicação é ótima, mas imprevisível. Você não controla quando vem nem quantas vêm. O digital cria um segundo canal de entrada constante e mensurável, sem substituir a indicação — complementando ela."
    },
    {
        question: "Quanto tempo até ver resultado?",
        answer: "O funil entra no ar em 7 a 14 dias. Primeiros leads costumam aparecer na primeira quinzena. O sistema melhora com o tempo porque os dados reais alimentam as otimizações. Não prometemos resultado mágico no dia 1, mas entregamos processo desde o dia 1."
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
