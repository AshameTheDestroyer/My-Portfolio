import { Home } from "./pages/Home";
import { useEffect, type FC } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeProvider";

import "./global.css";

export const Main: FC = () => {
    function PlayClickAudio() {
        const audio = new Audio("/audios/click.mp3");
        audio.currentTime = 0.75;
        audio.play();
    }

    useEffect(() => {
        const w = window as unknown as {
            __clickAudioHandler?: (e: MouseEvent) => void;
        };

        if (w.__clickAudioHandler != null) {
            document.removeEventListener("click", w.__clickAudioHandler);
        }

        document.addEventListener("click", PlayClickAudio);
        w.__clickAudioHandler = PlayClickAudio;

        return () => {
            document.removeEventListener("click", PlayClickAudio);
            if (w.__clickAudioHandler == PlayClickAudio) {
                w.__clickAudioHandler = undefined;
            }
        };
    }, []);

    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
};

const w = window as unknown as {
    __reactRoot?: ReturnType<typeof createRoot>;
};

if (w.__reactRoot == null) {
    w.__reactRoot = createRoot(document.getElementById("root")!);
}

w.__reactRoot.render(<Main />);
