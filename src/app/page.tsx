import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SocialProof } from "@/components/sections/social-proof";
import { Compliance } from "@/components/sections/compliance";
import { Faq } from "@/components/sections/faq";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <Compliance />
            <SocialProof />
            <Faq />
        </>
    );
}
