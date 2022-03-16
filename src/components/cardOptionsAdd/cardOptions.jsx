import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import IngredientsExtra from './ingredientsExtra';
import ComponentExtra from './componentExtra';
import NeedCutlery from './needCutlery';
import AddMoreProduct from './addMoreProduct';

export default function CardOptions(props) {

    return (
        <Container maxWidth="xl">
            <Card sx={{ paddingLeft: -5, borderRadius: '8px', padding: '20px', boxSizing: 'border-box', border: '1px solid #686868', marginTop: '24px', maxWidth: 500, maxHeight: 670, boxShadow: 'none' }}>
                <CardContent>
                    <Card style={{ marginLeft: 11, overflow: 'scroll', boxShadow: 'none', maxWidth: 439, maxHeight: 500, marginTop: -15, }}>
                        <CardContent>
                            <ComponentExtra titulo={"Adicionar Ingredientes"} subtitulo={"Até 8 ingredientes."} />
                            {props.ingredients.map(ingredient => (
                                <IngredientsExtra key={ingredient.id} nm_item={ingredient.nm_item} vl_item={ingredient.vl_item} />
                            ))}
                            <NeedCutlery />
                        </CardContent>
                    </Card>
                    <AddMoreProduct />
                </CardContent>
            </Card >

        </Container >
    );
}