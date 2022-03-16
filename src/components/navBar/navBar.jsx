import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchCustom from './searchCustom';
import FormCustom from './formAdress';

const logo = require('../../assets/images/Logo1.png');
const boxLogo = require('../../assets/images/boxLogo.png');

const NavBarCustom = () => {

    return (
        <AppBar position="static" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', backgroundColor: '#F4F4F4' }} >
            <Container maxWidth="xl">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img
                            alt=""
                            src={boxLogo}
                            width="82.88"
                            height="48"
                            className="d-inline-block align-top"
                        />
                        <img
                            alt=""
                            src={logo}
                            width="150"
                            height="42"
                            className="d-inline-block align-top"

                        />

                    </Typography>

                    <Box>
                        <FormCustom />
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <SearchCustom />
                    </Box>
                    <Box>
                        <Button style={{ color: '#ED3237' }}><i className="far fa-user-circle fa-lg" style={{ paddingRight: '5px' }}></i>Entrar</Button>
                        <Button style={{ color: '#ED3237' }}><i className="fas fa-shopping-cart fa-lg" style={{ paddingRight: '5px' }}></i>Carrinho</Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBarCustom;