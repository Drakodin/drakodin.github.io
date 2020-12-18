import React from 'react'
import { Typography, Button, Grid, makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import { ParticleGen } from './particleGen';

const make = makeStyles(() => ({
    bg: {
        background: 'linear-gradient(0.5turn, #001756, #2E0084 58.2%)',
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
            <Grid style={{marginTop: 20}} justify="center" container alignItems="center" alignContent="center">
                <Grid xs={12} md={6} item container justify="center" alignItems="center" spacing={3}>
                    <img style={{height: 357, width: 240, zIndex: 1}} src="/logo-L.png" alt="full-color logo to serve as center of CSS graph"/>
                </Grid>
            </Grid>
        </Grid>
    )
};

const MobileLayout = () => (
    /* */
    <Grid/>
)

const Home = () => {
    return (
        <HomeGraph/>
    )
}

export default Home;