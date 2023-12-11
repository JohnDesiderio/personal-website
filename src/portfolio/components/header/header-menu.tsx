import React from 'react';
import { Box } from '@mui/material';
import MenuItem from './menu-item';
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface IHeaderMenu {
    toggled: number;
}

const HeaderMenu:React.FC<IHeaderMenu> = (props: IHeaderMenu) => {
    return (
        <Box className='header-menu-box' display='flex' flexDirection='row'>
            <MenuItem toggled={props.toggled === 1} dir_text='Resume' link='resume'/>
            <MenuItem toggled={props.toggled === 2}  dir_text='Projects' link='projects'/>
            <MenuItem toggled={props.toggled === 3}  dir_text='About' link='about'/>
            <MenuItem toggled={props.toggled === 4}  dir_text='Contact Me' link='contact-me'/>
            <FaLinkedin
                onClick={() => {
                    window.location.href='https://www.linkedin.com/in/derio/'
                }}
                className='icon-style linked-icon'
            />
            <FaGithub
                onClick={() => {
                    window.location.href="https://github.com/JohnDesiderio"
                }}
                className='icon-style github-icon'
            />
        </Box>
    )
}

export default HeaderMenu;