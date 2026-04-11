import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-secondary py-12 md:py-16 border-t border-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative w-56 h-28 mb-8">
                            <Image
                                src="/logo.svg"
                                alt="Agência Juri"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-secondary/80 max-w-xs leading-relaxed">
                            Marketing jurídico com método, mensuração e compliance. Estrutura profissional para escritórios que querem crescer com segurança.
                        </p>
                        <p className="text-secondary/50 text-xs leading-relaxed border-t border-white/10 pt-4 mt-4">
                            Nota: A advocacia é atividade de meio, não de fim. Não prometemos resultados de causa. Respeitamos rigorosamente o Provimento 205/2021 da OAB.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase tracking-wide text-white">Navegação</h3>
                        <ul className="space-y-2">
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
                            <li><Link href="/como-trabalhamos" className="hover:text-white transition-colors">Metodologia</Link></li>
                            <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                            <li><a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase tracking-wide text-white">Legal & Compliance</h3>
                        <ul className="space-y-2">
                            <li><Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                            <li><Link href="/servicos/marketing-juridico-compliance" className="hover:text-white transition-colors">Compliance OAB</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase tracking-wide text-white">Contato</h3>
                        <address className="not-italic space-y-2 text-secondary/80">
                            <p>{SITE_CONFIG.contact.address}</p>
                            <p className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span>Presença regional em Goiânia, Anápolis, Aparecida e Rio Verde</span>
                            </p>
                            <p>{SITE_CONFIG.contact.phone}</p>
                            <p>{SITE_CONFIG.contact.hours}</p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/60">
                    <p>© {year} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4">
                        <span>CNPJ: 47.593.922/0001-13</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
