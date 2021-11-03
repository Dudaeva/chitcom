import React from "react";
import Header from "./Header";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PostImage from "../../images/ahmed.png";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "90%",
    color: "white",
    margin: theme.spacing(16, "auto"),
  },
  title: {
    padding: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  infoAuthor: {
    position: "absolute",
    bottom: "0%",
    display: "flex",
    borderTop: " 1px solid grey",
    width: "100%",
    p: "10px",
  },
  footer: {
    position: "relative",
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
}));

function SinglePostPage() {
  const classes = useStyles();

  return (
    <Grid container>
      <Header />
      <Grid className={classes.main}>
        <Box display="flex" justifyContent="space-between" mb={7}>
          <Grid item xs={12} sm={7}>
            <img src={PostImage} alt="" width={800} />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footer}>
            <Typography variant="h5" className={classes.title}>
              Смешной запрос в Google Переводчике
            </Typography>
            <Box className={classes.infoAuthor}>
              <Box>
                <img src={PostImage} className={classes.avatar} alt="" />
              </Box>
              <Box p={1}>Mansur</Box>
            </Box>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} className={classes.text}>
          Зашёл в Google переводчик, чтобы правильно перевести Ахьмада на
          английский. На деле, вывелись какие-то не понятные запросы :) Решил
          поделиться, ибо запросы-то прикольные) Советую вам к просмотру!
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SinglePostPage;
