import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso | Agência Juri",
    description: "Regras de utilização do nosso site.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen py-32 container px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-primary mb-8">
                Termos de Uso
            </h1>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    Ao acessar o site da Agência Juri, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
                </p>

                <h3>1. Licença de Uso</h3>
                <p>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Agência Juri, apenas para visualização transitória pessoal e não comercial.
                </p>

                <h3>2. Isenção de Responsabilidade</h3>
                <p>
                    Os materiais no site da Agência Juri são fornecidos &apos;como estão&apos;. A Agência Juri não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.
                </p>

                <h3>3. Limitações</h3>
                <p>
                    Em nenhum caso a Agência Juri ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
                </p>

                <h3>4. Modificações</h3>
                <p>
                    A Agência Juri pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>

                <p className="mt-8 text-sm text-muted-foreground">
                    Última atualização: Fevereiro de 2026.
                </p>
            </div>
        </div>
    );
}
