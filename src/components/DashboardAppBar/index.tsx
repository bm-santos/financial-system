import { AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@material-ui/core";
import { useStylesDashboard } from "../styles";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from '../../components/SidebarItems';

export default function Appbar() {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const classes = useStylesDashboard();
    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        MyFinance v2.12.3
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        </>
    )
}