import React from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import { purple } from "@material-ui/core/colors";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AskQuestion from "./AskQuestion";
import { useSelector } from "react-redux";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[800]),
    backgroundColor: purple[800],
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  search: {
    margin: theme.spacing(3, 0),
  },
  input: {
    marginLeft: 80,
  },
}));

function SearchBar({values: {searchValue, setSearchValue}}) {
  const classes = useStyles();

  const { text } = useSelector((store) => store.languages);

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      className={classes.search}
    >
      <Box flex="0.8">
        <TextField
          placeholder={text.search}
          type="text"
          variant="outlined"
          fullWidth
          size="small"
          className={classes.input}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchValue && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setSearchValue("")}
              >
                <CancelIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box>
        <AskQuestion />
      </Box>
    </Grid>
  );
}

export default SearchBar;
