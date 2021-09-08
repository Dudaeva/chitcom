import { useState } from "react";
import { Paper, SnackbarContent, Snackbar, CssBaseline, Input, InputLabel, withStyles,
    FormControl,  Avatar , Button , InputAdornment, IconButton } from "@material-ui/core";
import { PeopleAlt, VisibilityTwoTone, VisibilityOffTwoTone } from "@material-ui/icons";
import { register } from "./RegistrationStyles";
import {useDispatch, useSelector} from "react-redux";
import {clearData, createUser, signInAccount} from "../../redux/feautures/users";
import {green, red} from "@material-ui/core/colors";
import {Close, Error} from "@mui/icons-material";
import {Link, useHistory} from "react-router-dom";
import {Typography} from "@mui/material";


const SignIn = (props) =>  {
    const { error, success, signingIn } = useSelector(store => store.users);
    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState({
        login: "",
        password: "",
        hidePassword: true,
        errorOpen: false
    })

    const errorClose = e => {
        setState({...state, errorOpen: false });
    };

    const handleChange = name => e => {
        setState({...state,
            [name]: e.target.value
        });
    };

    const showPassword = () => {
        setState({...state, hidePassword: !state.hidePassword });
    };

    const submitRegistration = e => {
        e.preventDefault();
        const {login, password} = state;

        dispatch(signInAccount(login, password));

        setState({...state, errorOpen: true});
    };

    const { classes } = props;

    if (success) {
        setTimeout(() => {
            dispatch(clearData());
            history.push("/sign-in")
        }, 2000)
    };

    return (
        <div className={classes.main}>
            <CssBaseline />

            <Paper className={classes.paper}>
                {error || success && (
                    <Snackbar
                        variant={error ? "error" : "success"}
                        key={error || success}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                        open={state.errorOpen}
                        onClose={errorClose}
                        autoHideDuration={3000}
                    >
                        <SnackbarContent
                            className={classes.error}
                            style={success && {color: "#31671a", border: `1.2px solid ${green[900]}`}}
                            message={
                                <div>
                                    <span style={{ marginRight: "8px" }}>
                                      <Error fontSize="large" color={error ? "error" : "success"} />
                                    </span>
                                    <span> {error || success} </span>
                                </div>
                            }
                            action={[
                                <IconButton
                                    key="close"
                                    aria-label="close"
                                    onClick={errorClose}
                                >
                                    <Close color={error ? "error" : "success"} />
                                </IconButton>
                            ]}
                        />
                    </Snackbar>
                )}
                <Avatar className={classes.avatar}>
                    <PeopleAlt className={classes.icon} />
                </Avatar>
                <Typography>Авторизация</Typography>
                <form
                    className={classes.form}
                    onSubmit={() => submitRegistration}
                >
                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="login" className={classes.labels}>
                            login
                        </InputLabel>
                        <Input
                            name="login"
                            type="text"
                            autoComplete="off"
                            className={classes.inputs}
                            disableUnderline={true}
                            onChange={handleChange("login")}
                        />
                    </FormControl>

                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="password" className={classes.labels}>
                            password
                        </InputLabel>
                        <Input
                            name="password"
                            autoComplete="off"
                            className={classes.inputs}
                            disableUnderline={true}
                            onChange={handleChange("password")}
                            type={state.hidePassword ? "password" : "input"}
                            endAdornment={
                                state.hidePassword ? (
                                    <InputAdornment position="end">
                                        <VisibilityOffTwoTone
                                            fontSize="medium"
                                            className={classes.passwordEye}
                                            onClick={showPassword}
                                        />
                                    </InputAdornment>
                                ) : (
                                    <InputAdornment position="end">
                                        <VisibilityTwoTone
                                            fontSize="medium"
                                            className={classes.passwordEye}
                                            onClick={showPassword}
                                        />
                                    </InputAdornment>
                                )
                            }
                        />
                    </FormControl>
                    <Link to="/sign-up">Зарегистрируйтесь, если ещё не сделали этого</Link>

                    <Button
                        disabled={signingIn}
                        disableRipple
                        fullWidth
                        variant="outlined"
                        className={classes.button}
                        type="submit"
                        onClick={submitRegistration}
                    >
                        Join
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default withStyles(register)(SignIn);
