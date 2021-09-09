import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    backgroundColor: "#00183d",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
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
  paper: {
    height: 600,
    width: "90%",
    display: "flex",
    marginTop: 50,
  },
  paper1: {
    height: 300,
    width: 450,
    backgroundColor: "#ffd95c",
    padding: 24,
    borderRadius: 10,
    textAlign: "center",
  },
  paper2: {
    height: 300,
    width: 450,
    backgroundColor: "#ffd95c",
    padding: 24,
    borderRadius: 10,
    textAlign: "center",
  },
  block1: {
    width: "100%",
    paddingLeft: 170,
    marginTop: 50,
  },
  block2: {
    width: "100%",
    paddingRight: 230,
    marginTop: 50,
  },
  button1: {
    width: "60%",
    height: "18%",
    marginTop: 25,
  },
  button2: {
    width: "60%",
    height: "18%",
    marginTop: 25,
  },
  text: {
    margin: 20,
  },
  text2: {
    margin: 20,
  },
  question: {
    height: 45,
  },
  block3: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  text3: {
    position: "relative",
    padding: theme.spacing(3),
  },
}));

function HomePage() {
  const [spacing, setSpacing] = React.useState(0);
  const classes = useStyles();

  const linkMUIStyles = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-disableElevation";
  const authLinkStyles = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-colorInherit";

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CHIT.COM
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
            <Link exact to="/sign-in" className={authLinkStyles}>Войти</Link>
          </Box>
          <Link exact to="/sign-up" className={authLinkStyles}>Зарегаться</Link>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.root1} spacing={0}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Paper className={classes.paper}>
              <Grid container justifyContent>
                <Grid item xs={6}>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={spacing}
                    className={classes.block1}
                  >
                    <Paper className={classes.paper1}>
                      <div className={classes.icon}>
                        {
                          <svg
                            aria-hidden="true"
                            className="fc-orange-500 mb16 svg-spot spotSearch"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                          >
                            <path
                              opacity=".2"
                              d="M29.22 38.1a3.4 3.4 0 014.81-4.82l8.81 8.81a3.4 3.4 0 01-4.81 4.81l-8.81-8.8z"
                            />
                            <path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 0 1-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z"/>
                          </svg>
                        }
                      </div>
                      <div className={classes.text}>
                        <h5>
                          {" "}
                          Find the best answer to your technical question, help
                          others answer theirs
                        </h5>
                      </div>

                      <Link className={`${classes.button1} ${linkMUIStyles}`} to="/posts">
                        Посты
                      </Link>
                    </Paper>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid
                    container
                    justifyContent="space-between"
                    spacing={spacing}
                    className={classes.block2}
                  >
                    <Paper className={classes.paper2}>
                      <div>
                        <QuestionAnswerIcon
                          color="action"
                          fontSize={"large"}
                          className={classes.question}
                        />
                        <div className={classes.text2}>
                          <h5>
                            Want a secure, private space for your technical
                            knowledge?
                          </h5>
                        </div>
                      </div>
                      <Link className={`${classes.button1} ${linkMUIStyles}`} to="/asks">
                        Ответ? / Вопрос!
                      </Link>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
