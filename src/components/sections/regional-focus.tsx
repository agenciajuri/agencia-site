"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CITIES = [
    {
        name: "Goiânia, GO",
        description: "Sede da agência. Setor Leste Universitário."
    },
    {
        name: "Anápolis, GO",
        description: "Polo jurídico do interior com alta demanda."
    },
    {
        name: "Aparecida de Goiânia, GO",
        description: "Região metropolitana em crescimento acelerado."
    },
    {
        name: "Rio Verde, GO",
        description: "Referência no agronegócio com demanda jurídica crescente."
    }
];

export function RegionalFocus() {
    return (
        <section className="bg-secondary/5 py-24">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="inline-flex items-center gap-2 border border-primary/10 bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"
                    >
                        Especialistas no Cenário Jurídico Goiano
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.08 }}
                        className="mt-6 text-4xl font-display uppercase tracking-tight text-primary md:text-5xl"
                    >
                        Atuação Regional com Foco
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.14 }}
                        className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        Conhecemos o mercado jurídico goiano de perto — e isso faz diferença na estratégia.
                    </motion.p>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
                    {CITIES.map((city, index) => (
                        <motion.article
                            key={city.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            className="border border-primary/10 border-l-4 border-l-accent bg-background p-6 shadow-[8px_8px_0_rgba(15,23,42,0.06)]"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                                <div>
                                    <h3 className="text-lg font-bold text-primary">
                                        {city.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {city.description}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
