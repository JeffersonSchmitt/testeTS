import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function ComponentExtra(props) {
    return (
        <>
            <Box
                style={{ marginTop: '10px' }}
                sx={{

                    width: 375,
                    height: 55,
                    backgroundColor: 'rgba(253, 215, 14, 0.2)',
                }}
            >
                <Typography style={{ fontWeight: 500, width: '343px', height: '23px', paddingTop: '8px', marginLeft: '16px', color: "#4E4E4E", fontSize: '14px' }} component="div">
                    {props.titulo}
                </Typography>

                <Typography style={{ width: '343px', height: '16px', paddingTop: '8px', marginLeft: '16px', color: "#E49700", fontSize: '12px' }} component="div">
                    {props.subtitulo}
                </Typography>
            </Box>
        </>
    );
}