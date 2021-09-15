import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CardMedia, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import { getAllPosts } from "../../redux/feautures/posts";
import chit from "../../images/horizontal_on_white_by_logaster.png";
import logo from "../../images/bg-header.svg";
import PostImage from "../../images/ahmed.png";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundColor: "#0e3459",
    paddingTop: "15px !important",
    flexWrap: "wrap",
    color: "white",
  },
  mainPost: {
    marginLeft: 24,
    minHeight: 400,
    position: "relative",
    width: "min-content",
    marginBottom:30
  },
  mainPostImg: {
    width: 550,
    height: 300,
    marginBottom: "16px !important",
  },
  
  category: {
    width: "40%",
    borderRadius: "5px",
    color: "brown",
    paddingTop: 4,
    paddingBottom: 4,
    cursor: "pointer",
    backgroundColor: "grey",
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
  imglogo:{
    width: '100%',
    marginBottom: '16px !important'
  }
}));

function PostPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { items, loading } = useSelector((store) => store.posts);
  const { text } = useSelector((store) => store.languages);

  const correctTime = (time) => `${new Date(time).toLocaleDateString()}`;

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grid container className={classes.main}>
      <Header />

      <Grid container>
        <Box width="100%" my={9}>
          <Typography variant="h4">{text.posts}</Typography>
          <Typography variant="h5">{text.postsTitle}</Typography>
        </Box>

        <Box display="contents">
          {loading ? (
            <h3>loading...</h3>
          ) : (
            <>
              <Box className={classes.mainPost}>
                <Box>
                  <img src={PostImage} alt="" className={classes.mainPostImg} />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box className={classes.category}>Полезное</Box>
                  <Box>15.09.2021</Box>
                </Box>
                <Box pt = {2} onClick={() => history.push("/posts/:postId")}>
                  <Typography variant="h5">
                  Смешной запрос в Google Переводчике
                  </Typography>
                </Box>
                <Box className={classes.infoAuthor}>
                  <Box><img src={chit} className={classes.avatar} alt="" /></Box>
                  <Box p={1}>Mansur</Box>
                </Box>
              </Box>

              {items.map((post) => (
                <Box ml={3} mb = '30px' minHeight={500} position="relative">
                  <Box>
                    <img src={chit} className={classes.imglogo} alt="" />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      className={classes.category}
                      onClick={() =>
                        history.push(`/posts/${post.category._id}`)
                      }
                    >
                      {post.category.name}
                    </Box>
                    <Box>{correctTime(post.createdAt)}</Box>
                  </Box>
                  <Box pt={2}
                    onClick={() => history.push(`/posts/${post._id}`)}
                  >
                    <Typography variant="h5">{post.title}</Typography>
                  </Box>
                  <Box className={classes.infoAuthor}>
                    <CardMedia
                      image={post.author?.avatar_URI}
                      className={classes.avatar}
                    />
                    <Box p={1}>{post.author?.name || post.author?.login}</Box>
                  </Box>
                </Box>
              ))}
            </>
          )}
        </Box>
      </Grid>
      <Box className={classes.root}>
        <Pagination count={10} shape="rounded" />
      </Box>
    </Grid>
  );
}

export default PostPage;