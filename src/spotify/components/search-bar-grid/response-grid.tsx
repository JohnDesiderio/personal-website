import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { ITrack } from '../../types';
import ResponseGridItem from './response-grid-item';
import './styles.css';

interface IResponseGrid {
    items: Array<ITrack> | undefined,
}

// Exists outside the component for rendering purposes
const mappedItems = new Map<string, ITrack>();

const ResponseGrid:React.FC<IResponseGrid> = (props: IResponseGrid) => {
    
    if (props.items === undefined) {
        return <Grid container/>
    }

    const updateMappedItems = (item: ITrack) => {
        if (mappedItems.has(item.id)) {
            mappedItems.delete(item.id);
            console.log('An item has been deleted');
        } else {
            mappedItems.set(item.id, item);
            console.log('An item has been added');
        }
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid 
                container 
                justifyContent='center' 
                alignItems='center' 
                direction='column'
                className='h-[225px] sm:md:h-[250px] lg:xl:2xl:h-[450px] mb-5 response-grid'
                sx={{
                    marginTop: '12px',
                    overflowY: 'scroll',
                    width: '336px'
                }}

            >
                <Grid 
                    display='flex'
                    flexDirection='column'
                    className='h-full w-full'
                >
                    {props.items.map((item, idx) => 
                        <ResponseGridItem 
                            key={`response-grid-item-${idx}`}
                            {...item}
                            onChange={() => updateMappedItems(item)}
                        />
                    )}
                </Grid>
            </Grid>
            <Button
                sx={{
                    backgroundColor: '#1E328A',
                    color: '#EFF6FE',
                    width: '120px',
                    height: '56px',
                }}
            >Submit</Button>
        </Box>
    )
}

export default ResponseGrid;