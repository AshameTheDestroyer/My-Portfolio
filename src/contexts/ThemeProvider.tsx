import {
    useState,
    useEffect,
    useContext,
    createContext,
    type PropsWithChildren,
} from "react";
import { flushSync } from "react-dom";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = PropsWithChildren<{
    storageKey?: string;
    defaultTheme?: Theme;
}>;

export type ThemeProviderState = {
    theme: Theme;
    isDarkTheme: boolean;
    setTheme: (theme: Theme, buttonRect?: DOMRect) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    isDarkTheme:
        typeof window != "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false,
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    storageKey = "theme",
    defaultTheme = "system",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme == "system") {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        isDarkTheme:
            theme == "dark" ||
            (theme == "system" &&
                typeof window != "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches),
        setTheme: (theme: Theme, buttonRect?: DOMRect) => {
            localStorage.setItem(storageKey, theme);
            document
                .startViewTransition(() => flushSync(() => setTheme(theme)))
                .ready.then(() => {
                    const { top, left, width, height } = buttonRect ?? {
                        top: window.innerHeight / 2,
                        left: window.innerWidth / 2,
                        width: 0,
                        height: 0,
                    };

                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0px at ${left + width / 2}px ${
                                    top + height / 2
                                }px)`,
                                `circle(${Math.hypot(
                                    Math.max(left, window.innerWidth - left),
                                    Math.max(top, window.innerHeight - top)
                                )}px at ${left + width / 2}px ${
                                    top + height / 2
                                }px)`,
                            ],
                        },
                        {
                            duration: 500,
                            easing: "ease-in-out",
                            pseudoElement: "::view-transition-new(root)",
                        }
                    );
                });
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context == undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
