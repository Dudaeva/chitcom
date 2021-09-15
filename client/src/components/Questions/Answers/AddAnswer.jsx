import {Box, Button, IconButton, Typography} from "@material-ui/core";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Paper, TextField} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {SendOutlined} from "@mui/icons-material";
import {addAnswer} from "../../../redux/feautures/answers";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '90ch',
        },
    },
}))

const AddAnswer = () => {
    const { languages: {text}, answers: {error, adding, success} } = useSelector(store => store);
    const [reviewInput, setReviewInput] = useState();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (e) => setReviewInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAnswer(reviewInput));
        if (!error) {
            setReviewInput("");
        }
    }

    return (
        <div>
            <Box>
                <Box>
                    <form className={classes.root}>
                        <br />
                        <br />
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={5}
                            aria-colspan={4}
                            placeholder={text.commentPlaceholder}
                            value={reviewInput}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <IconButton disabled={adding} type="submit" onClick={handleSubmit} style={{marginTop: "60px"}} color="primary">
                            <SendOutlined />
                        </IconButton>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default AddAnswer;