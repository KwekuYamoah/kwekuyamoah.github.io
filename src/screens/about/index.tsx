import { motion } from "framer-motion";
import RotatingPhrases from "../../components/RotatingPhrases";
import { GlobeAltIcon, CpuChipIcon, UserGroupIcon, AcademicCapIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import FloatingParticles from "../../components/FloatingParticles";
import HeadText from "@/shared/HeadText";
import HeroDark from "@/assets/hero-dark.jpg";
import HeroLight from "@/assets/hero-light.jpg";

type Props = {
    setSelectedPage: (value: string) => void;
}

const educationHistory = [
    {
        id: 1,
        degree: "Ph.D. in Computer & Information Science & Engineering",
        institution: "University of Florida",
        institutionLink: "https://www.cise.ufl.edu/",
        dateRange: "Aug 2025 – Present",
        location: "Gainesville, FL",
        icon: AcademicCapIcon,
    },
    {
        id: 2,
        degree: "B.Sc. in Computer Science",
        institution: "Ashesi University",
        institutionLink: "https://www.ashesi.edu.gh/",
        dateRange: "Sep 2018 – May 2022",
        location: "Berekuso, Ghana",
        icon: BuildingLibraryIcon,
    },
];

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.2 },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const growLine = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const linkClass =
    "text-accent underline underline-offset-4 decoration-accent/60 hover:text-ink-soft transition-colors duration-300";

const About = ({ setSelectedPage }: Props) => {

    return (
        <section id="about" className="bg-canvas theme-surface mx-auto">
            {/* The hero is a portrait illustration, one per theme, sitting on a
                surface whose color is sampled from the illustration's own flat
                backdrop — so the image is letterboxed (never cropped, head and
                shoulders always whole) yet has no visible edges. */}
            <motion.div
                id="hero"
                className="relative w-full min-h-screen overflow-hidden bg-hero theme-surface flex flex-col md:block"
                onViewportEnter={() => setSelectedPage("about")}
                viewport={{ amount: 0.85 }}
            >
                {/* Name / greeting / focus. In flow above the portrait on
                    mobile, a left-hand column beside it on desktop. */}
                <div className="relative z-20 flex flex-1 flex-col justify-center gap-8 px-10 pt-32 pb-10 md:absolute md:inset-0 md:gap-12 md:pl-24 md:pr-[48%] md:pt-0 md:pb-0">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative text-2xl md:text-4xl font-semibold">
                            <FloatingParticles />
                            <p className="tracking-super-wide text-ink"><span className="text-accent">K</span>WEKU</p>
                            <p className="pl-5 py-3 tracking-super-wide text-ink"><span className="text-accent">A</span>NDOH</p>
                            <p className="pl-10 tracking-super-wide text-ink"><span className="text-accent">Y</span>AMOAH</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4 items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <RotatingPhrases />
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Low-Resource NLP", icon: GlobeAltIcon },
                                { label: "Neuro-Symbolic AI", icon: CpuChipIcon },
                                { label: "Multi-Agent Systems", icon: UserGroupIcon },
                            ].map(({ label, icon: Icon }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-2 text-sm md:text-base px-4 py-1.5 rounded-md backdrop-blur-sm border border-hairline/70 bg-ink/10 text-ink-soft hover:bg-ink/20 transition-colors duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                    {label}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-0 h-[46vh] w-full shrink-0 md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[48%]">
                    <img
                        src={HeroDark}
                        alt="Illustrated portrait of Kweku Andoh Yamoah"
                        className="hero-portrait-dark w-full h-full object-contain object-bottom"
                    />
                    <img
                        src={HeroLight}
                        alt="Illustrated portrait of Kweku Andoh Yamoah"
                        className="hero-portrait-light w-full h-full object-contain object-bottom"
                    />
                </div>

                {/* Shades the portrait and the surface behind it by exactly the
                    same amount, so it adds depth without exposing a seam. */}
                <div className="hero-vignette pointer-events-none absolute inset-0 z-10"></div>
                {/* Dissolves the hero into the header strip below it. */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 md:h-40 bg-gradient-to-b from-transparent via-transparent to-chrome"></div>
            </motion.div>

            {/* Background: bio statement + education history */}
            <div className="border-b border-hairline">
                <HeadText backgroundColor="bg-chrome">Background</HeadText>
            </div>

            <div className="border-b border-hairline">
                <motion.div
                    className="px-24 md:px-40 pt-8 pb-8 text-ink font-black text-justify font-satoshi text-xl leading-loose md:leading-relaxed md:text-3xl flex flex-wrap"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <p>
                        <motion.span variants={fadeInUp}>I'm a PhD student at the </motion.span>
                        <motion.a variants={fadeInUp} href="https://www.ufl.edu/" target="_blank" rel="noopener noreferrer" className={linkClass}>University of Florida</motion.a>
                        <motion.span variants={fadeInUp}>, in the </motion.span>
                        <motion.a variants={fadeInUp} href="https://www.cise.ufl.edu/" target="_blank" rel="noopener noreferrer" className={linkClass}>Computer & Information Science & Engineering</motion.a>
                        <motion.span variants={fadeInUp}> program, working under Professor </motion.span>
                        <motion.a variants={fadeInUp} href="https://www.emmanueldorley.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Emmanuel Dorley</motion.a>
                        <motion.span variants={fadeInUp}> in the Intelligent Agents Research Group. I investigate neuro-symbolic and multi-agent approaches to </motion.span>
                        <motion.span variants={fadeInUp} className="text-accent">NLP</motion.span>
                        <motion.span variants={fadeInUp}> in low-resource contexts, building systems that use structured linguistic knowledge for efficient, reliable, and controllable language understanding and generation, with a focus on African languages.</motion.span>
                    </p>
                </motion.div>

                <motion.div
                    className="px-24 md:px-40 pb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {educationHistory.map((edu, idx) => (
                        <motion.div key={edu.id} variants={fadeInUp} className="flex gap-6 md:gap-10">
                            <div className="flex flex-col items-center">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 border border-accent flex items-center justify-center">
                                    <edu.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                                </div>
                                {idx !== educationHistory.length - 1 && (
                                    <motion.div
                                        variants={growLine}
                                        className="w-px flex-1 bg-hairline my-2 origin-top"
                                    />
                                )}
                            </div>
                            <div className={idx !== educationHistory.length - 1 ? "pb-12" : ""}>
                                <h3 className="text-ink font-satoshi font-bold text-lg md:text-2xl">{edu.degree}</h3>
                                <a
                                    href={edu.institutionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-1 text-ink-soft font-montserrat text-sm md:text-base underline underline-offset-4 hover:text-accent transition-colors duration-300"
                                >
                                    {edu.institution}
                                </a>
                                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-ink-muted text-xs md:text-sm font-montserrat uppercase tracking-wide">
                                    <span>{edu.dateRange}</span>
                                    <span>•</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
