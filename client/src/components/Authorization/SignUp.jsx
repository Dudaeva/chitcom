import {useState} from "react";
import {
    Paper, SnackbarContent, Snackbar, Input, InputLabel, withStyles,
    FormControl, Avatar, Button, InputAdornment, IconButton, FormControlLabel
} from "@material-ui/core";
import { PeopleAlt, VisibilityTwoTone, VisibilityOffTwoTone } from "@material-ui/icons";
import { register } from "./RegistrationStyles";
import {useDispatch, useSelector} from "react-redux";
import {green} from "@material-ui/core/colors";
import {Close, Error} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import {Typography} from "@mui/material";
import {signUp} from "../../redux/feautures/auth";

export const SignUpAvatar = ({classes, state}) => (
    <Avatar className={`${classes.avatar} ${classes.signup}`}
            style={state.avatar ? {backgroundColor: "#344892"} : null}>
        <PeopleAlt className={classes.icon} /> {/*Если пользователь выбрал аватарку, то фон меняется */}
    </Avatar>
);


const SignUp = (props) =>  {
    const { error, success, isSigningUp } = useSelector(store => store.auth);
    const { text } = useSelector((store) => store.languages);

    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState({
        login: "",
        password: "",
        avatar: "",
        hidePassword: true,
        statusMessageOpen: false
    })

    const closeStatusMessage = e => {
        setState({...state, statusMessageOpen: false });

        if (success) {
            dispatch({type: "auth/data/clear"});
            return history.push("/sign-in")
        }
        dispatch({type: "auth/data/clear"});
    };

    const handleChange = (name, option = "value") => e => {
        setState({...state,
            [name]: e.target[option]
        });
    };

    const showPassword = () => {
        setState({...state, hidePassword: !state.hidePassword });
    };

    const submitRegistration = e => {
        e.preventDefault();
        const newUserCredentials = {
            avatar_URI: state.avatar,
            telegram_URI: "bimurzaew",
            login: state.login,
            password: state.password,
        };

        dispatch(signUp(newUserCredentials));

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
                                    onClick={closeStatusMessage}
                                >
                                    <Close color={error ? "error" : "success"} />
                                </IconButton>
                            ]}
                        />
                    </Snackbar>
                )}

                <FormControlLabel
                    style={{marginRight: "-9px"}}
                    control={
                        <input name="avatar" accept="image/*" className={classes.fileInput} type="file" />
                    }
                    label={<SignUpAvatar classes={classes} state={state} />}
                    onChange={handleChange("avatar", "files")}
                />
                <Typography>{text.signUp}</Typography>

                <form
                    className={classes.form}
                    onSubmit={() => submitRegistration}
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
                        onClick={() => history.push("/sign-in")}
                    >
                         {text.signInToProfile}
                    </Typography>

                    <Button
                        disabled={isSigningUp}
                        disableRipple
                        fullWidth
                        variant="outlined"
                        className={classes.button}
                        type="submit"
                        onClick={submitRegistration}
                    >
                        {text.signUpButton}
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default withStyles(register)(SignUp);
