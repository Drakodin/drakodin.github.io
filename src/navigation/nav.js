import React from 'react';
import { AppBar, Toolbar, Drawer, Divider} from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { IconButton, Hidden, Collapse } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Build from '@material-ui/icons/Build';
import Home from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        background: 'linear-gradient(30deg, #458bf7, #8e69ff 64.7%)'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 250,
            flexShrink: 0,
        },
    },
}));

const Navigation = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [projDraw, setProjDraw] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }
    const listItemClick = (event, index, key = undefined, dest = undefined) => {
        if (dest || key === "home") {
            setActiveIndex(index);
            window.location.href = `#/${dest}`;
            setOpen(false);
        } else {
            if (key === "projects") {
                setProjDraw(!projDraw);
            }
        }
    }
    
    const container = window !== undefined ? () => window.document.body : undefined;

    const drawerContent = (
        <div>
            <Toolbar style={{width: 250}}/>
            <Divider/>
            <List>
                <ListItem
                    button
                    selected={activeIndex === 0}
                    onClick={(event) => listItemClick(event, 0, "home", "")}
                >
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem
                    button
                    selected={activeIndex === 1}
                    onClick={(event) => listItemClick(event, 1, "projects")}
                >
                    <ListItemIcon>
                        <Build/>
                    </ListItemIcon>
                    <ListItemText primary="Projects"/>
                </ListItem>
                <Collapse in={projDraw} timeout={{enter: 400, exit: 400}}>
                    <List style={{marginLeft: 5}}>
                        <ListItem
                            button
                            selected={activeIndex === 100}
                            onClick={(event) => listItemClick(event, 100, "mui-drop-project", "projects/mui-dropdown")}>
                            <ListItemText secondary="MUI-Dropdown"/>
                        </ListItem>
                        <ListItem
                            button
                            selected={activeIndex === 101}
                            onClick={(event) => listItemClick(event, 101, "unbias-project", "projects/unbiasly")}
                        >
                            <ListItemText secondary="Unbias.ly"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )

    return (
        <div className={classes.root}>
            <AppBar position='sticky' className={classes.bar}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        className="cl-borderless"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="website navigation">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor='left'
                        open={open}
                        onClose={toggleDrawer}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

export default Navigation;