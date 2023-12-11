import React, { useState } from 'react';
import { Grid, Card, Box, Checkbox, Typography, CheckboxProps } from '@mui/material';
import { ITrack } from '../../types';

const ResponseGridItem:React.FC<CheckboxProps & ITrack> = (
    props: CheckboxProps & ITrack,
) => {
    const [selected, setSelected] = useState<boolean>(false);

    const redirectToUrl = () => {
        document.location = props.external_url;
    }

    return (
        <Grid item key={`response-grid-${props.uri}`}>
            <Box className={`w-80 ${selected ? 'bg-gray-300' : 'bg-white'} rounded-md mt-2 h-16`}>
                <Box display='flex' flexDirection='row'>
                    <Card className='h-16 w-16 hover:cursor-pointer' onClick={redirectToUrl}>
                        <img
                            src={props.image}
                            className='h-16 w-16'
                            alt={props.song}
                        />
                    </Card>
                    <Box display='flex' flexDirection='column' onClick={redirectToUrl} className='h-16 w-52 hover:cursor-pointer font-bold text-sm'>
                        <Typography noWrap>
                            {props.song}
                        </Typography>
                        <Typography noWrap>
                            {props.artist}
                        </Typography>
                        <Typography noWrap>
                            {props.album}
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Checkbox
                            onChange={props.onChange}
                            onClick={() => setSelected(!selected)}
                        />
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default ResponseGridItem;