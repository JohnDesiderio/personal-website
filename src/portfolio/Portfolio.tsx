import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './components/header/header';
import './styles.css';
import johndesiderio from './assets/john-desiderio.png';

const Portfolio:React.FC<{}> = () => {
    
    document.title = 'PORTFOLIO | John Desiderio'

    return (
        <Box className='bg-red-50 portfolio-page'>
            <Header value={0}/>
            <Box display='flex' flexDirection='row' className='bio-text'>
                <Typography className='bio-text'>
                    Welcome to my portfolio! My name is John Desiderio, 
                    and I am a recent graduate from the University of Georgia. 
                    I am a junior software engineer looking for an opportunity 
                    to prove my worth and contribute to meaningful projects that 
                    make a difference. I have experience working on different web 
                    projects and with new technologies. My interest is in full-stack 
                    development, which is the area I want to grow the most as a 
                    software engineer. Click over to the projects section and look 
                    at the projects section to learn more about the different things 
                    I have worked on and the current projects I want to finish!
                </Typography>
                <Box
                    display={{
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block',
                        xl: 'block'

                    }}
                    className='portfolio-image'
                >
                    <img
                        src={johndesiderio}
                        height={1200}
                        width={900}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    )
}

export default Portfolio;