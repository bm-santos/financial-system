import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Home from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'; import EuroSymbol from '@material-ui/icons/EuroSymbol';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EuroSymbol />
            </ListItemIcon>
            <ListItemText primary="Currency" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="My Finances" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset></ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);