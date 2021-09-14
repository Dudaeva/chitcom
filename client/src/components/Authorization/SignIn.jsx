import {useState} from "react";
import { Paper, SnackbarContent, Snackbar, Input, InputLabel, withStyles,
    FormControl,  Button , InputAdornment, IconButton } from "@material-ui/core";
import { VisibilityTwoTone, VisibilityOffTwoTone } from "@material-ui/icons";
import { register } from "./RegistrationStyles";
import {useDispatch, useSelector} from "react-redux";
import {green} from "@material-ui/core/colors";
import {Close, Error} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import {Typography} from "@mui/material";
import logo from "../../images/updated_logo.png"
import {logIn} from "../../redux/feautures/auth";


const SignIn = (props) =>  {
    const { error, success, isSigningIn} = useSelector(store => store.auth);
    const { text } = useSelector((store) => store.languages);

    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState({
        login: "",
        password: "",
        hidePassword: true,
        statusMessageOpen: false
    })

    const closeStatusMessage = () => {
        setState({...state, statusMessageOpen: false });

        if (success) {
            dispatch({type: "auth/data/loginClear"});
        } else {
            dispatch({type: "auth/data/clear"});
        }
    };

    const handleChange = name => e => {
        setState({...state,
            [name]: e.target.value
        });
    };

    const showPassword = () => {
        setState({...state, hidePassword: !state.hidePassword });
    };

    const submitAuthorization = e => {

        e.preventDefault();

        const {login, password} = state;
        dispatch(logIn(login, password));

        setState({...state, statusMessageOpen: true});

    };

    const { classes } = props;
    return (
        <div className={classes.main}>

            <Paper className={classes.paper}>
                {(error || success) && (
                    <Snackbar
                        variant={error ? "error" : "success"}
                        key={error || success}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                        open={state.statusMessageOpen}
                        onClose={closeStatusMessage}
                        autoHideDuration={4000}
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
                                    onClick={closeStatusMessage}
                                >
                                    <Close color={error ? "error" : "success"} />
                                </IconButton>
                            ]}
                        />
                    </Snackbar>
                )}

                <img className={classes.avatar} src={logo} width={20} height={20}  alt="logo"/>

                <Typography>{text.signIn}</Typography>
                <form
                    className={classes.form}
                    onSubmit={() => submitAuthorization}
                >
                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="login" className={classes.labels}>
                            {text.login}
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
                            {text.password}
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
                    <div /> <br />
                    <Typography
                        className={classes.haveAccount}
                        onClick={() => history.push("/sign-up")}
                    >
                        {text.late}
                    </Typography>

                    <Button
                        disabled={isSigningIn}
                        disableRipple
                        fullWidth
                        variant="outlined"
                        className={classes.button}
                        type="submit"
                        onClick={submitAuthorization}
                    >
                        {text.SignInButton}
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default withStyles(register)(SignIn);
