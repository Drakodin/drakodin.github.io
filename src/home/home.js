import React from 'react'
import { Typography, Button, Grid, makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import './home.scss';

const HomeGraph = () => {
    return (
        <Grid>
            <Grid style={{marginTop: 20}} justify="center" container alignItems="center" alignContent="center">
                <Grid xs={12} md={6} item container justify="center" alignItems="center" spacing={3}>
                    <img style={{height: 357, width: 240}} src="/logo-L.png" alt="full-color logo to serve as center of CSS graph"/>
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