import { DateRange as DateRangeIcon, Telegram as TelegramIcon } from "@material-ui/icons";
import { CardMedia, Grid, makeStyles, Paper, Box} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadUserData} from "../redux/feautures/auth";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: 660,
    margin: theme.spacing(10, "auto"),
    color: "#ccbb8a"
  },
  avatar: {
    width: 170,
    height: 160,
    borderRadius: "10%",
  },
  data: {
    backgroundColor: "transparent",
    color: "#fafafa",
    marginRight: 35,
    padding: 40,
    boxShadow: "none"
  },
  about: {
    backgroundColor: "transparent",
    color: "#fafafa",
    boxShadow: "none"
  },
  bigBox: {
    width: "80%",
    minHeight: 550,
    marginLeft: theme.spacing(17),
    padding: theme.spacing(5),
    fontSize: 18,
    borderRadius: 10,
    display: "flex"
  },
  secondBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "2px solid #d0d7dd",
    bottom: "0%",
    width: "100%",
    height: 35
  }
}));

function MyProfilePage() {
  const classes = useStyles();
  const { myData } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const correctTime = (time) =>
      `${new Date(time).toLocaleDateString()} в ${new Date(time).toTimeString().slice(0, 9)}`;
  
  useEffect(() => dispatch(loadUserData()), []);

  return (
    <Grid container className={classes.main}>
      <Box className={classes.bigBox}>
        <Paper className={classes.data}>
          <CardMedia
            image={myData?.avatar_URI}
            className={classes.avatar}
          />
          <Box mt={3} borderBottom="1px solid #d0d7dd">
            {myData?.name || myData?.login}
          </Box>
          <Box mt={3} borderBottom="1px solid #d0d7dd">
            {myData?.telegram_URI && (
                <Box>
                  <TelegramIcon fontSize="small" color="primary"/>
                  <a href={`https://t.me/${myData?.telegram_URI}`}
                     style={{textDecoration: "none"}}>
                    @{myData?.telegram_URI}
                  </a>
                </Box>
            )}


          </Box>
          <Box mt={3} borderBottom="1px solid #d0d7dd">
            <DateRangeIcon />
            Зарегистрирован: <br />
            {correctTime(myData?.createdAt)}
          </Box>
        </Paper>

        <Paper className={classes.about}>
          <h1>Коротко обо мне</h1>
          <Box position="relative" width={756}>
            <Box p={3}>
              FullStack разработчик, мой стек - MERN. Мне 18 лет, прожил всю свою жизнь в Англии, в последнем году
              переехал в Чечню. Говорят, что у меня сгорела гарантия :(
            </Box>

          </Box>
        </Paper>
      </Box>

   </Grid>
  );
}

export default MyProfilePage;
