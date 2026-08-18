import { useState, CSSProperties } from 'react'
import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import useTheme from '@/hooks/useTheme';
import useIsOverHero from '@/hooks/useIsOverHero';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const flexStartBetween = "flex items-start justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();
    // The nav column is ~200px tall on desktop and a single ~72px row on
    // mobile; probe its bottom edge to know which surface it sits on.
    const isOverHero = useIsOverHero(isAboveMediumScreens ? 200 : 72);

    // Desktop nav never takes a background — it floats over the page, which
    // is the whole look. Only the mobile row (short, and crossing content at
    // full width) gets a backdrop, and only once it has left the hero.
    const navbarBackground =
        !isAboveMediumScreens && !isOverHero ? "bg-chrome/95 backdrop-blur-sm drop-shadow" : "";

    // Over the hero the nav is on an always-dark surface regardless of theme,
    // so pin its inks to the dark values instead of following the theme.
    const heroPinnedStyle = isOverHero
        ? ({
              "--color-ink": "255 255 255",
              "--color-ink-soft": "232 232 232",
              "--color-ink-muted": "130 130 130",
          } as CSSProperties)
        : undefined;


    const handleMenuToggle = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    const cvUrl = `${import.meta.env.BASE_URL}Kweku_Yamoah_CV.pdf`;

    return (
        <nav>
            {/* Desktop View */}
            <div style={heroPinnedStyle} className={`${flexBetween} ${navbarBackground} fixed top-0 z-40 w-full py-6`}>
                <div className={ `mx-auto w-full px-12 ${isAboveMediumScreens ? flexStartBetween : flexBetween}`}>
                    {/* Left Side */}
                    <div className='w-24'>
                        <img alt="logo" src={Logo}  className={`${isOverHero ? '' : 'nav-logo'} w-full h-full transition-[filter] duration-300`}/>
                    </div>

                    {/* Right Side */}
                    {isAboveMediumScreens ? (
                        <div className='flex flex-col gap-3 items-end'>
                            <Link
                                page="ABOUT"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                menuFontSize='text-xs'
                            />
                            <Link
                                page="PROJECTS"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                menuFontSize='text-xs'
                            />
                            <Link
                                page="RESEARCH"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                menuFontSize='text-xs'
                            />
                            <Link
                                page="SKILLS"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                menuFontSize='text-xs'
                            />
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ink-muted font-bold font-montserrat text-xs underline underline-offset-4 transition duration-300 hover:text-ink-soft"
                            >
                                CV
                            </a>
                            <button
                                onClick={toggleTheme}
                                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                                className="text-ink-muted transition duration-300 hover:text-ink-soft"
                            >
                                {theme === "dark" ? (
                                    <SunIcon className="h-4 w-4" />
                                ) : (
                                    <MoonIcon className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        )
                        :
                        (
                             <div className="flex items-center gap-4">
                                <button
                                    onClick={toggleTheme}
                                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    {theme === "dark" ? (
                                        <SunIcon className="h-6 w-6 text-ink" />
                                    ) : (
                                        <MoonIcon className="h-6 w-6 text-ink" />
                                    )}
                                </button>
                                <button
                                    className=""
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-ink" />
                                </button>
                             </div>

                        )
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className={`fixed right-0 bottom-0 z-50 h-full w-full bg-chrome`}>
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-ink-muted"/>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col items-center justify-center gap-12">
                        <Link 
                            page="ABOUT" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            menuFontSize='text-xl'
                            onClick={handleMenuToggle}
                        />
                        <Link 
                            page="PROJECTS" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            menuFontSize='text-xl'
                            onClick={handleMenuToggle}
                        />
                        <Link 
                            page="RESEARCH" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            menuFontSize='text-xl'
                            onClick={handleMenuToggle}
                        />
                        <Link
                            page="SKILLS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            menuFontSize='text-xl'
                            onClick={handleMenuToggle}
                        />
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleMenuToggle}
                            className="text-ink-muted font-bold font-montserrat text-xl underline underline-offset-4 transition duration-300 hover:text-ink-soft"
                        >
                            CV
                        </a>
                    </div>
                </div>

            )}
        </nav>
    )
}

export default Navbar