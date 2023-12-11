import React from 'react';
import { 
    Box,
    ListItemButton,
    List,
    Divider,
} from '@mui/material';

interface ISmallMenuDrawer {
    value: number;
}

const SmallMenuDrawer:React.FC<ISmallMenuDrawer> = (props: ISmallMenuDrawer) => {
    return (
        <Box
            role='presentation'
        >
            <List
                sx={{
                    backgroundColor: 'rgba(254, 242, 242)',
                }}
            >
                <ListItemButton 
                    href='./#/portfolio'
                    disabled={props.value===0}
                >
                    Portfolio
                </ListItemButton>
                <Divider/>
                <ListItemButton 
                    className='bg-red-400'
                    href='#/portfolio/resume'
                    disabled={props.value===1}
                >
                    Resume
                </ListItemButton>
                <Divider/>
                <ListItemButton 
                    className='bg-red-400'
                    href='#/portfolio/projects'
                    disabled={props.value===2}
                >
                    Projects
                </ListItemButton>
                <Divider/>
                <ListItemButton 
                    className='bg-red-400'
                    href='#/portfolio/about'
                    disabled={props.value===3}
                >
                    About
                </ListItemButton>
                <Divider/>
                <ListItemButton 
                    className='bg-red-400'
                    href='#/portfolio/contact-me'
                    disabled={props.value===4}
                >
                    Contact Me
                </ListItemButton>
            </List>
        </Box>
    )
}

export default SmallMenuDrawer;