import { Box, Button, FormControl, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/feautures/posts";

function CreatePost(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const { categories, loading } = useSelector((store) => store.posts);

  const handleCreatePost = () => {
    dispatch(addPost(category, title, text));
  };

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <Box>
      <Paper>
        <Typography align="center">Выберите категорию</Typography>
        <FormControl>
          <Select
            value={category}
            onChange={handleAddCategory}
            inputProps={{ "aria-label": "Without label" }}
          >
            {categories.map((item) => (
              <MenuItem key={item._id} value={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
        <TextField
          label="Добавить заголовок"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Добавить текст"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleCreatePost}
        >
          Создать пост
        </Button>
      </Box>
    </div>
  );
}

export default CreatePost;
