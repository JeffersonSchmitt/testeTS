import * as React from 'react';
import ComponentExtra from './componentExtra';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function NeedCutlery() {
    const [value, setValue] = React.useState('não');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <ComponentExtra titulo={"Precisa de talher?"} subtitulo={""} />
            <RadioGroup col='true' aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={{ marginRight: 23 }} value={value} onChange={handleChange}>
                <FormControlLabel style={{ justifyContent: 'space-between' }} value="sim" control={<Radio color='warning' />} label="Sim" labelPlacement="start" />
                <FormControlLabel style={{ justifyContent: 'space-between' }} value="não" control={<Radio color='warning' />} label="Não" labelPlacement="start" />
            </RadioGroup>
        </>
    );
}