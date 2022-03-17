import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function FormCustom() {
    const [adress, setAdress] = React.useState(10);

    const handleChange = (event) => {
        setAdress(event.target.value);
    };

    return (
        <Box sx={{ background: '#FFFFFF', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', borderRadius: '4px', marginTop: 1, marginBottom: 1, minWidth: 250 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Endereço de entrega</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={adress}
                    onChange={handleChange}
                >
                    <MenuItem value={10}><b style={{ marginBottom: -2, color: '#656363' }}>R.Antonio Braune,222</b> </MenuItem>
                    <MenuItem value={20}><b style={{ marginBottom: -2, color: '#656363' }}>R.Jóse Braune,222</b></MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}