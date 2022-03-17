import React, { useState } from 'react';
import ComponentExtra from './componentExtra';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function NeedCutlery() {
    const [value, setValue] = useState('não');

    return (
        <>
            <ComponentExtra title={"Precisa de talher?"} subTitle={""} />
            <RadioGroup col='true' aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={{ marginRight: 23 }} value={value} onChange={e => setValue(e.target.value)}>
                <FormControlLabel style={{ justifyContent: 'space-between' }} value="sim" control={<Radio color='warning' />} label="Sim" labelPlacement="start" />
                <FormControlLabel style={{ justifyContent: 'space-between' }} value="não" control={<Radio color='warning' />} label="Não" labelPlacement="start" />
            </RadioGroup>
        </>
    );
}