import { motion } from "framer-motion";
import RotatingPhrases from "../../components/RotatingPhrases";
import { GlobeAltIcon, BoltIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import FloatingParticles from "../../components/FloatingParticles";

type Props = {
    setSelectedPage: (value: string) => void;
}

const About = ({setSelectedPage}: Props) => {
    
    return (
        <section id="about" className="relative bg-about-image bg-cover bg-center md:h-screen w-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div 
            className="relative mx-auto px-12 flex items-center justify-center"
            onViewportEnter={() => setSelectedPage("about")}
            viewport={{ amount: 0.85 }}
            >
                <div className="mt-10 flex flex-col justify-center items-center gap-16 md:px-36 ">
                    <motion.div 
                    className="md:w-full md:flex md:justify-start md:pl-12 md:pt-28"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible:{opacity: 1, x: 0 }
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
        </section>
    )
}

export default About