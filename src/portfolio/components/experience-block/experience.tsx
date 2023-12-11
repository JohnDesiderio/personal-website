import React from 'react';
import { Box, List, ListItemText } from '@mui/material';
import { IExperience } from './types'; 
import './styles.css';

const Experience:React.FC<IExperience> = (props: IExperience) => {
    return (
        <Box className='experience-box'>
            <Box display='flex'
                className='flex-col lg:xl:flex-row'
            >
                <Box className='experience-position'>
                    {props.position},&nbsp;
                </Box>
                <Box className='experience-company'>
                    {props.company}
                </Box>
            </Box>
            <Box className='time-served'>
                {props.time_served}
            </Box>
            <List>
                {props.details.map((str, idx) =>
                    <ListItemText
                        
                        key={`experience-${props.sh}-${idx}`}
                    >
                        <Box className='job-detail'>
                            •&emsp;{str}
                        </Box>
                    </ListItemText>
                )}
            </List>
        </Box>
    )
}

export default Experience;