import {AppBar, InputBase, makeStyles, alpha, Box, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon, Search as SearchIcon, } from "@material-ui/icons";
import logotype from "../images/ref-logo.png";
import {useHistory} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import HeaderProfileIcon from "./HeaderProfileIcon";

const useStyles = makeStyles((theme) => ({
    toolbarFrame: {
        margin: theme.spacing(0, "auto"),
        width: "90%"
    },
    title: {
        flexGrow: 1,
        "& > img": {
            cursor: "pointer"
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}))

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="static" className={classes.toolbarFrame}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    mr={1}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
                    <img src={logotype} alt="profile icon" />
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
                <Box mr={3}>
                    <HeaderProfileIcon />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;