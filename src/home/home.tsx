import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { ParticleGen } from './particleGen';

const make = makeStyles(() => ({
    bg: {
        background: 'linear-gradient(0.5turn, #001756, #0F0D57 58.2%)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -2,
    },
}));

const HomeGraph = () => {
    return (
        <Grid>
            <div className={make().bg}/>
            <ParticleGen/>
        </Grid>
    )
};

const Home = () => {
    return (
        <HomeGraph/>
    )
}

export default Home;