import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getUserLoginRequest } from "../../stores/ducks/user/actions"
import React, { useEffect, useRef } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Copyright, useStylesAuthentication } from "../styles";


export default function LoginPage() {
    const classes = useStylesAuthentication();
    const inputLoginEmail = useRef<HTMLInputElement>(null)
    const inputLoginPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const { isLogged } = useSelector((state: any) => state.userReducer)

    const login = () => {
        const request = {
            email: inputLoginEmail?.current?.value,
            password: inputLoginPassword?.current?.value
        }
        return dispatch(getUserLoginRequest(request))
    }
    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <>
            {isLogged && <p>Login was successful!</p>}
            {isLogged && <Redirect to={"/"} exact />}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome back :)
                </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    inputRef={inputLoginEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputRef={inputLoginPassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={login}
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    Don't have an account? <strong>Sign up</strong>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </>
    )
}