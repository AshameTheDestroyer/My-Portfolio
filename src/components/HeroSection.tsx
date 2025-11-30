import { useMemo, type FC } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

export const HeroSection: FC = () => {
    const { isDarkTheme, setTheme } = useTheme();

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
            <header className="flex gap-4 justify-between">
                <div className="font-extrabold overflow-hidden pointer-events-none text-background-100 dark:text-foreground-950 flex text-2xl bg-primary-600 aspect-square w-min place-content-center place-items-center p-1">
                    <span className="scale-160 -rotate-45">HW</span>
                </div>
                <nav>
                    <ul className="flex gap-4 mt-4">
                        {sections.map((section, i) => (
                            <li
                                key={i}
                                className="hover:underline font-bold cursor-pointer"
                            >
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
                <button
                    className="place-self-center"
                    onClick={(_e) => setTheme(isDarkTheme ? "light" : "dark")}
                >
                    {isDarkTheme ? <SunIcon /> : <MoonIcon />}
                </button>
            </header>
            <section></section>
            <footer></footer>
        </main>
    );
};
