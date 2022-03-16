import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const productPhoto = require('../../assets/images/productPhoto.png');

export default function CardCustom(props) {
    return (
        <Container maxWidth="xl">
            <Card sx={{ marginTop: '70px', maxWidth: 597, maxHeight: 662, boxShadow: 'none' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="388"
                    image={productPhoto}
                />
                <CardContent>
                    <Typography style={{ marginTop: '10px', color: "#4E4E4E", fontSize: '28px' }} component="div">
                        {props.nm_product}
                    </Typography>
                    <Typography style={{ marginTop: '10px', color: "#4E4E4E", fontSize: '20px' }} variant="body2">
                        {props.description}
                    </Typography>
                    <Typography component={'span'} variant={'body2'}>
                        <p style={{ marginTop: '10px', color: "orange", fontSize: '32px', }}>R${props.vl_price} <s style={{ color: "#4E4E4E", }}>R${props.vl_discount}</s></p>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}