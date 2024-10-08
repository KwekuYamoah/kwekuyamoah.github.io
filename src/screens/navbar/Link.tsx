import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
    menuFontSize: string;
    onClick?: ()=> void;
}

function Link({ page, selectedPage, setSelectedPage, menuFontSize, onClick }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-gray-20" : "text-gray-50"} font-bold font-montserrat ${menuFontSize} underline underline-offset-4 transition duration-300 hover:text-gray-20`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                console.log(`Link clicked: ${lowerCasePage}`);
                setSelectedPage(lowerCasePage);
                if (onClick) {
                    onClick(); // Call onClick handler if provided
                }
            }}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;
