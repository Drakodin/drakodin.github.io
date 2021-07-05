import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { ParticleGen } from './particleGen';
import { Atom } from './molecule/atom/atom';

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
    atomContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
}));

const HomeGraph = () => {
    return (
        <Grid>
            <div className={make().bg}/>
            <ParticleGen/>
            <div className={make().atomContainer}>
                <Atom content="hello world" position={{top: "15%", left: "31%"}}/>
                <Atom content="hello world" position={{top: "16%", left: "57.5%"}}/>
                <Atom content="hello world" position={{top: "17.5%", left: "37.5%"}}/>
            </div>
        </Grid>
    )
};

const Home = () => {
    return (
        <HomeGraph/>
    )
}

export default Home;