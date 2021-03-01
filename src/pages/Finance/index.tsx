import FinanceList from "../../components/FinanceList";
import FinancePost from "../../components/FinancePost";
import { Redirect } from "react-router";

export default function FinancePage() {

    return (
        <div>

            {localStorage.getItem("token") === null && <Redirect to={"/login"} exact />}
            <FinancePost />
            <FinanceList />
        </div>
    )
}