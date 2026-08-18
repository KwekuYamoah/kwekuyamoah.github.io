import { useState } from 'react'
import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    isTopPage: boolean;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({isTopPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const flexStartBetween = "flex items-start justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopPage ? "" :  "py-6 bg-black drop-shadow"


    const handleMenuToggle = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    const cvUrl = `${import.meta.env.BASE_URL}Kweku_Yamoah_CV.pdf`;

    return (
        <nav>
            {/* Desktop View */}
            <div className={`${flexBetween} ${isAboveMediumScreens ? '': navbarBackground} fixed top-0 z-40 w-full py-6`}>
                <div className={ `mx-auto w-full px-12 ${isAboveMediumScreens ? flexStartBetween : flexBetween}`}>
                    {/* Left Side */}
                    <div className='w-24'> 
                        <img alt="logo" src={Logo}  className='w-full h-full'/>
                    </div>

                    {/* Right Side */}
                    {isAboveMediumScreens ? (
                        <div className='flex flex-col gap-3'>
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
                                className="text-gray-50 font-bold font-montserrat text-xs underline underline-offset-4 transition duration-300 hover:text-gray-20"
                            >
                                CV
                            </a>
                        </div>
                        )
                        :
                        (
                             <button
                                className=""
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>

                        )
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className={`fixed right-0 bottom-0 z-50 h-full w-full bg-black`}>
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400"/>
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
                            className="text-gray-50 font-bold font-montserrat text-xl underline underline-offset-4 transition duration-300 hover:text-gray-20"
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