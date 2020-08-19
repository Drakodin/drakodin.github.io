import React from 'react';
import Dropdown from './Dropdown';
import { Grid } from '@material-ui/core';

const DropdownDemo = () => {
    const [inputs, setInputs] = React.useState([]);
    const [open, setOpen] = React.useState([false, false, false]);

    const closeDropdown = (dd_id) => {
        setOpen(open.map((v, i) => (i === dd_id) ? false : v));
    }

    const openDropdown = (dd_id) => {
        setOpen(open.map((v, i) => (i === dd_id) ? true : v));
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
        <>
            <Grid container direction="row" justify="flex-start">
                <Grid item xs={3} lg={3}
                    container direction="row" justify="flex-start"
                    alignItems="center"
                    className="ml-4 mb-4"
                >
                    <Dropdown
                        open={open[0]}
                        label='Example'
                        target={inputs}
                        listSrc={["a", "b", "c", "d", "e"]}
                        onClick={() => openDropdown(0)}
                        onClose={() => closeDropdown(0)}
                        listOnClick={clickIn}
                    />
                </Grid>
                <Grid item xs={3} lg={3}
                    container direction="row" justify="flex-start"
                    alignItems="center"
                    className="ml-4 mb-4"
                >
                    <Dropdown
                        open={open[1]}
                        label='Example'
                        variant='light'
                        target={inputs}
                        listSrc={["a", "b", "c", "d", "e"]}
                        onClick={() => openDropdown(1)}
                        onClose={() => closeDropdown(1)}
                        listOnClick={clickIn}
                    />
                </Grid>
                <Grid item xs={3} lg={3}
                    container direction="row" justify="flex-start"
                    alignItems="center"
                    className="ml-4 mb-4"
                >
                    <Dropdown
                        open={open[2]}
                        label='Example'
                        variant='dark'
                        target={inputs}
                        listSrc={["a", "b", "c", "d", "e"]}
                        onClick={() => openDropdown(2)}
                        onClose={() => closeDropdown(2)}
                        listOnClick={clickIn}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default DropdownDemo;