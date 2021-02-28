import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getUserRegisterRequest } from "../../stores/ducks/user/actions"

export default function RegisterPage() {
    const inputRegisterEmail = useRef<HTMLInputElement>(null)
    const inputRegisterPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const { isRegistered } = useSelector((state: any) => state.userReducer)

    const register = () => {
        const request = {
            email: inputRegisterEmail?.current?.value,
            password: inputRegisterPassword?.current?.value
        }
        dispatch(getUserRegisterRequest(request))
    }
    return (
        <>

            <div>
                <h1>Register</h1>
            </div>
            <div>
                <input type="email" placeholder="email" ref={inputRegisterEmail}></input>
                <input type="password" placeholder="password" ref={inputRegisterPassword}></input>
                <button type="submit" onClick={register}>Create account</button>
            </div>
            {isRegistered && <p>Signup was successful!</p>}
            {isRegistered && <Redirect to="/login" exact />}
        </>
    )
}