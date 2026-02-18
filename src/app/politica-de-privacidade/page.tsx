import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Agência Juri",
    description: "Como tratamos os seus dados pessoais.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-background min-h-screen py-32 container px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-primary mb-8">
                Política de Privacidade
            </h1>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    Esta Política de Privacidade descreve como a Agência Juri coleta, usa e protege suas informações pessoais ao utilizar nosso site.
                </p>

                <h3>1. Coleta de Dados</h3>
                <p>
                    Coletamos informações que você nos fornece voluntariamente ao entrar em contato via WhatsApp ou formulários, como nome, e-mail e telefone.
                </p>

                <h3>2. Uso das Informações</h3>
                <p>
                    Utilizamos seus dados exclusivamente para:
                </p>
                <ul>
                    <li>Responder às suas solicitações de serviço.</li>
                    <li>Enviar propostas comerciais solicitadas.</li>
                    <li>Melhorar nossa comunicação e serviços.</li>
                </ul>

                <h3>3. Compartilhamento</h3>
                <p>
                    Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. Seus dados podem ser compartilhados apenas com prestadores de serviço essenciais para nossa operação (ex: ferramentas de CRM), sob estrito sigilo.
                </p>

                <h3>4. Cookies</h3>
                <p>
                    Utilizamos cookies para análise de tráfego (Google Analytics) e performance de campanhas (Google Ads e Meta Ads). Você pode gerenciar os cookies nas configurações do seu navegador.
                </p>

                <h3>5. Seus Direitos</h3>
                <p>
                    Você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos.
                </p>

                <p className="mt-8 text-sm text-muted-foreground">
                    Última atualização: Fevereiro de 2026.
                </p>
            </div>
        </div>
    );
}
