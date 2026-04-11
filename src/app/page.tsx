import { Hero } from "@/components/sections/hero";
import { TeamComparison } from "@/components/sections/team-comparison";
import { SocialProof } from "@/components/sections/social-proof";
import { CredentialsBar } from "@/components/sections/credentials-bar";
import { FinalCapture } from "@/components/sections/final-capture";
import { PainSection } from "@/components/sections/pain-section";
import { TrustSection } from "@/components/sections/trust-section";

export default function Home() {
    return (
        <>
            <Hero />
            <CredentialsBar />
            <PainSection />
            <FinalCapture />
            <TeamComparison />
            <SocialProof />
            <TrustSection />
        </>
    );
}
