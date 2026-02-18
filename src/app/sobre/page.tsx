import type { Metadata } from "next";
import { Users, Target, Rocket } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Sobre a Agência Juri | Quem Somos",
    description: "Nosso time combina visão jurídica, engenharia de marketing e execução criativa. Conheça quem está por trás do seu crescimento.",
};

const TEAM = [
    {
        name: "Airton L. Souza",
        role: "CTO & Founder",
        bio: "Engenharia de dados aplicada ao marketing jurídico.",
        image: "/airton.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Ismar Junior",
        role: "Comercial e Jurídico",
        bio: "Advogado especialista em compliance e negociação.",
        image: "/ismarjr.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Guilherme Iachitzki",
        role: "Comercial Operacional",
        bio: "Especialista em expansão de carteira e fechamento.",
        image: "/guilherme.jpg",
        imagePosition: "object-[50%_25%]"
    },
    {
        name: "Lucas Mazakenji",
        role: "Growth Marketing e Designer",
        bio: "Criatividade focada em performance e branding.",
        image: "/lucasmazakenji.PNG",
        imagePosition: "object-[50%_25%]"
    }
];

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-primary mb-6">
                    Quem Somos
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    &quot;Nosso time combina visão jurídica, engenharia de marketing e execução prática para construir captação ética e mensurável.&quot;
                </p>
            </section>

            <section className="py-20 border-y border-border">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                        <div className="p-8 border border-transparent hover:border-border transition-colors">
                            <div className="inline-block p-4 bg-secondary rounded-full mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Missão</h3>
                            <p className="text-muted-foreground">Profissionalizar a captação de clientes na advocacia com ética e dados.</p>
                        </div>
                        <div className="p-8 border border-transparent hover:border-border transition-colors">
                            <div className="inline-block p-4 bg-secondary rounded-full mb-6">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Visão</h3>
                            <p className="text-muted-foreground">Ser a referência nacional em growth hacking para escritórios jurídicos.</p>
                        </div>
                        <div className="p-8 border border-transparent hover:border-border transition-colors">
                            <div className="inline-block p-4 bg-secondary rounded-full mb-6">
                                <Rocket className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3">Valores</h3>
                            <p className="text-muted-foreground">Transparência radical, processo acima de sorte e compliance inegociável.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-12 text-center">
                        Liderança
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM.map((member) => (
                            <div key={member.name} className="group relative overflow-hidden bg-secondary/20 border border-border">
                                {/* Image Placeholder - relying on generic div for now as no images provided */}
                                {/* Image Placeholder or Actual Image */}
                                <div className="aspect-square bg-secondary relative">
                                    {(member as any).image ? (
                                        <Image
                                            src={(member as any).image}
                                            alt={member.name}
                                            fill
                                            className={cn(
                                                "object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
                                                (member as any).imagePosition || "object-center"
                                            )}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-display text-4xl uppercase">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-display uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
