import { Box, Divider } from '@mui/material';
import Header from '../components/header/header';
import InternOne from '../components/experience-block/examples/intern-one';
import InternTwo from '../components/experience-block/examples/intern-two';
import SurveyCaller from '../components/experience-block/examples/survey-caller';
import ServerCashier from '../components/experience-block/examples/server-cashier';
import SkillsSection from '../components/skills-section/skills';
import EducationSection from '../components/education/education';
import '../styles.css';

const Resume:React.FC<{}> = () => {
    return (
        <Box display='flex' flexDirection='column' className='bg-red-50 portfolio-page'>
            <Header value={1}/>
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
            <InternTwo/>
            <Divider
                variant='middle'
                className='visible lg:invisible'

            />
            <InternOne/>
            <Divider
                variant='middle'
                className='visible lg:invisible'
            />
            <SurveyCaller/>
            <Divider
                variant='middle'
                className='visible lg:invisible'
            />
            <ServerCashier/>
            
            <SkillsSection/>
            <EducationSection/>
        </Box>
    )
}

export default Resume;