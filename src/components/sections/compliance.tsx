"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, Eye } from "lucide-react";

export function Compliance() {
    return (
        <section className="py-24 bg-primary text-secondary">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            COMPLIANCE & SEGURANÇA JURÍDICA
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <ShieldCheck className="w-16 h-16 text-accent/20" />
                        </motion.div>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6 mt-4">
                        Cresça sem Riscos Éticos
                    </h2>
                    <p className="text-secondary/80 text-lg leading-relaxed">
                        Toda peça, página e anúncio passa por revisão ética interna. Respeitamos o Provimento 205/2021 ao pé da letra: só comunicação informativa, sem promessa de resultado, sem ostentação.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {/* Card 1: Publicidade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Scale className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-xl font-display uppercase tracking-wide mb-3">
                            Publicidade Ética (Prov. 205/2021)
                        </h3>
                        <p className="text-secondary/70 leading-relaxed text-sm">
                            Evitamos promessas de resultado, frases sensacionalistas (&quot;cause ganha&quot;) e mercantilização. Focamos em Marketing Informativo e Presença Digital Institucional para construir autoridade com segurança.
                        </p>
                    </motion.div>

                    {/* Card 2: LGPD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <FileText className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-xl font-display uppercase tracking-wide mb-3">
                            LGPD & Proteção de Dados
                        </h3>
                        <p className="text-secondary/70 leading-relaxed text-sm">
                            Coletamos apenas dados necessários para contato. Implementamos termos de uso e políticas de privacidade claras para proteger seu escritório.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Eye className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-xl font-display uppercase tracking-wide mb-3">
                            Método Transparente
                        </h3>
                        <p className="text-secondary/70 leading-relaxed text-sm">
                            Você sabe o que foi feito, por que foi feito e o que muda na próxima etapa. Com Triagem de Qualificação clara, sem caixa-preta e sem campanha rodando sem contexto.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
