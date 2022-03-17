import React from 'react';
import { styled, alpha, InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({

    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '35ch',
            '&:focus': {
                width: '38ch',
            },
        },
    },
}));

export default function SearchCustom() {
    return (
        <Search style={{ border: '1px solid #ED3237', background: '#FFFFFF', color: '#656363', width: '23em', height: '45px' }}>

            <StyledInputBase
                style={{ textAlign: 'center' }}
                placeholder="Busque por estabelecimento ou produtos"
            />
        </Search>
    );
}