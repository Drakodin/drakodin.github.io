import React from 'react';
import { Typography } from '@material-ui/core';

const Molecule = (props) => {
    const [active, setActive] = React.useState(0);
    return (
        <>
            {props.items.map((v, i) => (
                <div className={`atom-wrapper`}>
                    <div className={`atom atom-${i}`}>
                        <Typography>{v}</Typography>
                    </div>
                    <div className={`atom-${i}-bond`}/>
                </div>
            ))}
        </>
    )
}