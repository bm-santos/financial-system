import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import Sidebar from "../../components/Sidebar"

export default function HomePage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    return (
        <div>
            <h1>Home</h1>
            {!isLogged && <Redirect to={"/auth"} exact />}
            <Sidebar />
        </div>
    )
}