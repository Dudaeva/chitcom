import {Box, CardMedia, Typography, Grid, Paper, makeStyles,} from "@material-ui/core";
import {DateRange as DateRangeIcon, Comment as CommentIcon} from "@material-ui/icons";

import { Telegram as TelegramIcon } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import Header from "../Header";
import {Link, useHistory, useLocation} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import { getQuestions } from "../../redux/feautures/questions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Pagination, PaginationItem} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    width: "89%",
    padding: 20,
    margin: theme.spacing(5, "auto"),
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
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

const QuestionsPage = () => {
  const classes = useStyles();
  const { asks, loading, error, askSuccess, pagesCount } = useSelector((store) => store.questions);

  const { text } = useSelector((store) => store.languages);

  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = query.get("page") ? Number(query.get("page")) : 1;

  const correctTime = (time) =>
      `${new Date(time).toLocaleDateString()} -- ${new Date(time).toTimeString().slice(0, 12)}`;

  useEffect(() => {
    dispatch(getQuestions(page));
  }, [page, dispatch]);

  return (
    <>
      <Header />
      <Paper className={classes.paper}>
        <SearchBar values={{ searchValue, setSearchValue }} />

        <Box>
          {loading ?
          <Box>
            <h4>{text.loader}</h4>
            <CircularProgress />
            </Box>
            : asks?.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((question) => (
                          <Grid container className={classes.question} key={question._id}>
                            <Box
                                mx={1}
                                pb={1}
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                                width={200}
                            >
                              <Box
                                  px={3}
                                  style={{cursor: "pointer"}}
                                  onClick={() => history.push(`/user/${question.author?._id}`)}>
                                <CardMedia
                                    image={question.author?.avatar_URI}
                                    className={classes.avatar}
                                />
                                <Box pb={2} mb={2} className={classes.login}>
                                  {question.author?.name || question.author?.login}
                                </Box>
                              </Box>
                              {question.author?.telegram_URI && (
                                  <Box>
                                    <TelegramIcon fontSize="small" color="primary"/>
                                    <a href={`https://t.me/${question.author?.telegram_URI}`}
                                       style={{textDecoration: "none"}}>
                                      @{question.author?.telegram_URI}
                                    </a>
                                  </Box>
                              )}
                            </Box>

                            <Box
                                position="relative"
                                width="70%"
                                className={classes.block}
                            >
                              <Box height="100%" p={4}>
                                <Typography
                                    fontWeight={500}
                                    variant="h5"
                                    style={{cursor: "pointer"}}
                                    onClick={() => history.push(`/asks/${question._id}`)}
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
                                  <DateRangeIcon/>
                                  {correctTime(question.createdAt)}
                                </Box>
                                <Box>
                                  <CommentIcon/>
                                  {question.answers.length} {text.answers}
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                      )
                  )
              }
          { !loading  &&
            <div className={classes.root}>
              <Pagination
                  page={page}
                  count={pagesCount}
                  shape="rounded"
                  renderItem={(item) => (
                      <PaginationItem
                          component={Link}
                          to={`/asks${item.page === 1 ? '' : `?page=${item.page}`}`}
                          {...item}
                      />
                  )}
              />
            </div>
          }
        </Box>
      </Paper>
    </>
  );
};

export default QuestionsPage;
