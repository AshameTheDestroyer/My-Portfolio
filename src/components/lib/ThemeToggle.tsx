import { type FC, useRef } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

export type ThemeToggleProps = {
    id?: string;
    className?: string;
};

export const ThemeToggle: FC<ThemeToggleProps> = ({ id, className }) => {
    const { isDarkTheme, setTheme } = useTheme();
    const buttonReference = useRef<HTMLButtonElement>(null);

    return (
        <button
            id={id}
            disabled
            ref={buttonReference}
            className={className}
            onClick={(_e) =>
                setTheme(
                    isDarkTheme ? "light" : "dark",
                    buttonReference.current?.getBoundingClientRect()
                )
            }
        >
            {isDarkTheme ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};
