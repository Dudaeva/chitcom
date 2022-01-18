import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import { getAllPosts,getCategories,getPostsByCategory } from "../../redux/feautures/posts";
import logo from "../../images/bg-header.svg";
import AllPostsPage from "./AllPostsPage";
import SearchIn from "./Search";
import CreatePost from "./CreatePost";

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
  }
}));

function PostPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [textSearch, setTextSearch] = useState("");

  const { items, categories, loading } = useSelector((store) => store.posts);
  const { text } = useSelector((store) => store.languages);
  const { isSignedIn } = useSelector((store) => store.auth);

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
      <Box>
        <SearchIn values={{ textSearch, setTextSearch }} />
      </Box>
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

              <Box>{isSignedIn ? <CreatePost /> : ""}</Box>

              <Typography className={classes.catList}>
                <Button onClick={() => handleGetAllPosts()}>Все</Button>
                {categories.map((category) => (
                  <Button
                    key={category._id}
                    onClick={() => handleGetByCategories(category._id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </Typography>
            </Box>

            <Box display="contents">
              {items
                ?.filter((item) =>item?.title?.toLowerCase().includes(textSearch.toLowerCase()))
                .map((post) => {
                  return <AllPostsPage post={post} key={post._id} />;
                })}
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
