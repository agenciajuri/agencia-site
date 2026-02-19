export const klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: 'default',
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'agenciajuri_consent',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    translations: {
        pt: {
            consentModal: {
                title: 'Privacidade e Cookies',
                description: 'Nós utilizamos cookies para personalizar sua experiência e analisar nosso tráfego.',
                privacyPolicy: {
                    name: 'política de privacidade',
                    text: 'Para saber mais, leia nossa {privacyPolicy}.',
                },
            },
            consentNotice: {
                changeDescription: 'Houve alterações desde sua última visita, por favor atualize seu consentimento.',
                description: 'Coletamos e processamos suas informações pessoais para os seguintes propósitos: {purposes}.',
                learnMore: 'Personalizar',
            },
            purposes: {
                analytics: 'Análise de dados',
                marketing: 'Marketing e Publicidade',
            },
            ok: 'Aceitar tudo',
            decline: 'Recusar',
            save: 'Salvar preferências',
        },
    },
    services: [
        {
            name: 'google-analytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                [/^_ga/i, '/', 'agenciajuri.com.br'],
                [/^_gid/i, '/', 'agenciajuri.com.br'],
            ],
            required: false,
            optOut: false,
            onlyOnce: true,
        },
    ],
};
