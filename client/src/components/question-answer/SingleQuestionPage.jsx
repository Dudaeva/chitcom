import { Box, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CommentIcon from "@material-ui/icons/Comment";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import logo from "../../images/bg-header.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#161718",
    color: "white",
    paddingTop: 10,
    fontSize: 15,
    margin: theme.spacing(0, "auto"),
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
  answer: {
    padding: 10,
    marginBottom: 20,
  },
  blockAnswer: {
    marginRight: 50,
  },
}));

function SingleQuestionPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <SearchBar />

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
              image={"https://ru.joblum.com/uploads/115/114179.png"}
              className={classes.avatar}
            />
            <Box pb={2} className={classes.login}>
              Евгений Кузьмин
            </Box>
            <Box pb={2}>@telegram</Box>
            <Box display="row">
              Вопрос задан
              <p>
                {" "}
                <DateRangeIcon />
                27.12.2019
              </p>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Box>
            <Typography variant="h5" className={classes.title_question}>
              Что на работе делает Java Программист без опыта работы, который
              только что устроился. Часть 1
            </Typography>
            <Typography className={classes.text_question}>
              <p>
                {" "}
                Итак, всем привет! В эту предновогоднюю пятницу я пришел на своё
                рабочее место и решил поделиться с новичками дела, уже как
                сторожил - а чем же занимается джуниор на работе по своему
                опыту.
              </p>
              <p>
                Это будет короткий пост, времени мало - тасков куча, да и кучу
                мануалов опять читать) учеба по 5 часов каждый день. Первый мой
                пост - https://javarush.ru/forum/25. Тут я писал, что устроился
                в компанию просто отсылая резюме всем подряд с пометками типа :
                "возьмите, я научусь, любые курсы за свои деньги, найму под ваши
                задачи себе ментора" и меня в итоге взяли. Страх был не просто
                большой, а огромный! Но я его преодолел и вышел на работу.
              </p>
              Когда нибудь я напишу об этом большую статью на своём личном
              сайте. Маленький совет, перед выходом надо знать - что в 80%
              случаев работодатель трезво оценивает ваши знания. Ну плюс минус,
              так что берет он вас не просто так! Так что снимаем волнение.
            </Typography>
          </Box>
          <Paper className={classes.blockAnswer}>
            <Box textAlign="center" p={3} mt={2}>
              <h5>
                ОТВЕТЫ НА ВОПРОС (
                <CommentIcon />
                212)
              </h5>
            </Box>

            <Paper>
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
                  <Box p={2} display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <CardMedia
                        image={"https://ru.joblum.com/uploads/115/114179.png"}
                        className={classes.avatar_anw}
                      />
                      <Typography>lorem</Typography>
                    </Box>
                    <Box>30 августа, 16:06</Box>
                  </Box>
                  <Box className={classes.answer}>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo voluptas ipsam officia dolores facere, eveniet id
                      impedit necessitatibus delectus est libero perspiciatis,
                      corrupti blanditiis doloremque. Maiores animi non
                      inventore iusto! Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Maiores libero voluptatem tempore
                      eveniet consectetur dolore nulla modi accusantium aliquam
                      atque! Nemo laboriosam facilis quis ad eius explicabo
                      alias iusto provident?
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Paper>

          <Box>
            <h3>Введите ваш ответ</h3>
            <textarea rows="10" cols="100" name="text"></textarea>{" "}
          </Box>
          <Box>
            <button class="btn btn-primary" type="button">
              Отправить
            </button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleQuestionPage;
