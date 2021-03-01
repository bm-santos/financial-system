import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import LoginPage from "../../components/Login"

export default function AuthenticationPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)

    useEffect(() => {
        localStorage.clear()
    }, [])
    return (
        <>
            {(localStorage.getItem("token") === null || !isLogged) &&
                <Redirect to={"/login"} exact />}
            <LoginPage />
        </>
    )
}