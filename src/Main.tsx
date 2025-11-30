import { Home } from "./Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Home />
    </StrictMode>
);
