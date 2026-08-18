import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
    id: number,
    date_role: string;
    description: string;
    role: string;
}

const Projects = ({id, date_role, description, role}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  
  return (
    <motion.div 
    className={`text-ink border-b border-hairline px-24 md:px-40 py-5 md:flex md:gap-28 ${id === 1 ? 'bg-primary-500':''} ${isAboveMediumScreens ? flexBetween: ' '}`}
    variants={childVariant}
    >
      <p className='md:w-1/5'>{date_role}</p>
      <p className='my-6 md:w-3/5'>{description}</p>
      <p className='md:w-1/5'>{role}</p>
    </motion.div>
   
  )
}

export default Projects