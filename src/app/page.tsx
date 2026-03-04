import { Hero } from "@/components/sections/hero";
import { PaidTraffic } from "@/components/sections/paid-traffic";
import { PainPoints } from "@/components/sections/pain-points";
import { ConversionSystem } from "@/components/sections/conversion-system";
import { TeamComparison } from "@/components/sections/team-comparison";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SocialProof } from "@/components/sections/social-proof";
import { Compliance } from "@/components/sections/compliance";
import { Faq } from "@/components/sections/faq";

export default function Home() {
    return (
        <>
            <Hero />
            <PaidTraffic />
            <PainPoints />
            <ConversionSystem />
            <TeamComparison />
            <ServicesPreview />
            <Compliance />
            <SocialProof />
            <Faq />
        </>
    );
}
