import React from 'react';
import { Card, CardContent, Container } from '@mui/material';
import ExtraIngredients from './ExtraIngredients';
import ComponentExtra from './componentExtra';
import NeedCutlery from './needCutlery';
import QuantityControllerButton from './quantityControllerButton';

export default function CardOptions({ ingredients } = {}) {

    return (
        <Container maxWidth="xl">
            <Card sx={{ paddingLeft: -5, borderRadius: '8px', padding: '20px', boxSizing: 'border-box', border: '1px solid #686868', marginTop: '24px', maxWidth: 500, maxHeight: 670, boxShadow: 'none' }}>
                <CardContent>
                    <Card style={{ marginLeft: 11, overflow: 'scroll', boxShadow: 'none', maxWidth: 439, maxHeight: 500, marginTop: -15, }}>
                        <CardContent>
                            <ComponentExtra title={"Adicionar Ingredientes"} subTitle={"Até 8 ingredientes."} />
                            {ingredients.map(({ id, nm_item, vl_item }) => (
                                <ExtraIngredients key={id} nameItem={nm_item} valueItem={vl_item} />
                            ))}
                            <NeedCutlery />
                        </CardContent>
                    </Card>
                    <QuantityControllerButton />
                </CardContent>
            </Card >

        </Container >
    );
}