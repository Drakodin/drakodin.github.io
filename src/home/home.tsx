import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { ParticleGen } from './particleGen';
import { Atom } from './molecule/atom/atom';
import './home.css';

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
    },
    logoBubble: {
        position: 'absolute',
        borderRadius: '50%',
        top: '30%',
        left: '70%',
        width: 'min(252px, 40%)',
        height: 'min(252px, 40%)',
        padding: '20px',
        objectFit: 'contain',
        background: 'radial-gradient(circle at top 15% right 15%, rgba(209, 244, 255, 0.8) 20%, rgba(101, 193, 255, 0.75) 75%)',
    }
}));

const HomeGraph = () => {
    return (
        <Grid>
            <div className={make().bg}/>
            <ParticleGen/>
            <div className={make().atomContainer}>
                {/* Hackathons - Projects - Art */}
                <Atom content="Innovation" position={{top: "15%", left: "11%"}}/>
                <Atom content="Invention" position={{top: "15.5%", left: "35%"}}/>
                <Atom content="Creation" position={{top: "15.75%", left: "17%"}}/>
                <div className={`${make().logoBubble} logo-bubble`} onClick={() => {window.location.href="/#/about"}}>
                    <img style={{maxWidth: '100%', maxHeight: '100%'}} src="/lotus.png" alt="logo for user site"></img>
                </div>
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