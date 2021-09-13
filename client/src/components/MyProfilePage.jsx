import { DateRange as DateRangeIcon, Comment as CommentIcon, Telegram as TelegramIcon } from "@material-ui/icons";
import { CardMedia, Grid, makeStyles, Paper, Box} from "@material-ui/core";

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

  return (
    <Grid container className={classes.main}>
      <Box className={classes.bigBox}>
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

        <Paper className={classes.about}>
          <h1>Коротко обо мне</h1>
          <Box position="relative" width={756}>
            <Box p={3} borderBottom="2px solid #d0d7dd">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              culpa eaque eos quasi ducimus! Doloremque debitis molestiae nulla
              quae eos atque minima? Animi, iusto ut ducimus aliquam aut debitis
              accusantium.
            </Box>
            <Box className={classes.secondBox}>
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
