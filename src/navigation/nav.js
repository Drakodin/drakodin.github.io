import React from 'react';
import { AppBar, Toolbar, Drawer, Divider} from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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

    const toggleDrawer = () => {
        setOpen(!open);
    }
    
    const container = window !== undefined ? () => window.document.body : undefined;

    const drawerContent = (
        <div>
            <Toolbar>
                <Divider/>
            </Toolbar>
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