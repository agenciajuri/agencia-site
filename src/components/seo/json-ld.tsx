import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Agência Juri",
        "image": "https://agenciajuri.com.br/og-image.jpg", // Replace with actual image
        "telephone": SITE_CONFIG.contact.phone,
        "url": "https://agenciajuri.com.br",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paulista, 1000", // Placeholder
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01310-100", // Placeholder
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.561684,
            "longitude": -46.655981
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            SITE_CONFIG.links.instagram,
            SITE_CONFIG.links.linkedin
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
