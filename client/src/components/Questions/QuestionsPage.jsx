import { Box, CardMedia, Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import {DateRange as DateRangeIcon, Comment as CommentIcon} from "@material-ui/icons";
import SearchBar from "./SearchBar";
import Header from "../Header";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    width: "90%",
    padding: 20,
    margin: theme.spacing(0, "auto"),
  },
  question: {
    width: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    margin: theme.spacing(2, 9),
    border: " 1px solid grey",
  },
  block: {
    boxShadow: "-0.5px 0px 0px 0px grey",
  },
  comment: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: 45,
    boxShadow: "-0.5px -0.5px 0px 0px grey",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    margin: theme.spacing(2, 0),
  },
  login: {
    boxShadow: "0 1px grey",
  },
}));

export default function QuestionsPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
      <>
        <Header />
        <Paper className={classes.paper}>

          <SearchBar />

          <Box>
            <Grid container className={classes.question}>
              <Box
                  mx={1}
                  pb={1}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  width={200}
              >
                <CardMedia
                    image={"https://ru.joblum.com/uploads/115/114179.png"}
                    className={classes.avatar}
                />
                <Box pb={2} mb={2} className={classes.login}>
                  Евгений Кузьмин
                </Box>
                <Box>@telegram</Box>
              </Box>

              <Box
                  position="relative"
                  width="70%"
                  className={classes.block}
              >
                <Box height="100%" p={4} >
                  <Typography
                      fontWeight={500}
                      variant="h5"
                      style={{cursor: "pointer"}}
                      onClick={() => history.push("/asks/1")}
                  >
                    Что на работе делает Java Программист без опыта работы, который
                    только что устроился.
                  </Typography>
                </Box>
                <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-around"
                    className={classes.comment}
                >
                  <Box>
                    <DateRangeIcon />
                    27.12.2019
                  </Box>
                  <Box>
                    <CommentIcon />
                    212 комментариев
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid container className={classes.question}>
              <Box
                  mx={1}
                  pb={1}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  width={200}
              >
                <CardMedia
                    image={"https://ru.joblum.com/uploads/115/114179.png"}
                    className={classes.avatar}
                />
                <Box pb={2} mb={2} className={classes.login}>
                  Евгений Кузьмин
                </Box>
                <Box>@telegram</Box>
              </Box>

              <Box
                  position="relative"
                  width="70%"
                  className={classes.block}
              >
                <Box height="100%" p={4} >
                  <Typography
                      fontWeight={500}
                      variant="h5"
                      style={{cursor: "pointer"}}
                      onClick={() => history.push("/asks/1")}
                  >
                    Что на работе делает Java Программист без опыта работы, который
                    только что устроился.
                  </Typography>
                </Box>
                <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-around"
                    className={classes.comment}
                >
                  <Box>
                    <DateRangeIcon />
                    27.12.2019
                  </Box>
                  <Box>
                    <CommentIcon />
                    212 комментариев
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </>
  );
}
