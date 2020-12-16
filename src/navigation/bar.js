import React from 'react';
import { AppBar, Toolbar, useScrollTrigger, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    bar: {
        background: 'linear-gradient(30deg, #458bf7, #E13DFF 64.7%)'
    },
}));

const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar = () => {
    const classes = useStyles();
    return (
        <HideOnScroll>
            <AppBar position='sticky' className={classes.bar} elevation={2}>
                <Toolbar id="tb-bar">
                    
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;