import { useEffect } from "react"
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