import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {Comment as CommentIcon} from "@material-ui/icons";
import {useSelector} from "react-redux";
import { useStyles } from "../SingleQuestionPage";
import AddAnswer from "./AddAnswer";
import Answer from "./Answer";


const Answers = ({correctTime}) => {
    const { currentAsk } = useSelector(store => store.questions);
    const { text } = useSelector(store => store.languages);

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={9}>
            <Box minHeight={500}>
                <Typography variant="h5" className={classes.title_question}>
                    {currentAsk?.title}
                </Typography>
                <Typography className={classes.text_question}>
                    {currentAsk?.text}
                </Typography>
            </Box>
            <Paper style={{ backgroundColor: "#ffd711" }}>
                <Box textAlign="center" p={3} mt={2}>
                    <h5>
                        {text.asksQuestionAmount} (
                        <CommentIcon />
                        {currentAsk?.answers.length})
                    </h5>
                </Box>

                <Paper>
                    {currentAsk?.answers.map((item, index) =>
                        <Answer key={item._id} item={item} index={index} correctTime={correctTime}/>
                    )}
                </Paper>
            </Paper>

            <AddAnswer />
        </Grid>
    );
};

export default Answers;