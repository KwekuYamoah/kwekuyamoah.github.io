type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
    menuFontSize: string;
    onClick?: ()=> void;
}

function Link({ page, selectedPage, setSelectedPage, menuFontSize, onClick }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href")?.slice(1);
        const target = id ? document.getElementById(id) : null;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });

        console.log(`Link clicked: ${lowerCasePage}`);
        setSelectedPage(lowerCasePage);
        if (onClick) {
            onClick(); // Call onClick handler if provided
        }
    };

    return (
        <a
            className={`${selectedPage === lowerCasePage ? "text-ink-soft" : "text-ink-muted"} font-bold font-montserrat ${menuFontSize} underline underline-offset-4 transition duration-300 hover:text-ink-soft`}
            href={`#${lowerCasePage}`}
            onClick={handleSmoothScroll}
        >
            {page}
        </a>
    )
}

export default Link;
