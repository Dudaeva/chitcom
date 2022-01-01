import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getAllPosts } from "../../redux/feautures/posts";
import chit from "../../images/horizontal_on_white_by_logaster.png";

const useStyles = makeStyles((theme) => ({
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

function AllPostsPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { items } = useSelector((store) => store.posts);

  const correctTime = (time) => `${new Date(time).toLocaleDateString()}`;

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      {items.map((post) => (
        <Box ml={3} mb="30px" minHeight={500} position="relative" width={500}>
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
          <Box pt={2} onClick={() => history.push(`/posts/${post._id}`)}>
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
  );
}

export default AllPostsPage;
