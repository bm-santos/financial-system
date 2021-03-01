import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import LoginPage from "../../components/Login"

export default function AuthenticationPage() {

    useEffect(() => {
        localStorage.clear()
    }, [])
    return (
        <>
            <LoginPage />
        </>
    )
}