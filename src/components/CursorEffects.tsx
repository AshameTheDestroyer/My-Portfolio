import { useEffect, useMemo, useRef, type FC } from "react";

export const CursorEffects: FC = () => {
    const trailContainerReference = useRef<HTMLDivElement>(null);
    const trails = useMemo(() => new Array(3).fill(null), []);
    const areTrailsLocked = useRef(false);

    useEffect(() => {
        document.addEventListener("click", ClickHandler);
        document.addEventListener("mousemove", MoveHandler);

        return () => {
            document.removeEventListener("click", ClickHandler);
            document.removeEventListener("mousemove", MoveHandler);
        };
    }, []);

    function ClickHandler() {
        const audio = new Audio("/audios/click.mp3");
        audio.currentTime = 0.75;
        audio.play();

        document.documentElement.classList.add("cursor-clicked");

        setTimeout(() => {
            document.documentElement.classList.remove("cursor-clicked");
        }, 150);
    }

    function MoveHandler(e: MouseEvent) {
        if (
            trailContainerReference.current == null ||
            areTrailsLocked.current
        ) {
            return;
        }

        const trailElements = [
            ...trailContainerReference.current.children,
        ] as HTMLElement[];

        areTrailsLocked.current = true;

        trailElements.forEach((trailElement, i) => {
            setTimeout(() => {
                trailElement.style.top = `${e.clientY}px`;
                trailElement.style.left = `${e.clientX}px`;
            }, i * 50);
        });

        setTimeout(() => {
            areTrailsLocked.current = false;
        }, 25);
    }

    return (
        <div ref={trailContainerReference}>
            {trails.map((_, i) => (
                <div
                    key={i}
                    className={[
                        "fixed rounded-full not-dark:invert top-1/2 left-1/2 -translate-1/4 pointer-events-none mix-blend-difference z-1000 transition-all duration-75",
                        [
                            "bg-primary-500/50 size-7",
                            "bg-primary-500/25 size-5",
                            "bg-primary-500/15 size-3",
                        ][i],
                    ].join(" ")}
                />
            ))}
        </div>
    );
};
