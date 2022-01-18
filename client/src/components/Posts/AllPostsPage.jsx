import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getPostsByCategory } from "../../redux/feautures/posts";
import chit from "../../images/horizontal_on_white_by_logaster.png";

const useStyles = makeStyles((theme) => ({
  mainPost: {
    marginLeft: 24,
    marginBottom: "30px",
    minHeight: 500,
    position: "relative",
    width: 500,
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

function AllPostsPage({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const correctTime = (time) => `${new Date(time).toLocaleDateString()}`;

  const handleGetByCategories = (categoryId) => {
    dispatch(getPostsByCategory(categoryId));
  };

  return (
    <>
      <Box key={post._id} className={classes.mainPost}>
        <Box>
          <img src={chit} className={classes.imglogo} alt="" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            className={classes.category}
            onClick={() => handleGetByCategories(post?.category._id)}
          >
            {post.category?.name}
          </Box>
          <Box>{correctTime(post.createdAt)}</Box>
        </Box>
        <Box pt={2} onClick={() => history.push(`/post/${post._id}`)}>
          <Typography variant="h5">{post.title}</Typography>
        </Box>
        <Box className={classes.infoAuthor}>
          <CardMedia
            image={post.author?.avatar_URI}
            className={classes.avatar}
            component="img"
          />
          <Box p={1}>{post.author?.name || post.author?.login}</Box>
        </Box>
      </Box>
    </>
  );
}

export default AllPostsPage;
