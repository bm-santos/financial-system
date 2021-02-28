import FinanceList from "../../components/FinanceList";
import FinancePost from "../../components/FinancePost";
import Sidebar from "../../components/Sidebar";

export default function FinancePage() {
    return (
        <div>
            <Sidebar />
            <FinancePost />
            <FinanceList />
        </div>
    )
}