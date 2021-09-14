import { Select, FormControl, makeStyles, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

function Language() {

  const dispatch = useDispatch();
  const {currentLanguage} = useSelector(store => store.languages)

  const changeLanguage = (e) => {
    dispatch({ type: "language/setLanguage", language: e.target.value});
  };

  const classes = useStyles();
  
  return (
      <FormControl className={classes.formControl}>
        <Select value={currentLanguage} onChange={changeLanguage}>
          <MenuItem value={"ru"}>
            Русский
          </MenuItem>
          <MenuItem value={"en"}>
            English
          </MenuItem>
          <MenuItem value={"che"}>
            Нохчийн
          </MenuItem>
        </Select>
      </FormControl>
  );
}

export default Language;
