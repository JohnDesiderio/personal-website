import React from 'react';
import { Box } from '@mui/material';
import './styles.css'

const EducationSection:React.FC<{}> = () => {
    return (
        <Box className='education-section'>
            <Box className='education-header'>
                Education
            </Box>
            <Box>
                <Box display='flex' flexDirection='row'>
                    <Box className='education-school'>University of Georgia,&nbsp;</Box>
                    <Box className='education-typography'>August 2018 – December 2022</Box>
                </Box>
                <Box className='education-mini-section'>Bachelor of Science in Computer Science</Box>
                <Box className='education-mini-section'>Bachelor of Arts in English</Box>
            </Box>
            <Box className='education-typography'>
                Awards
            </Box>
            <Box className='education-mini-section'>Zell Miller Scholarship (Full Tuition), 2018 - 2022</Box>
            <Box className='education-mini-section'>Dean&apos;s List, Spring 2020 – Fall 2022</Box>
        </Box>
    )
}

export default EducationSection;