import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { BsFolder2Open } from 'react-icons/bs';
import '../styles.css';
import { Link } from 'react-router-dom';

interface IPathGuide {
    additional_style?: string,
    directory_text: string,
    link: string,
}

type PathGuideProps = BoxProps & IPathGuide;

const PathGuide:React.FC<PathGuideProps> = (props: PathGuideProps) => {
    return (
            <Link 
                to={`/${props.link}`}
            >
                <Box display='flex' flexDirection='row' className={`box-link ${props.additional_style}`}>
                    <BsFolder2Open className='svg-element'/>&ensp;{props.directory_text}
                </Box>
            </Link>
    )
}

export default PathGuide;