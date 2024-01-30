import { Box, Divider } from '@mui/material';
import Header from '../components/header/header';
import InternOne from '../components/experience-block/examples/intern-one';
import InternTwo from '../components/experience-block/examples/intern-two';
import SurveyCaller from '../components/experience-block/examples/survey-caller';
import ServerCashier from '../components/experience-block/examples/server-cashier';
import SkillsSection from '../components/skills-section/skills';
import EducationSection from '../components/education/education';
import FreelanceWeb from '../components/experience-block/examples/freelance-webdev';
import '../styles.css';

const Resume: React.FC<{}> = () => {
  return (
    <Box className='bg-red-50 w-full overflow-x-hidden'>
      <Box display='flex' flexDirection='column' className='w-full'>
        <Header value={1} />
        <Box
          className='page-header'
        >
          Resume
        </Box>
        <Box
          className='experience-typography'
        >
          Experience
        </Box>
        <FreelanceWeb />
        <Divider
          variant='middle'
          className='visible lg:invisible'

        />
        <InternTwo />
        <Divider
          variant='middle'
          className='visible lg:invisible'

        />
        <InternOne />
        <Divider
          variant='middle'
          className='visible lg:invisible'
        />
        <SurveyCaller />
        <Divider
          variant='middle'
          className='visible lg:invisible'
        />
        <ServerCashier />

        <SkillsSection />
        <EducationSection />
      </Box>
    </Box>
  )
}

export default Resume;
