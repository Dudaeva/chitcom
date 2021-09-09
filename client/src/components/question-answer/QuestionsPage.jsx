import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box, CardMedia, Typography } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CommentIcon from "@material-ui/icons/Comment";
import SearchBar from "./SearchBar";

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
    width: 150,
    height: 130,
    borderRadius: "50%",
    margin: theme.spacing(5, 0),
  },
  login: {
    boxShadow: "0 1px grey",
  },
}));

export default function QuestionsPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {/* Здесь будет header */}

      <SearchBar />

      <Grid container className={classes.question}>
        <Box
          ml={4}
          mr={1}
          display="flex"
          alignItems="center"
          flexDirection="column"
          height={320}
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
          height={320}
          width="70%"
          className={classes.block}
        >
          <Box height="100%" p={4}>
            <Typography>
              <h2>
                Что на работе делает Java Программист без опыта работы, который
                только что устроился.
              </h2>
              Часть 1 Итак, всем привет! В эту предновогоднюю пятницу я пришел
              на своё рабочее место и решил поделиться с новичками дела, уже как
              сторожил - а чем же занимается джуниор на работе по своему опыту.
              Это будет короткий пост, времени мало - тасков куча, да и кучу
              мануалов опять читать) учеба по 5 часов каждый...
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
          ml={4}
          mr={1}
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
          height={320}
          width="70%"
          className={classes.block}
        >
          <Box height="100%" p={4}>
            <Typography>
              <h2>
                Что на работе делает Java Программист без опыта работы, который
                только что устроился.
              </h2>
              Часть 1 Итак, всем привет! В эту предновогоднюю пятницу я пришел
              на своё рабочее место и решил поделиться с новичками дела, уже как
              сторожил - а чем же занимается джуниор на работе по своему опыту.
              Это будет короткий пост, времени мало - тасков куча, да и кучу
              мануалов опять читать) учеба по 5 часов каждый...
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
    </Paper>
  );
}
