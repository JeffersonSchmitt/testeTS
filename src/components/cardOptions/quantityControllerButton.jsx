import React, { useState } from 'react';
import { Button, Stack, IconButton } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QuantityControllerButton() {
    const [number, setNumber] = useState(1);

    return (
        <>
            <Row style={{ marginLeft: 2, marginTop: 25 }}>
                <Col>
                    <Row style={{ display: 'flex', alignItems: 'center', marginLeft: 16, borderRadius: 5, width: '120px', height: '40px', border: '1px solid #F09035' }}>
                        <Col xs={4}>
                            <Stack spacing={1}>
                                <IconButton
                                    onClick={() => {
                                        if (number > 1) {
                                            setNumber(number - 1);
                                        }
                                    }}
                                    size="small" aria-label="remove">
                                    <RemoveIcon color="error" fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Col>
                        <Col xs={4} style={{
                            display: 'flex', alignItems: 'center',
                        }}> {number} </Col>
                        <Col xs={4} style={{
                            display: 'flex', alignItems: 'center',
                        }}>
                            <Stack spacing={1}>
                                <IconButton onClick={() => { setNumber(number + 1); }} size="small" aria-label="add">
                                    <AddIcon color="error" fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Button variant="contained" style={{ background: '#F09035', width: 220, height: 40, borderRadius: 4, marginRight: 35 }}>Adicionar</Button>
                </Col>
            </Row>
        </>
    );
}