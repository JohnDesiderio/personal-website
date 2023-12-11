import React from 'react';
import { IProject } from './types';
import { Box, Link } from '@mui/material';
import './styles.css';

const Project:React.FC<IProject> = (props: IProject) => {
    return (
        <Box 
            className={props.last === true 
                ? 'project-component last-part'
                : 'project-component'
            }
        >
            <Box className='project-title'>
                {props.link !== undefined ?
                    <Box 
                        display='flex'
                        className='flex-col lg:xl:flex-row'
                    >
                        <Box className='font-medium'>{props.name},&nbsp;</Box>
                        <Link
                            underline='none'
                            href={props.link}
                        >
                            Link to Project
                        </Link>
                    </Box> 
                        : // Be aware of the operator that separates this
                    <Box className='font-medium'>{props.name}</Box>
                }
            </Box>
            <Box>
                {props.details.map((str, idx) => 
                    <Box
                        key={`project-${props.sh}-${idx}`}
                        className='project-detail'
                    >
                        •&emsp;{str}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Project;