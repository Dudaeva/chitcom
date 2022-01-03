import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import {getAllPosts,getCategories,getPostsByCategory} from "../../redux/feautures/posts";
import logo from "../../images/bg-header.svg";
import AllPostsPage from "./AllPostsPage";
import chit from "../../images/horizontal_on_white_by_logaster.png";
import SearchIn from "./Search";

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
  catList: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  },
  mainPost: {
    marginLeft:24,
    marginBottom:"30px",
    minHeight: 500,
    position: "relative",
    width: 500
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
  imglogo: {
    width: "100%",
    marginBottom: "16px !important",
  },
}));

function PostPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [textSearch, setTextSearch] = useState("");

  const correctTime = (time) => `${new Date(time).toLocaleDateString()}`;

  const { items, categories, loading } = useSelector((store) => store.posts);
  const { text } = useSelector((store) => store.languages);

  const handleGetAllPosts = () => {
    dispatch(getAllPosts());
  };

  const handleGetByCategories = (categoryId) => {
    dispatch(getPostsByCategory(categoryId));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grid container className={classes.main}>
      <Header />
      <Box><SearchIn values={{ textSearch, setTextSearch }} /></Box>
      {loading ? (
        <Typography variant="h4" style={{ margin: "100px auto" }}>
          loading...
        </Typography>
      ) : (
        <>
          <Grid container>
            <Box width="100%" my={9}>
              <Typography variant="h4">{text.posts}</Typography>
              <Typography variant="h5">{text.postsTitle}</Typography>
              <Typography className={classes.catList}>
                <Button onClick={() => handleGetAllPosts()}>Все</Button>
                {categories.map((category) => (
                  <Button onClick={() => handleGetByCategories(category._id)}>
                    {category.name}
                  </Button>
                ))}
              </Typography>
            </Box>

            <Box display="contents">
              {/* {items.map((post) => {
                return <AllPostsPage post={post} />;
              })}   бесконечно рендерится если разбит на компонент*/}
              {/* <AllPostsPage /> */}
              {items
                .filter((item) =>
                  item.title?.toLowerCase().includes(textSearch.toLowerCase())
                )
                .map((post) => (
                  <Box className={classes.mainPost}>
                    <Box>
                      <img src={chit} className={classes.imglogo} alt="" />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Box
                        className={classes.category}
                        onClick={() => history.push(`/posts/${post.category._id}`)}
                      >
                        {post.category.name}
                      </Box>
                      <Box>{correctTime(post.createdAt)}</Box>
                    </Box>
                    <Box
                      pt={2}
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
            </Box>
          </Grid>

          <Box className={classes.root}>
            <Pagination count={10} shape="rounded" />
          </Box>
        </>
      )}
    </Grid>
  );
}

export default PostPage;
