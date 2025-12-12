import { useMemo, type FC } from "react";
import { ThemeToggle } from "./lib/ThemeToggle";

export const HeroSection: FC = () => {
    const sections = useMemo(
        () => [
            "Home",
            "Skills",
            "About Me",
            "Projects",
            "Education",
            "Experience",
            "Certificates",
        ],
        []
    );

    return (
        <main className="max-w-300 w-full p-8">
            <header className="flex gap-4 pr-3 justify-between py-[2px] translate-y-[-2px]">
                <div className="font-extrabold w-14.25 scale-103 overflow-hidden text-background-100 dark:text-foreground-950 flex text-2xl bg-primary-600 aspect-square place-content-center place-items-center p-1">
                    <span className="scale-190 -rotate-45 pointer-events-none">
                        HW
                    </span>
                </div>
                <nav>
                    <ul className="flex gap-4 mt-4">
                        {sections.map((section, i) => (
                            <li key={i} className="hover:underline font-bold">
                                <a
                                    href={`#${section
                                        .toLowerCase()
                                        .replaceAll(" ", "-")}`}
                                >
                                    {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle className="place-self-center" />
            </header>
            <section></section>
            <footer></footer>
        </main>
    );
};
