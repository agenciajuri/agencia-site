"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Scale } from "lucide-react";

const TRUST_CARDS = [
    {
        icon: Scale,
        title: "Publicidade dentro das normas (Prov. 205/2021)",
        description:
            "Não fazemos anúncio com causa ganha, frase apelativa ou promessa de resultado. Toda comunicação é informativa e institucional — exatamente como o Provimento 205/2021 permite. Seu escritório constrói autoridade sem risco de notificação da seccional."
    },
    {
        icon: FileText,
        title: "Proteção de dados (LGPD)",
        description:
            "Coletamos apenas os dados necessários para o primeiro contato. Implementamos termos de uso e política de privacidade no seu site — protegendo seu escritório e os dados de quem entra em contato."
    },
    {
        icon: MapPin,
        title: "Presença regional em Goiás",
        description:
            "Conhecemos o mercado jurídico goiano de perto — concorrência, perfil de cliente e demanda por área em cada cidade. Atuamos em Goiânia, Anápolis, Aparecida de Goiânia e Rio Verde. Essa proximidade muda completamente a estratégia do seu escritório."
    }
];

export function TrustSection() {
    return (
        <section className="bg-primary py-24 text-secondary">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent"
                    >
                        Especialistas no Cenário Jurídico Goiano
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.08 }}
                        className="mt-6 text-4xl font-display uppercase tracking-tight text-secondary md:text-5xl lg:text-6xl"
                    >
                        Cresça sem colocar sua OAB em risco.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.14 }}
                        className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary/75 md:text-lg"
                    >
                        Toda peça, página e anúncio passa por revisão ética interna. Trabalhamos exclusivamente com advocacia e conhecemos as regras — não por obrigação, mas porque é a base do nosso trabalho.
                    </motion.p>
                </div>

                <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
                    {TRUST_CARDS.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.article
                                key={card.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ delay: index * 0.08, duration: 0.45 }}
                                className="border border-white/10 bg-white/5 p-8 shadow-[8px_8px_0_rgba(0,0,0,0.18)]"
                            >
                                <Icon className="h-10 w-10 text-accent" />
                                <h3 className="mt-6 text-2xl font-display uppercase tracking-tight text-secondary">
                                    {card.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-secondary/75 md:text-base">
                                    {card.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
