import { type FC } from "react";
import { Home } from "./pages/Home";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeProvider";

import "./global.css";

export const Main: FC = () => {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
};

createRoot(document.getElementById("root")!).render(<Main />);
