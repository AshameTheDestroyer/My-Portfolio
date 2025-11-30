import type { FC } from "react";
import { HeroSection } from "../components/HeroSection";

export const Home: FC = () => {
    return (
        <main className="flex place-content-center">
            <HeroSection />
        </main>
    );
};
