import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar, Drawer, Divider} from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { IconButton, Hidden, Collapse } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Build from '@material-ui/icons/Build';
import Home from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: 240,
        overflow: 'auto',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            overflow: 'auto',
            width: 240,
            position: 'relative',
            height: '100%',
        }
    }
}));

const Navigation = () => {
    const rootDiv = React.useRef(null);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [projDraw, setProjDraw] = React.useState(false);

    const [bar, setBar] = React.useState(undefined);

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

    const sendButton = (el) => {
        return ReactDOM.createPortal(
            <IconButton
                aria-label="open drawer"
                edge="start"
                className="cl-borderless"
                id="nav-button"
                onClick={toggleDrawer}
            >
                <MenuIcon style={{color: "#f8f9fa"}}/>
            </IconButton>,
            el
        );
    };

    const checkEl = async (sel) => {
        while (!document.querySelector(sel)) {
            await new Promise(r => requestAnimationFrame(r));
        }
        setBar(document.querySelector(sel));
    }

    React.useEffect(() => {
        checkEl('#tb-bar-box');
    })

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
        <div className={classes.root} ref={rootDiv}>
            <nav className={classes.drawer} aria-label="website navigation">
                <Hidden smUp implementation="css">
                    <React.Fragment>
                        <Drawer
                            container={rootDiv.current}
                            variant="temporary"
                            anchor='left'
                            open={open}
                            onClose={toggleDrawer}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            classes={{
                                paper: classes.drawerPaper,   
                            }}
                        >
                            {drawerContent}
                        </Drawer>
                    </React.Fragment>
                </Hidden>
            </nav>
            {(bar) ? sendButton(bar) : <></>}
        </div>
    )
}

export default Navigation;