import { useSelector } from "react-redux"
import { Redirect } from "react-router"

export default function AuthenticationPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const myToken = localStorage.getItem("token")
    return (
        <>
            <h1>Auth</h1>
            {(myToken === null || !isLogged) &&
                <Redirect to={"/login"} exact />}
            {}
        </>
    )
}