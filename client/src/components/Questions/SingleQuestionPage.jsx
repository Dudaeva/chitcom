import {
  Box,
  CardMedia,
  Grid,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  DateRange as DateRangeIcon,
  Comment as CommentIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  BookmarkBorder as BookmarkBorderIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneQuestion } from "../../redux/feautures/questions";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
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
    height: 40,
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

  const { questionId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneQuestion(questionId));
  }, [questionId, dispatch]);

  return (
    <>
      <Header />
      <Paper className={classes.main}>
        {loading ? (
          <h2>Идёт загрузка....</h2>
        ) : error ? (
          <h2>
            Упс.. ошибочка вышла <br /> {error}
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
                    image={currentAsk?.author.avatar_URI}
                    className={classes.avatar}
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
                    Вопрос задан
                    <p>
                      <DateRangeIcon />
                      {currentAsk?.createdAt}
                    </p>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={9}>
                <Box minHeight={500}>
                  <Typography variant="h5" className={classes.title_question}>
                    {currentAsk?.title}
                  </Typography>
                  <Typography className={classes.text_question}>
                    {currentAsk?.text}
                  </Typography>
                </Box>
                <Paper style={{ backgroundColor: "#ffd711" }}>
                  <Box textAlign="center" p={3} mt={2}>
                    <h5>
                      ОТВЕТЫ НА ВОПРОС (
                      <CommentIcon />
                      {currentAsk?.answers.length})
                    </h5>
                  </Box>

                  <Paper>
                    {currentAsk?.answers.map(item => 
                    <Box display="flex">
                      <Box textAlign="center" width={100}>
                        <Box p={3}>
                          <BookmarkBorderIcon />
                        </Box>
                        <button>
                          <KeyboardArrowUpIcon />
                        </button>
                        <h4>0</h4>
                        <button>
                          <KeyboardArrowDownIcon />
                        </button>
                      </Box>
                      <Box width="100%">
                        <Box
                          p={2}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Box display="flex">
                            <CardMedia
                               image={item.author.avatar_URI}
                              className={classes.avatar_anw}
                            />
                            <Typography>{item.author.name || item.author.login}</Typography>
                          </Box>
                          <Box> {new Date(item.createdAt).toLocaleDateString()} -- {new Date(item.createdAt).toTimeString().slice(0, 9)}</Box>
                        </Box>
                        <Box p={1.25} mb={2.5}>
                          <Typography>
                            {item.text}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    )}
                  </Paper>
                </Paper>

                <Box>
                  <Box>
                    <h3>Введите ваш ответ</h3>
                    <textarea rows="10" cols="100" name="text" />
                  </Box>
                  <button className="btn btn-primary" type="button">
                    Отправить
                  </button>
                </Box>
              </Grid>
            </Grid>
          </div>
        )}
      </Paper>
    </>
  );
};

export default SingleQuestionPage;
