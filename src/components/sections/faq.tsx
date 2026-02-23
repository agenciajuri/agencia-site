"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "Vou levar processo ético na OAB?",
        answer: "Não. Nossa equipe revisa tudo com base no Provimento 205/2021. Criamos campanhas informativas e elegantes, sem promessas de resultado ou mercantilização para que você não tenha dores de cabeça."
    },
    {
        question: "Preciso gravar vídeos e virar influencer?",
        answer: "Não necessariamente. Nossa estratégia foca em atrair clientes que já estão buscando advogados ativamente (Rede de Pesquisa do Google). O conteúdo nas redes sociais é um apoio, mas não a única forma de obter contratos."
    },
    {
        question: "Em quanto tempo recebo o primeiro contato?",
        answer: "Implementamos a sua estrutura comercial em 45 dias. Após o início das campanhas, o fluxo de potenciais clientes costuma iniciar nos primeiros dias subsequentes, estabilizando com a otimização diária."
    },
    {
        question: "Já contratei agência e só ganhei 'likes'. O que muda?",
        answer: "Muda o foco de métricas. Não acompanhamos curtidas, seguidores ou alcance. O que importa no nosso Painel de Controle de Resultados é quantos contatos com interesse real (potenciais clientes) chegaram ao seu WhatsApp."
    },
    {
        question: "Como os clientes vão me achar na internet?",
        answer: "Mapeamos os termos jurídicos que as pessoas digitam no Google ao precisarem de ajuda legal. Quando pesquisarem pelo seu serviço, o seu escritório aparecerá no topo da lista, de forma estratégica e qualificada."
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
