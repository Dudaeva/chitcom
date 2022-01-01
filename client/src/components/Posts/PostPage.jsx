import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import {getAllPosts,getCategories,getPostsByCategory} from "../../redux/feautures/posts";
import logo from "../../images/bg-header.svg";
import AllPostsPage from "./AllPostsPage";

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

  return (
    <Grid container className={classes.main}>
      <Header />

      {/* {loading ? (
        <h3>loading...</h3>
      ) : ( */}
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
              {/* {items.map((item) => {
                return <AllPostsPage item={item} key={item.id} />;
              })} */}
              <AllPostsPage />
            </Box>
          </Grid>

          <Box className={classes.root}>
            <Pagination count={10} shape="rounded" />
          </Box>
        </>
      {/* )} */}
    </Grid>
  );
}

export default PostPage;
