import FinanceList from "../../components/FinanceList";
import FinancePost from "../../components/FinancePost";
import Sidebar from "../../components/DashboardSideBar";
import { useDispatch } from "react-redux";
import { getFinanceListRequest } from "../../stores/ducks/finance/actions";
import { useEffect } from "react";

export default function FinancePage() {

    return (
        <div>
            <Sidebar />
            <FinancePost />
            <FinanceList />
        </div>
    )
}