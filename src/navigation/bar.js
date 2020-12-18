import React from 'react';
import { AppBar, Toolbar, useScrollTrigger, IconButton, Slide, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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

const NavBarContent = () => (
    <>
        <IconButton href={`https://github.com/Drakodin`}>
            <GitHubIcon/>
        </IconButton>
        <IconButton href={`https://www.linkedin.com/in/tony-tian-660636192/`}>
            <LinkedInIcon/>
        </IconButton>
    </>
)



const NavBar = () => {
    const classes = useStyles();
    const [menuExists, setMenuExists] = React.useState(false);

    const checkEl = async () => {
        while (!document.querySelector('#nav-button')) {
            await new Promise(r => requestAnimationFrame(r));
        }
        setMenuExists(true);
    }

    React.useEffect(() => {
        checkEl();
    })

    return (
        <HideOnScroll>
            <AppBar position='sticky' className={classes.bar} elevation={2}>
                <Toolbar id="tb-bar">
                    <Box id="tb-bar-box" display="flex" flexGrow={1}>

                    </Box>
                    {/* Injection destination of a Button component */}
                    {(menuExists) ? <NavBarContent/> : <></>}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;