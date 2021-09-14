import { Box, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Typical from "react-typical";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: "88%",
    minHeight: 600,
    margin: theme.spacing(5, "auto"),
    backgroundColor: "white",
    padding: 50,
    borderRadius: 15,
  },
  paper: {
    height: 300,
    width: "90%",
    backgroundColor: "#ffd95c",
    padding: 24,
    borderRadius: 10,
    textAlign: "center",
  },
  button: {
    width: "60%",
    height: "18%",
    marginTop: 25,
  },
  thirdBlock: {
    width: "79%",
    height: 300,
    marginLeft: theme.spacing(14),
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(8),
    borderRadius: 10,
    backgroundColor: "#ffd95c",
    color: "black"
  }
}));

function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  const { text, currentLanguage } = useSelector((store) => store.languages);

  return (
      <>
        <Header />
        <Grid container className={classes.main}>
          <Grid className={classes.container}>
            <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
              <Grid item xs={12} sm={5} style={{ marginLeft: "30px" }}>
                <Paper className={classes.paper}>
                  <Box p={2}>
                    <QuestionAnswerIcon
                          color="action"
                          style={{ fontSize: "48px" }}
                          className={classes.question}
                      />
                  </Box>
                  <Box variant="h6" component="h5" m={3} className={classes.text}>
                   {text.homeFirstBlockTitle}
                  </Box>
                  <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.button}
                        onClick={() => history.push("/Posts")}
                    >
                      {text.homeFirstBlockButton}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.paper}>
                  <Box p={2}>
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
                      <path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 0 1-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z" />
                    </svg>
                  </Box>
                  <Box
                      variant="h6"
                      component="h5"
                      m={3}
                      className={classes.text2}
                  >
                  {text.homeSecondBlockTitle}
                  </Box>

                  <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.button}
                        onClick={() => history.push("/asks")}
                    >
                     {text.homeSecondBlockButton}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid>
               <Box className={classes.thirdBlock}>
                 {(currentLanguage === "en" ) ?
                    (<h1>Ahmed,
                        <Typical
                            steps={['thanks', 1200," for the help" ]}
                            loop={5}
                            wrapper="p"
                        />
                    </h1>)
                 :
                 (currentLanguage === "ru") ?
                    (<h1>Альви,
                      <Typical
                          steps={['спасибо', 1200," что ты есть!" ]}
                          loop={5}
                          wrapper="p"
                      />
                    </h1>)
                : 
                  (currentLanguage === "che") &&
                  (<h1>Милана, 
                    <Typical
                        steps={['г1овг1а ма йе', 1200," серьезно, г1овг1а ма йе!" ]}
                        loop={5}
                        wrapper="p"
                    />
                  </h1>)
                }
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </>
  );
}

export default HomePage;