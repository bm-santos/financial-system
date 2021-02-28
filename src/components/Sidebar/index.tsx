import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [loggedOut, setLoggedOut] = useState<boolean>(false)
    const clear = () => {
        return (
            localStorage.clear(),
            setLoggedOut(true)
        )
    }
    return (
        <>
            { loggedOut && <Redirect to="/login" exact />}
            <h1>Sidebar</h1>
            <div>
                <button onClick={(event) => <Redirect to="/" exact />}>Home</button>
                <button onClick={(event) => <Redirect to="/currency" exact />}>Currency</button>
                <button onClick={(event) => <Link to="/finance" />}>My Finances</button>
                <button onClick={clear}>Logout</button>
            </div>
        </>
    )
}