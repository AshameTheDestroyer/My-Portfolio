import { type FC } from "react";
import { Home } from "./pages/Home";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { CursorEffects } from "./components/CursorEffects";

import "./global.css";

export const Main: FC = () => {
    return (
        <ThemeProvider>
            <Home />
            <CursorEffects />
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
