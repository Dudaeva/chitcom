import React from "react";
import styles from "./posts.module.css";
import { makeStyles } from "@material-ui/core/styles";
import chit from "../../images/horizontal_on_white_by_logaster.png";
import Header from "./Header";
import Footer from "./Footer";
import {Pagination, TextField} from "@mui/material";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function PostPage(props) {
  const classes = useStyles();

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>Посты</h1>
            <Typography component="h3" >Мы здесь для того, чтобы помочь разработчикам развиваться!</Typography>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.randomPost}>
            <div>
              <img src={chit} className={styles.img} alt="" />
            </div>
            {/* блок с категорией и датой */}
            <div className={styles.category_date}>
              <a href="#" className={styles.category}>
                code-for-a-living
              </a>
              SEPTEMBER 2, 2021
            </div>
            {/* блок с заголовком поста */}
            <div>
              <h1>
                Pandemic lockdowns accelerated cloud migration by three to four
                years
              </h1>
            </div>
            {/* блок с описанием поста */}
            <div className={styles.text}>
              The number of questions across Stack Overflow surged, and new
              research solidifies this trend. Avatar for David Gibson Avatar for
              Ben Popper
            </div>
            {/* блок с автором и его аватаркой */}
            <div className={styles.author}>
              <div>Ben Stone</div>
            </div>
          </div>

          {/* маленький блок */}
          <div className={styles.posts}>
            <div>
              <img src={chit} className={styles.img} alt="" />
            </div>
            {/* блок с категорией и датой */}
            <div className={styles.category_date}>
              <a href="#" className={styles.category}>
                code-for-a-living
              </a>{" "}
              SEPTEMBER 2, 2021
            </div>
            {/* блок с заголовкой поста */}
            <div>
              <h1>
                Pandemic lockdowns accelerated cloud migration by three to four
                years
              </h1>
            </div>
            {/* блок с описанием поста */}
            <div className={styles.text}>
              The number of questions across Stack Overflow surged, and new
              research solidifies this trend.
            </div>
            {/* блок с автором и его аватаркой */}
            <div className={styles.author}>
              <div>Ben Stone</div>
            </div>
          </div>

          {/* маленький блок */}
          <div className={styles.posts}>
            <div>
              <img src={chit} className={styles.img} alt="" />
            </div>
            {/* блок с категорией и датой */}
            <div className={styles.category_date}>
              <a href="#" className={styles.category}>
                code-for-a-living
              </a>{" "}
              SEPTEMBER 2, 2021
            </div>
            {/* блок с заголовкой поста */}
            <div>
              <h1>
                Pandemic lockdowns accelerated cloud migration by three to four
                years
              </h1>
            </div>
            {/* блок с описанием поста */}
            <div className={styles.text}>
              The number of questions across Stack Overflow surged, and new
              research solidifies this trend.
            </div>
            {/* блок с автором и его аватаркой */}
            <div className={styles.author}>
              <div>Ben Stone</div>
            </div>
          </div>
        </div>

        <div className={classes.root}>
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
