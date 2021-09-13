import React from "react";
import {
  DateRange as DateRangeIcon,
  Comment as CommentIcon,
  Telegram as TelegramIcon,
} from "@material-ui/icons";
import {
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: 660,
    margin: theme.spacing(0, "auto"),
  },
  avatar: {
    width: 170,
    height: 160,
    borderRadius: "10%",
  },
  data: {
    marginRight: 35,
    padding: 40,
  },
}));

function MyProfilePage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Box width="100%" height={55} pt={2}>
        <Typography
          variant="h4"
          style={{ textShadow: "1px 1px 2px black, 0 0 1em #e9ad15" }}
        >
          Мой профиль
        </Typography>
      </Box>
      <Box
        width="80%"
        minHeight={550}
        ml={17}
        p={5}
        fontSize="18px"
        boxShadow="0px 0px 20px 7px black"
        borderRadius="10px"
        display="flex"
      >
        <Paper className={classes.data}>
          <CardMedia
            image={"https://ru.joblum.com/uploads/115/114179.png"}
            className={classes.avatar}
          />
          <Box mt={3} borderBottom="1px solid #d0d7dd">
            Евгений Кузьмин
          </Box>
          <Box mt={3} borderBottom="1px solid #d0d7dd">
            <TelegramIcon fontSize="small" color="primary" />
            <a href={``} style={{ textDecoration: "none" }}>
              @telegram
            </a>
          </Box>
        </Paper>

        <Paper>
          <h1>Мои вопросы</h1>
          <Box position="relative" width={756}>
            <Box p={3} borderBottom="2px solid #d0d7dd">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              culpa eaque eos quasi ducimus! Doloremque debitis molestiae nulla
              quae eos atque minima? Animi, iusto ut ducimus aliquam aut debitis
              accusantium.
            </Box>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-around"
              borderBottom="2px solid #d0d7dd"
              bottom="0%"
              width="100%"
              height={35}
            >
              <Box>
                <DateRangeIcon />
                12.09.2021
              </Box>
              <Box>
                <CommentIcon />0 ответов
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

   </Grid>
  );
}

export default MyProfilePage;
