import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function Sidebar() {
    const [loggedOut, setLoggedOut] = useState<boolean>(false)
    const clear = () => {
        return (
            localStorage.clear(),
            setLoggedOut(true)
        )
    }
    return (
        <>
            { loggedOut && <Redirect to="/login" exact />}
            <h1>Sidebar</h1>
            <div>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/currency"><li>Currency</li></a>
                    <a href="/finance"><li>My Finances</li></a>
                    <li onClick={clear}>Logout</li>
                </ul>
            </div>
        </>
    )
}