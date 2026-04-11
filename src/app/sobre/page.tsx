import type { Metadata } from "next";
import { Rocket, Target, Users } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Sobre | Agência Juri — Quem cuida do seu escritório",
    description:
        "Conheça o time que estrutura captação ética e organizada para escritórios de advocacia em Goiás.",
};

const TEAM = [
    {
        name: "Airton L. Souza",
        role: "Fundador e Diretor de Tecnologia",
        bio: "Estrutura sistemas de captação e automação para escritórios. Responsável por fazer a tecnologia trabalhar a favor do advogado.",
        image: "/airton.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Ismar Junior",
        role: "Jurídico e Comercial",
        bio: "Advogado de formação. Entende as regras da OAB por dentro e garante que toda comunicação respeite o Provimento 205/2021.",
        image: "/ismarjr.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Guilherme Iachitzki",
        role: "Relacionamento com Escritórios",
        bio: "Cuida do contato direto com cada escritório atendido. Acompanha resultados e resolve problemas antes que virem dor de cabeça.",
        image: "/guilherme.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Lucas Mazakenji",
        role: "Estratégia e Design",
        bio: "Cria as páginas, anúncios e materiais visuais do seu escritório. Tudo pensado para gerar confiança e contato, não apenas ser bonito.",
        image: "/lucasmazakenji.PNG",
        imagePosition: "object-[50%_25%]"
    }
];

const VALUES = [
    {
        icon: Target,
        title: "O que fazemos",
        description:
            "Organizamos o processo de captação de clientes para escritórios de advocacia. Do anúncio ao agendamento, tudo com ética e acompanhamento real."
    },
    {
        icon: Users,
        title: "Para quem fazemos",
        description:
            "Advogados e escritórios de família, trabalhista e previdenciário que precisam de previsibilidade — não de sorte — para atrair novos casos."
    },
    {
        icon: Rocket,
        title: "Como fazemos",
        description:
            "Com processo claro, relatórios honestos e respeito total ao Provimento 205/2021. Sem promessa de resultado, sem fórmula mágica."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="container px-4 pb-16 pt-32 md:px-6">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-display uppercase tracking-tight text-primary md:text-7xl">
                        Por que confiar na Agência Juri
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                        Trabalhamos exclusivamente com advocacia. Conhecemos as regras, entendemos a rotina e sabemos o que funciona — e o que não funciona — para atrair novos clientes dentro da lei.
                    </p>
                </div>
            </section>

            <section className="border-y border-border py-20">
                <div className="container px-4 md:px-6">
                    <div className="mb-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                        {VALUES.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article key={item.title} className="border border-border bg-card p-8 shadow-[8px_8px_0_rgba(15,23,42,0.04)]">
                                    <div className="mb-6 inline-flex bg-secondary p-4">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-display uppercase tracking-wide text-primary">
                                        {item.title}
                                    </h2>
                                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <h2 className="text-center text-3xl font-display uppercase tracking-tight text-primary md:text-5xl">
                        Quem cuida do seu escritório
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {TEAM.map((member) => (
                            <article key={member.name} className="group overflow-hidden border border-border bg-secondary/20">
                                <div className="relative aspect-square bg-secondary">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className={cn(
                                            "object-cover grayscale transition-all duration-500 group-hover:grayscale-0",
                                            member.imagePosition || "object-center"
                                        )}
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-display uppercase tracking-wide text-primary transition-colors group-hover:text-accent">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary/70">
                                        {member.role}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
