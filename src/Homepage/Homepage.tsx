import React from 'react';
import { Box } from '@mui/material';
import PathGuide from './components/path-guide';
import './styles.css';

const Homepage:React.FC<{}> = () => {
    return (
        <Box className='first-box' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <PathGuide 
                  additional_style='box-link-top'
                  directory_text='/portfolio'
                  link='portfolio'
              />
              <PathGuide 
                  additional_style='box-link-bottom'
                  directory_text='/spotify-mixer'
                  link='spotify-mixer'
              />
        </Box>  
    )
}

export default Homepage;