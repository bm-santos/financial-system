import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getUserRegisterRequest } from "../../stores/ducks/user/actions"


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Copyright, useStylesAuthentication } from "../styles";
import { theme } from "../..";

export default function RegisterPage() {
    const inputRegisterEmail = useRef<HTMLInputElement>(null)
    const inputRegisterPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const { isRegistered } = useSelector((state: any) => state.userReducer)

    const classes = useStylesAuthentication(theme);

    const register = () => {
        const request = {
            email: inputRegisterEmail?.current?.value,
            password: inputRegisterPassword?.current?.value
        }
        dispatch(getUserRegisterRequest(request))
    }
    return (
        <>
            {isRegistered && <p>Signup was successful!</p>}
            {isRegistered && <Redirect to="/login" exact />}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create new account
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
                                    inputRef={inputRegisterEmail}
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
                                    inputRef={inputRegisterPassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={register}
                            className={classes.submit}
                        >
                            Sign Up
                    </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? <strong>Sign in</strong>
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