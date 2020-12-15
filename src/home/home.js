import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core';

const HomeGraph = () => (
        <Grid xs={12} md={6} item container justify="center" alignItems="center" spacing={3}>
            <img style={{height: 357, width: 240}} src="/logo-L.png" alt="full-color logo to serve as center of CSS graph"/>
        </Grid>
);

const Home = () => {
    return (
        <HomeGraph/>
    )
}

export default Home;