import type { FC } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";

export const Home: FC = () => {
    return (
        <main className="flex flex-col place-content-center p-8 gap-8 max-w-300 w-full mx-auto">
            <Header />
            <HeroSection />
        </main>
    );
};
