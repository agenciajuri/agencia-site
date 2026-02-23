import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Methodology } from "@/components/sections/methodology";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SocialProof } from "@/components/sections/social-proof";
import { Compliance } from "@/components/sections/compliance";
import { Faq } from "@/components/sections/faq";

export default function Home() {
    return (
        <>
            <Hero />
            <PainPoints />
            <Methodology />
            <ServicesPreview />
            <Compliance />
            <SocialProof />
            <Faq />
        </>
    );
}
