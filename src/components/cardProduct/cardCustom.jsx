import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
const productPhoto = require('../../assets/images/productPhoto.png');

export default function CardCustom({ nameProduct, description, valuePrice, valueDiscount } = {}) {
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
                    <Typography style={{ fontWeight: '600', marginTop: '10px', color: "#4E4E4E", fontSize: '28px' }} component="div">
                        {nameProduct}
                    </Typography>
                    <Typography style={{ marginTop: '10px', color: "#4E4E4E", fontSize: '20px' }} variant="body2">
                        {description}
                    </Typography>
                    <Typography component={'span'} variant={'body2'}>
                        <p style={{ marginTop: '10px', color: "orange", fontSize: '32px', }}>R${valueDiscount} <s style={{ marginLeft: 15, color: "#4E4E4E", }}>R${valuePrice}</s></p>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}