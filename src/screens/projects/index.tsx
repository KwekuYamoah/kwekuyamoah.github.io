import HeadText from '@/shared/HeadText'
import { motion } from 'framer-motion';
import YearCalendar from './YearCalendar';

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
        <div className='border-b border-hairline'>
          <HeadText backgroundColor='bg-canvas'>Timeline</HeadText>
        </div>

        <YearCalendar />
      </motion.div>
    </section>
  )
}

export default Project
