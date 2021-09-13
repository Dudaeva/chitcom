import {AppBar, InputBase, makeStyles, alpha, Box, Toolbar, Typography} from "@material-ui/core";
import { Search as SearchIcon, } from "@material-ui/icons";
import logotype from "../images/ref-logo.png";
import profileIcon from "../images/profile.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar:{
      justifyContent:"space-between",
  },
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
    profile: {
        cursor: "pointer"
    },
}));

const Header = () => {
  const token = "";
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="static" className={classes.toolbarFrame}>
      <Toolbar className={classes.toolbar}>
        <Box>
          <Typography variant="h6" className={classes.title}
            onClick={() => history.push("/")}
          >
            <img src={logotype} alt = "logo" />
          </Typography>
        </Box>
        <Box display="flex">
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <Box mr={3}>
            <img className={classes.profile} src={profileIcon}
              onClick={() => history.push(token ? "/my-profile" : "/sign-up")}
              alt="profile"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;