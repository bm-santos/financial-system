import { useSelector } from "react-redux"
import { Redirect } from "react-router"

export default function HomePage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)

    return (
        <>
            {(!isLogged || localStorage.getItem("token") === null) && <Redirect to={"/login"} exact />}
            <h1>Welcome</h1>
            <p>Controle seus gastos com o MyFinance, é fácil de usar e
            sem complicação.</p>
            <p>Com o MyFinance, você tem todos os dados financeiros
                em uma única plataforma.</p>
        </>

    )
}