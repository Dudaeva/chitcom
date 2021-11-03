import { Box, CardMedia, Grid, Paper, makeStyles,} from "@material-ui/core";
import {DateRange as DateRangeIcon,} from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../redux/feautures/questions";
import Header from "../Header";
import Answers from "./Answers";

export const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 10,
    fontSize: 15,
    margin: theme.spacing(5, "auto"),
    width: "90%",
  },
  avatar: {
    width: 150,
    height: 130,
    borderRadius: "50%",
    margin: theme.spacing(5, 0),
  },
  avatar_anw: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    margin: theme.spacing(0, 1),
  },
  title_question: {
    padding: theme.spacing(6, 2),
  },
  text_question: {
    lineHeight: 2.3,
  },
}));

const SingleQuestionPage = (props) => {
  const classes = useStyles();
  
  const { loading, error, currentAsk } = useSelector((store) => store.questions);
  const { text } = useSelector((store) => store.languages);

  const { questionId } = useParams();

  const dispatch = useDispatch();

  const correctTime = (time) =>
      `${new Date(time).toLocaleDateString()} в ${new Date(time).toTimeString().slice(0, 9)}`;

  useEffect(() => {
    dispatch(getOneQuestion(questionId));
  }, [questionId, dispatch]);

  return (
    <>
      <Header />
      <Paper className={classes.main}>
        {loading ? (
          <h2>{text.loaderOneQuestion}</h2>
        ) : error ? (
          <h2>
            {text.loaderOneQuestion2} <br /> {error}
          </h2>
        ) : (
          <div>
            <Grid container display="flex">
              <Grid item xs={12} sm={2}>
                <Box
                  ml={3}
                  mr={1}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  height="100%"
                >
                  <CardMedia
                      src={currentAsk?.author.avatar_URI}
                      className={classes.avatar}
                      component={"img"}
                  />
                  <Box pb={2}>
                    {currentAsk?.author.name || currentAsk?.author.login}
                  </Box>
                  {currentAsk?.author.telegram_URI && (
                    <Box>
                      <a
                        href={`https://t.me/${currentAsk?.author.telegram_URI}`}
                      >
                        @{currentAsk?.author.telegram_URI}
                      </a>
                    </Box>
                  )}
                  <Box display="row">
                    {text.dateQuestion}
                    <p>
                      <DateRangeIcon />
                      {correctTime(currentAsk?.createdAt)}
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Answers correctTime={correctTime}/>
            </Grid>
          </div>
        )}
      </Paper>
    </>
  );
};

export default SingleQuestionPage;
