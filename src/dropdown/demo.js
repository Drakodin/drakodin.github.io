import React from 'react';
import Dropdown from './Dropdown';
import { Grid } from '@material-ui/core';

const DropdownDemo = () => {
    const [inputs, setInputs] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const closeDropdown = () => {
        setOpen(false);
    }

    const openDropdown = () => {
        setOpen(true);
    }

    const clickIn = (value) => {
        let currIdx = inputs.indexOf(value);
        if (currIdx > -1) {
            setInputs(inputs.filter((v, i) => i !== currIdx))
        } else {
            setInputs([...inputs, value]);
        }
    }

    return (
        <Grid item xs={12} lg={12}
            container direction="row" justify="flex-start"
            alignItems="center"
            className="ml-4 mb-4"
        >
            <Dropdown
                open={open}
                label='Example'
                target={inputs}
                listSrc={["a", "b", "c", "d", "e"]}
                onClick={openDropdown}
                onClose={closeDropdown}
                listOnClick={clickIn}
            />
        </Grid>
    )
}

export default DropdownDemo;