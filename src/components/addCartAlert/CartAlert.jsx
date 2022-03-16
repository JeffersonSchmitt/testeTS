import React from "react";
import { Box, Card, Container } from '@mui/material';

export default function CartAlert() {
    return (
        <Card
            sx={{
                width: 208,
                height: 180,
                borderRadius: 4,
                background: '#F8F8F8',
            }}
        >

            <Box
                sx={{
                    width: 208,
                    height: 35,
                    backgroundColor: 'orange',
                }}
            >
                <p style={{ paddingTop: 9, marginLeft: 5, color: '#FFFFFF', fontStyle: 'normal', fontSize: 17, lineHeight: '100%' }} ><b>Adicionado com sucesso</b></p>
            </Box>
            <p style={{ marginLeft: 10, marginTop: 5, color: '#BC2E31' }}><b>Oferta Cheddar Bacon</b></p>
            <Box
                sx={{
                    marginTop: -2,
                    width: 181,
                    height: 120,
                }}
            >
                <Container style={{ width: 181, paddingTop: 5 }}>
                    <p style={{ height: 12, fontSize: 12, color: '#4E4E4E', fontWeight: '600' }}>Ingredientes:</p>
                    <p style={{ height: 12, marginTop: -7, fontSize: 12, color: '#4E4E4E', fontWeight: '600' }}>1 Carne 250gr</p>
                    <p style={{ height: 12, marginTop: -7, fontSize: 12, color: '#4E4E4E', fontWeight: '600' }}>2 Queijo Cheddar</p>
                    <p style={{ height: 12, marginTop: -7, fontSize: 12, color: '#4E4E4E', fontWeight: '600' }}>1 Bacon</p>
                    <p style={{ height: 12, marginTop: -7, fontSize: 12, color: '#4E4E4E', fontWeight: '600' }}>Molho Especial</p>
                </Container>

            </Box>
        </Card>
    );
}