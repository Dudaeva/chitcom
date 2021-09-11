import {useEffect, useState} from "react";
import { Paper, SnackbarContent, Snackbar, CssBaseline, Input, InputLabel, withStyles,
    FormControl,  Avatar , Button , InputAdornment, IconButton } from "@material-ui/core";
import { PeopleAlt, VisibilityTwoTone, VisibilityOffTwoTone } from "@material-ui/icons";
import { register } from "./RegistrationStyles";
import {useDispatch, useSelector} from "react-redux";
import {clearData, createUser} from "../../redux/feautures/users";
import {green, red} from "@material-ui/core/colors";
import {Close, Error} from "@mui/icons-material";
import {Link, useHistory} from "react-router-dom";
import {Typography} from "@mui/material";


const SignUp = (props) =>  {
    const { error, success, signingUp } = useSelector(store => store.users);
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

    if (success?.includes("Пользователь успешно зарегистрирован!"))
        setTimeout(() => history.push("/sign-in"), 3000);

    const submitRegistration = e => {
        e.preventDefault();
        const newUserCredentials = {
            login: state.login,
            password: state.password,
        };

        dispatch(createUser(newUserCredentials));

        setState({...state, errorOpen: true});
    };

    const { classes } = props;

    return (
        <div className={classes.main}>
            <CssBaseline />

            <Paper className={classes.paper}>
                {(error || success) && (
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
                <Typography>Регистрация</Typography>
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
                    <Link to="/sign-in">Уже сделали это? Тогда включайся</Link>

                    <Button
                        disabled={signingUp}
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

export default withStyles(register)(SignUp);
