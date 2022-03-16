import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

export default function IngredientsExtra(props) {
    const [number, setNumber] = React.useState(0);

    return (
        <Box
            style={{ borderBottom: '1px solid #E8A634', marginTop: 16, }}
            sx={{
                width: 359,
                height: 88,
                backgroundColor: '#FFFFFF',
            }}>
            <Row>
                <Col xs={8} >
                    <Typography style={{ fontWeight: 500, width: '243px', height: '16px', paddingTop: '8px', marginLeft: '8px', color: "#4E4E4E", fontSize: '14px' }} component="div">
                        {props.nm_item}
                    </Typography>
                    <Typography style={{ width: '343px', height: '16px', marginTop: '40px', marginLeft: '16px', color: "#E49700", fontSize: '12px' }} component="div">
                        + R$ {props.vl_item}
                    </Typography>
                </Col>
                <Col xs={4} style={{
                    marginLeft: '18px',
                    marginTop: '18px',
                    width: '89px',
                    height: '30px',
                    border: '1px solid #F09035', borderColor: '#F09035', borderRadius: '5px'
                }}>
                    <Row style={{
                        height: '28px',
                        display: 'flex',
                        alignContent: 'center',
                    }}>
                        <Col xs={4} >
                            <Stack spacing={1}>
                                <IconButton onClick={() => {
                                    if (number <= 0) {
                                        setNumber(0);
                                    } else {
                                        setNumber(number - 1);
                                    }
                                }}
                                    size="small" aria-label="remove">
                                    <RemoveIcon color="error" fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Col>
                        <Col xs={4} style={{ marginTop: 2 }}>{number}</Col>
                        <Col xs={4}>
                            <Stack spacing={1}>
                                <IconButton onClick={() => {
                                    if (number >= 8) {
                                        setNumber(8);
                                    } else {
                                        setNumber(number + 1);
                                    }
                                }} size="small" aria-label="add">
                                    <AddIcon color="error" fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Box >
    );
}