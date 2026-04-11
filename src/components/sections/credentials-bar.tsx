"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, Scale, ShieldCheck } from "lucide-react";

const CREDENTIALS = [
    {
        icon: ShieldCheck,
        title: "Dentro das Normas da OAB",
        description: "Tudo revisado conforme o Provimento 205/2021"
    },
    {
        icon: Scale,
        title: "Só Atendemos Advocacia",
        description: "Família · Trabalhista · Previdenciário"
    },
    {
        icon: Clock,
        title: "Atendimento 24 Horas",
        description: "WhatsApp com agendamento automático"
    },
    {
        icon: BarChart3,
        title: "Relatório Quinzenal",
        description: "Você acompanha cada resultado do escritório"
    }
];

export function CredentialsBar() {
    return (
        <section className="bg-primary py-6 md:py-8 border-y border-white/10 overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
                >
                    {CREDENTIALS.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ delay: index * 0.08, duration: 0.45 }}
                                className="group relative flex min-h-[140px] flex-col justify-between border border-white/15 bg-white/5 p-4 shadow-[8px_8px_0_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 md:min-h-[156px] md:p-5"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
                                <Icon className="h-8 w-8 text-accent md:h-9 md:w-9" />
                                <div>
                                    <h2 className="text-sm font-display uppercase tracking-[0.08em] text-secondary md:text-base">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-xs leading-relaxed text-secondary/70 md:text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
