import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { CITIES, CitySlug } from "@/lib/cities";

interface Props {
    params: {
        city: string;
    };
}

export function generateMetadata({ params }: Props): Metadata {
    const cityName = CITIES[params.city as CitySlug];

    if (!cityName) {
        return {
            title: "Marketing Jurídico | Agência Juri"
        }
    }

    return {
        title: `Agência de Marketing Jurídico em ${cityName} | Agência Juri`,
        description: `Gestão de tráfego e captação de clientes para advogados em ${cityName}. Consultoria especializada em OAB e crescimento de escritório.`,
    };
}

export function generateStaticParams() {
    return Object.keys(CITIES).map((city) => ({
        city,
    }));
}

export default function CityPage({ params }: Props) {
    const cityName = CITIES[params.city as CitySlug];

    if (!cityName) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            <section className="pt-32 pb-16 container px-4 md:px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                        <MapPin className="w-4 h-4" />
                        Atendimento em {cityName}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-primary mb-6">
                        Marketing Jurídico Especializado em <span className="text-accent">{cityName}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Conhecemos o mercado jurídico de {cityName}. Estruturamos a captação de clientes do seu escritório com tráfego pago, LP de alta conversão e compliance OAB.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={`${SITE_CONFIG.links.whatsapp}?text=Olá, sou advogado em ${cityName} e gostaria de uma consultoria.`} target="_blank">
                            Falar com Especialista em {cityName} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="py-20 bg-secondary/30 border-y border-border">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-12">
                        Por que escritório em {cityName} nos escolhem?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-4">Competitividade Local</h3>
                            <p className="text-muted-foreground mb-6">
                                O mercado de {cityName} tem particularidades. Sabemos quais termos (keywords) são mais caros e onde estão as oportunidades de &quot;oceano azul&quot; na sua região.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-accent" /> Análise da concorrência local</li>
                                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-accent" /> Custo por Lead (CPL) otimizado</li>
                                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-accent" /> Posicionamento geográfico estratégico</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-4">Atendimento Remoto ou Presencial?</h3>
                            <p className="text-muted-foreground mb-6">
                                Nossa operação é 100% digital, atendendo {cityName} com a mesma proximidade de uma agência local, mas com a expertise de quem atende o Brasil inteiro.
                            </p>
                            <div className="bg-background border border-border p-6">
                                <p className="text-sm italic text-muted-foreground">
                                    &quot;A advocacia mudou. Seu cliente de {cityName} está no Google procurando solução agora. Se você não aparecer, seu concorrente aparece.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
