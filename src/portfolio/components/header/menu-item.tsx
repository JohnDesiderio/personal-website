import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

interface IMenuItem {
    toggled: boolean,
    dir_text: string,
    link: string, 
}

const MenuItem:React.FC<IMenuItem> = (props: IMenuItem) => {

    return (
        <Link
            to={`/portfolio/${props.link}`}
        >
            <Box
                className={`${props.toggled ? 'selected-menu-item' : 'unselected-menu-item hover:text-red-400'} menu-item`} 
                justifyContent='center'
                display='flex'
                alignItems='center'
            >
                {props.dir_text}
            </Box>

        </Link>
    )
}

export default MenuItem;