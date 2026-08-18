import HeadText from '@/shared/HeadText'
import { motion } from 'framer-motion';
import { ProjectType } from '@/shared/type';
import Projects from './Projects';

const projectTimeline: Array<ProjectType> = [
  {
    id: 1,
    date_role: "2022 - 2025",
    description: "Assisting with the Teaching of Undergraduate Computer Science courses at Ashesi University",
    role: "Teaching Assistant",

  },
  {
    id: 2,
    date_role: "February 2024",
    description: "Conducting Research to see how prosodic features can guide a robot in an environment",
    role: "Researcher",

  },
  {
    id: 3,
    date_role: "September 2023",
    description: "Attended the DLI Conference in Ghana, where I presented a poster and published a paper.",
    role: "Participant",

  },
  {
    id: 4,
    date_role: "February 2023",
    description: "Worked on the integration of LLMs to enhance legal research at Diligence AI",
    role: "Freelance",

  },

];

const container = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.1 , staggerChildren: 0.25 },
  },
};


type Props = {
    setSelectedPage: (value: string) => void;
}

const Project = ({setSelectedPage}: Props) => {
  return (
    <section id='projects' className='bg-canvas theme-surface mx-auto'>
      <motion.div
      className='md:h-full'
      onViewportEnter={() => setSelectedPage("projects")}
      viewport={{ amount: 0.85 }}
      >
        <div className=''>
          <HeadText
          backgroundColor='bg-canvas'
          >Timeline</HeadText>
       
          <motion.div 
          className='w-full '
          initial = "hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          >
            {projectTimeline.map((item: ProjectType) =>(
              <Projects
                key={item.id}
                id={item.id}
                date_role={item.date_role}
                description={item.description}
                role={item.role}
              />
            ))}
          </motion.div>
 
        </div>
      </motion.div>
      
    </section>
  )
}

export default Project