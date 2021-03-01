import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Sidebar from "../../components/DashboardSideBar";

export default function PageNotFound() {
    const { isLogged } = useSelector((state: any) => state.userReducer)

    return (
        <div className="div-notFound">
            {!isLogged && localStorage.getItem("token") === null && <Redirect to={"/auth"} exact />}
            <h1>Oooops... Page not found</h1>
        </div>
    )
}