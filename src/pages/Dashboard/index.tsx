import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useState } from 'react';
import { Copyright } from '../../components/styles';
import CurrencyPage from '../../components/Currency';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import { Button, Dialog, DialogActions, DialogTitle, makeStyles } from '@material-ui/core';
import FinancePage from '../Finance';
import HomePage from '../Home';
import { Redirect } from 'react-router';
import { theme } from '../../index'

const drawerWidth = 240;


const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles(theme);
    const [open, setOpen] = useState(false);

    const [isHomeClicked, setIsHomeClicked] = useState(true);
    const [isCurrencyClicked, setIsCurrencyClicked] = useState(false);
    const [isFinanceClicked, setIsFinanceClicked] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);

    function clicouHome() {
        setIsHomeClicked(true)
        setIsCurrencyClicked(false)
        setIsFinanceClicked(false)
    }

    function clicouCurrency() {
        setIsHomeClicked(false)
        setIsCurrencyClicked(true)
        setIsFinanceClicked(false)
    }

    function clicouFinance() {
        setIsHomeClicked(false)
        setIsCurrencyClicked(false)
        setIsFinanceClicked(true)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const handleClickOpen = () => {
        setOpenConfirmation(true);
    };

    const handleClose = () => {
        setOpenConfirmation(false);
    };
    return (
        <>
            <div className={classes.root}>
                {isLoggedOut && <Redirect to={"/auth"} exact />}
                {/* {localStorage.getItem("token") === null && <Redirect to={"/login"} exact />} */}
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            MyFinance v2.8.2
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
                    <List>
                        <ListItem button
                            onClick={clicouHome}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button
                            onClick={clicouCurrency}>
                            <ListItemIcon>
                                <EuroSymbol />
                            </ListItemIcon>
                            <ListItemText primary="Currency" />
                        </ListItem>
                        <ListItem button
                            onClick={clicouFinance}>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Finances" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button
                            onClick={handleClickOpen}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    {isHomeClicked && <HomePage />}
                                    {isCurrencyClicked && <CurrencyPage />}
                                    {isFinanceClicked && <FinancePage />}

                                </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
                <Dialog
                    open={openConfirmation}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Do you want to leave?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            GO BACK
                        </Button>
                        <a href="/login"><Button variant="text" onClick={handleClose} color="inherit" autoFocus>
                            LOGOUT
                        </Button></a>
                    </DialogActions>
                </Dialog>
            </div >
        </>
    );
}