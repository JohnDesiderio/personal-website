import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import Header from '../components/header/header';
import '../styles.css';

export const ContactMe:React.FC<{}> = () => {

    return (
        <Box 
            display='flex' 
            flexDirection='column' 
            className='portfolio-page bg-red-50'
        >
            <Header value={4}/>
            <Box
                className='page-header'
            >
                Contact Me
            </Box>
            <form
                action='mailto:johnfrancisdesiderio@gmail.com'
                method='post'
                encType='text/plain'
                id='sendmemail'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    className='form-box'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        className='form-components-holder'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <TextField
                            InputLabelProps={{
                                style: {
                                    color: 'gray',
                                }
                            }}
                            label='Name'
                            type='text'
                            name='name'
                            sx={{
                                marginTop: '12vh',
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& > fieldset': {
                                        borderColor: '#f87171',
                                    }
                                }
                            }}
                        />
                        <TextField
                            InputLabelProps={{
                                style: {
                                    color: 'gray',
                                }
                            }}
                            label='Email'
                            type='text'
                            name='email'
                            sx={{
                                marginTop: '4vh',
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& > fieldset': {
                                        borderColor: '#f87171',
                                    }
                                }
                            }}
                        />
                        <TextField
                            InputLabelProps={{
                                style: {
                                    color: 'gray',
                                }
                            }}
                            label='Comment'
                            type='text'
                            name='comment'
                            sx={{
                                marginTop: '4vh',
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& > fieldset': {
                                        borderColor: '#f87171',
                                    }
                                }
                            }}
                        />
                        <Button
                            type='submit'
                            form='sendmemail'
                            sx={{
                                marginTop: '3vh',
                                width: '6vw',
                                height: '6vh',
                                color: 'black',
                                backgroundColor: '#f87171',
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default ContactMe;