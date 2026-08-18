import { useEffect, useState } from "react";

/**
 * Whether the always-dark hero is still behind a given point of the viewport.
 *
 * The navbar and footer are fixed, so they float over the hero for its full
 * height and then over ordinary (theme-aware) sections after it. They can't
 * simply follow the active theme: in light mode that would put dark text on
 * the dark hero photo. This reports which of the two they're currently over,
 * so they can pin themselves to light-on-dark while the hero is behind them.
 *
 * `scrollY === 0` is not a usable substitute — the hero is a full viewport
 * tall, so it stays behind the navbar for ~100vh of scrolling.
 *
 * @param probeY   Viewport-space Y coordinate to test, in px.
 * @param fromBottom Measure `probeY` up from the bottom of the viewport
 *                   instead of down from the top (for bottom-anchored chrome).
 */
const useIsOverHero = (probeY: number, fromBottom = false) => {
    const [isOverHero, setIsOverHero] = useState(true);

    useEffect(() => {
        const measure = () => {
            const hero = document.getElementById("hero");
            if (!hero) {
                setIsOverHero(false);
                return;
            }
            const y = fromBottom ? window.innerHeight - probeY : probeY;
            setIsOverHero(hero.getBoundingClientRect().bottom > y);
        };

        measure();
        window.addEventListener("scroll", measure, { passive: true });
        window.addEventListener("resize", measure);
        return () => {
            window.removeEventListener("scroll", measure);
            window.removeEventListener("resize", measure);
        };
    }, [probeY, fromBottom]);

    return isOverHero;
};

export default useIsOverHero;
