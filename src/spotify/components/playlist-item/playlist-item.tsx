import React, { useState, useEffect } from 'react';
import { Box, Card, Checkbox, CheckboxProps, Typography } from '@mui/material';
import { IPlaylistProps } from '../../types';
import SpotifyLogo from '../../../assets/SpotifyLogo.png';

const PlaylistItem:React.FC<IPlaylistProps & CheckboxProps> = (
    props: IPlaylistProps & CheckboxProps,
) => {
    const [selected, setSelected] =  useState<boolean>(false);
    const [image, setImage] = useState<string>('');

    useEffect(() => { // Used to address issue that photo playlist photo might be undefined
        if (props.images.length > 0) {
            const image : { url: string, height: number, width: number } | undefined = props.images.at(0); 
            if (image !== undefined) {
                setImage(image.url);
            } else {
                setImage(SpotifyLogo);
            }
        }
    }, [])

    return (
        <Box className={`w-80 ${selected ? 'bg-gray-300' : 'bg-white'} rounded-md mt-2 h-16`}>
            <Box display='flex' flexDirection='row'>
                <Card className='h-16 w-16'>
                    <img
                        src={image}
                        className='h-16 w-16'
                        alt={props.name}
                    />
                </Card>
                <Box display='flex' flexDirection='column' justifyContent='center' className='h-16 w-52 pl-2 hover:cursor-pointer font-bold text-sm'>
                    <Typography noWrap>
                        {props.name}
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
    )
}

export default PlaylistItem;