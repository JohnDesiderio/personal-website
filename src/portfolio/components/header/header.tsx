import React from 'react';
import { Box } from '@mui/material';
import HeaderMenu from './header-menu';
import './styles.css';
import MenuItem from './menu-item';
import SmallerHeader from './small-header';

interface IHeaderProps {
    value: number
}


const Header:React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <Box 
            className='header-box' 
            flexDirection='row'
            display='flex'
        >
            <SmallerHeader value={props.value}/>
            <Box 
                className="header-child-box-left"
                display={{
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex',
                    xl: 'flex',
                }} 
            >
                <Box>
                   <MenuItem toggled={props.value === 0} dir_text='Portfolio' link=''/> 
                </Box>
            </Box>
            <Box 
                className="header-child-box-right" 
                display={{
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex',
                    xl: 'flex',
                }}
                flexDirection='row' 
                justifyContent='end'
            >
                <HeaderMenu toggled={props.value}/>
            </Box>
        </Box>
    )
}

export default Header;