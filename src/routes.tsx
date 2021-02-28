import { Route, Switch } from "react-router";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import HomePage from "./pages/Home";
import CurrencyPage from "./pages/Currency";
import FinancePage from "./pages/Finance";
import PageNotFound from "./pages/404";
import AuthenticationPage from "./pages/Authentication";

export default function Routes() {
    return (
        <Switch>
            <Route path="/auth" exact component={AuthenticationPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/currency" exact component={CurrencyPage} />
            <Route path="/finance" exact component={FinancePage} />
            <Route path="*" component={PageNotFound} />
        </Switch>

    )
}