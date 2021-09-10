import { Box, CardMedia, Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import {DateRange as DateRangeIcon, Comment as CommentIcon} from "@material-ui/icons";
import SearchBar from "./SearchBar";
import Header from "../Header";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {getQuestions} from "../../redux/feautures/questions";
import {useDispatch, useSelector} from "react-redux";

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

const QuestionsPage = () => {
  const classes = useStyles();
  const {asks, loading, error} = useSelector(store => store.questions);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions())
  }, [])

  return (
      <>
        <Header />
        <Paper className={classes.paper}>

          <SearchBar />

          <Box>
            {loading ?
                <h4>Загружаем вопросы...</h4> :
                asks?.map(question =>
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
                        image={question.author.avatar_URI}
                        className={classes.avatar}
                    />
                    <Box pb={2} mb={2} className={classes.login}>
                      {question.author.name || question.author.login}
                    </Box>
                    {question.author.telegram_URI &&
                      <Box>
                        <a href={`https://t.me/${question.author.telegram_URI}`}>
                           @{question.author.telegram_URI}
                        </a>
                      </Box>}
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
                          onClick={() => history.push(`/asks/${question.id}`)}
                      >
                        {question.title}
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
                        {question.createdAt.slice(0, 10)}
                      </Box>
                      <Box>
                        <CommentIcon />
                        {question.answers.length} ответов
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )}
          </Box>
        </Paper>
      </>
  );
}

export default QuestionsPage;
