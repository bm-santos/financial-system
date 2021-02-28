import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getUserLoginRequest } from "../../stores/ducks/user/actions"

export default function LoginPage() {
    const inputLoginEmail = useRef<HTMLInputElement>(null)
    const inputLoginPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const { isLogged } = useSelector((state: any) => state.userReducer)

    const register = () => {
        const request = {
            email: inputLoginEmail?.current?.value,
            password: inputLoginPassword?.current?.value
        }
        dispatch(getUserLoginRequest(request))
    }
    return (
        <>

            <div>
                <h1>Sign in</h1>
            </div>
            <div>
                <input type="email" placeholder="email" ref={inputLoginEmail}></input>
                <input type="password" placeholder="password" ref={inputLoginPassword}></input>
                <button type="submit" onClick={register}>Sign in</button>
            </div>
            {isLogged && <p>Login was successful!</p>}
            {isLogged && <Redirect to={"/"} exact />}
        </>
    )
}