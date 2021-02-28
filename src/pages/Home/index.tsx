import { useState } from "react";
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import Sidebar from "../../components/DashboardSideBar"
import { useStylesDashboard } from "../../components/styles";
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
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardCenterArea from "../../components/DashboardCenterArea";
import Appbar from "../../components/DashboardAppBar";

export default function HomePage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)

    const classes = useStylesDashboard();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const myToken = localStorage.getItem("token")

    return (
        <>
            {!isLogged && myToken === null && <Redirect to={"/auth"} exact />}
            < Sidebar />
            <h1>Welcome home</h1>
            {/* <div className={classes.root}>
                <CssBaseline />
                <Appbar />

                <DashboardCenterArea />
            </div> */}
        </>

    )
}