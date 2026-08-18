import HeadText from '@/shared/HeadText';
import RHeadText from '@/screens/research/RHeadText';
import { motion } from 'framer-motion';
import ResTimeLine from './ResTimeLine';
import { ResearchType } from '@/shared/type';
import ResLap from './resLap';
import useMediaQuery from '@/hooks/useMediaQuery';



const researchDetails: Array<ResearchType> = [
    {
        resId: 1,
        resTitle: "Elicitation-Matrix Twi Translation",
        resDescription: "An Elicitation-Matrix Approach to Pragmatic Context Modeling in Low-Resource Machine Translation: The Case of Akuapem Twi. We introduce an elicitation-matrix method for capturing pragmatic context in low-resource MT...",
        resDate: "May",
        resYear: "2026",
        resLocation: "Marco Island, FL",
        resLink: "https://journals.flvc.org/FLAIRS/article/view/141846/147007"
    },
    {
        resId: 2,
        resTitle: "Speech Prosody for Robot Instructions",
        resDescription: "Enhancing Speech Instruction Understanding and Disambiguation in Robotics via Speech Prosody: we show that prosodic cues improve a robot's ability to disambiguate spoken instructions...",
        resDate: "Aug",
        resYear: "2025",
        resLocation: "Rotterdam, Netherlands",
        resLink: "https://www.isca-archive.org/interspeech_2025/sasu25b_interspeech.pdf"
    },
    {
        resId: 3,
        resTitle: "Machine Translation Corpus for Kpelle",
        resDescription: "Building a Functional Machine Translation Corpus for Kpelle: we present the first functional MT corpus for Kpelle, a low-resource Mande language spoken in Liberia and Guinea...",
        resDate: "July",
        resYear: "2025",
        resLocation: "Vienna, Austria",
        resLink: "https://aclanthology.org/2025.africanlp-1.8/"
    },
];

type Props = {
    setSelectedPage: (value: string) => void;
}

const Research = ({setSelectedPage}: Props) => {
      const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
      const cvUrl = `${import.meta.env.BASE_URL}Kweku_Yamoah_CV.pdf`;
  return (
    <section id='research' className='bg-secondary-500 mx-auto'>
        <motion.div 
        className='h-full'
        onViewportEnter={() => setSelectedPage("research")}
        viewport={{ amount: 0.5 }}
        >
            <div className='border-b border-gray-500'>
                <HeadText
                backgroundColor='bg-secondary-500'
                >Research</HeadText>
            </div>

            <div className='flex flex-col w-full py-16 gap-10'>

                {researchDetails.map((item: ResearchType)=> (
                    <div className={`border-b border-gray-500 px-24 md:px-40 ${isAboveMediumScreens ? 'flex ' : ''}`}
                        key={item.resId}
                    >
                        <div className='md:w-1/2'>
                            <motion.div
                            initial = "hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.8}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible:{opacity: 1, x: 0 }
                            }}
                            >
                                <RHeadText
                                    title={item.resTitle}
                                />
                            </motion.div>
                            <motion.div
                            initial = "hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.5, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible:{opacity: 1, x: 0 }
                            }}
                            >
                                <ResTimeLine
                                    date={item.resDate}
                                    year={item.resYear}
                                    location={item.resLocation}
                                />
                            </motion.div>
                        </div>
                        <motion.div 
                        className='flex items-center justify-center md:w-1/2'
                        initial = "hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 1, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible:{opacity: 1, x: 0 }
                        }}
                        >
                            <ResLap
                                description={item.resDescription}
                                link={item.resLink}
                            />
                        </motion.div>
                    </div>
                ))}

                <motion.div
                className='flex justify-center px-24 md:px-40'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 20},
                    visible: {opacity: 1, y: 0}
                }}
                >
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-4 border rounded-full text-white text-xs font-bold tracking-wide hover:cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        See more in my CV →
                    </a>
                </motion.div>
            </div>

        </motion.div>
    </section>
  )
}

export default Research