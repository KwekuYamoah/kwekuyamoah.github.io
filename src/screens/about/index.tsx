import { motion } from "framer-motion";
import RotatingPhrases from "../../components/RotatingPhrases";
import { GlobeAltIcon, BoltIcon, Squares2X2Icon, AcademicCapIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import FloatingParticles from "../../components/FloatingParticles";
import HeadText from "@/shared/HeadText";

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
    "text-primary-500 underline underline-offset-4 decoration-primary-500/60 hover:text-gray-20 transition-colors duration-300";

const About = ({ setSelectedPage }: Props) => {

    return (
        <section id="about" className="bg-secondary-500 mx-auto">
            <div className="relative bg-about-image bg-cover bg-center md:h-screen w-full">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                    className="relative mx-auto px-12 flex items-center justify-center"
                    onViewportEnter={() => setSelectedPage("about")}
                    viewport={{ amount: 0.85 }}
                >
                    <div className="mt-10 flex flex-col justify-center items-center gap-16 md:px-36 ">
                        <motion.div
                            className="md:w-full md:flex md:justify-start md:pl-12 md:pt-28"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="relative text-xl font-semibold pt-10 md:pt-0 md:-translate-x-80">
                                <FloatingParticles />
                                <p className="tracking-super-wide text-white"><span className="text-primary-500">K</span>WEKU</p>
                                <p className="pl-5 py-3 tracking-super-wide text-white"><span className="text-primary-500">A</span>NDOH</p>
                                <p className="pl-10 tracking-super-wide text-white"><span className="text-primary-500">Y</span>AMOAH</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="h-5/6 md:w-full md:flex md:justify-end"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="md:absolute md:right-10 md:top-[80vh] flex flex-col gap-4 items-end">
                                <RotatingPhrases />
                                <div className="flex flex-wrap gap-3 justify-end">
                                    {[
                                        { label: "Multilingual NLP", icon: GlobeAltIcon, translation: "Multiple languages" },
                                        { label: "Efficient Language Generation", icon: BoltIcon, translation: "Fast text creation" },
                                        { label: "Multimodal Learning", icon: Squares2X2Icon, translation: "Text + Image" },
                                    ].map(({ label, icon: Icon }) => (
                                        <span
                                            key={label}
                                            className="flex items-center gap-2 text-sm md:text-base px-4 py-1.5 rounded-md backdrop-blur-sm bg-white/15 text-gray-20 hover:bg-white/20 transition-colors duration-300"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Background: bio statement + education history */}
            <div className="border-b border-gray-500">
                <HeadText backgroundColor="bg-secondary-500">Background</HeadText>
            </div>

            <motion.div
                className="px-24 md:px-40 my-14 text-white font-black text-justify font-satoshi text-xl leading-loose md:leading-relaxed md:text-3xl flex flex-wrap"
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
                    <motion.span variants={fadeInUp} className="text-primary-500">NLP</motion.span>
                    <motion.span variants={fadeInUp}> in low-resource contexts, building systems that use structured linguistic knowledge for efficient, reliable, and controllable language understanding and generation, with a focus on African languages.</motion.span>
                </p>
            </motion.div>

            <motion.div
                className="px-24 md:px-40 pb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                {educationHistory.map((edu, idx) => (
                    <motion.div key={edu.id} variants={fadeInUp} className="flex gap-6 md:gap-10">
                        <div className="flex flex-col items-center">
                            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-500/10 border border-primary-500 flex items-center justify-center">
                                <edu.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-500" />
                            </div>
                            {idx !== educationHistory.length - 1 && (
                                <motion.div
                                    variants={growLine}
                                    className="w-px flex-1 bg-gray-500 my-2 origin-top"
                                />
                            )}
                        </div>
                        <div className={idx !== educationHistory.length - 1 ? "pb-12" : ""}>
                            <h3 className="text-white font-satoshi font-bold text-lg md:text-2xl">{edu.degree}</h3>
                            <a
                                href={edu.institutionLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-1 text-gray-20 font-montserrat text-sm md:text-base underline underline-offset-4 hover:text-primary-500 transition-colors duration-300"
                            >
                                {edu.institution}
                            </a>
                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-gray-50 text-xs md:text-sm font-montserrat uppercase tracking-wide">
                                <span>{edu.dateRange}</span>
                                <span>•</span>
                                <span>{edu.location}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default About
