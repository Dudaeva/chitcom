import React from 'react';
import {Box, CardMedia, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import {
    BlurCircular,
    BlurOn,
    Comment as CommentIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon
} from "@material-ui/icons";
import {useSelector} from "react-redux";
import { useStyles } from "./SingleQuestionPage";

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
                    {currentAsk?.answers.map(item =>
                        <Box display="flex" key={item._id}>
                            <Box textAlign="center" width={100} mb={2}>
                                <Box p={1}>
                                    {/*<IconButton disabled aria-label="delete" size={"medium"} >*/}
                                    {/*    <BlurCircular htmlColor={"#6fe02e"} fontSize={"large"} />*/}
                                    {/*</IconButton>*/}
                                    <IconButton aria-label="delete" size={"medium"} >
                                        <BlurOn htmlColor={"#bdb1b1"} fontSize={"large"} />
                                    </IconButton>
                                    {/*<IconButton disabled aria-label="delete" size={"medium"} >*/}
                                    {/*    <BlurOn htmlColor={"#bdb1b1"} fontSize={"large"} />*/}
                                    {/*</IconButton>*/}

                                </Box>
                                <button>
                                    <KeyboardArrowUpIcon />
                                </button>
                                <h4>0</h4>
                                <button>
                                    <KeyboardArrowDownIcon />
                                </button>
                            </Box>
                            <Box width="100%">
                                <Box
                                    p={2}
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Box display="flex">
                                        <CardMedia
                                            image={item.author.avatar_URI}
                                            className={classes.avatar_anw}
                                        />
                                        <Typography>{item.author.name || item.author.login}</Typography>
                                    </Box>
                                    <Box>
                                        {correctTime(item.createdAt)}
                                    </Box>
                                </Box>
                                <Box p={1.25} mb={2.5}>
                                    <Typography>
                                        {item.text}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Paper>
            </Paper>

            <Box>
                <Box>
                    <h3>{text.comment}</h3>
                    <textarea rows="10" cols="100" name="text" />
                </Box>
                <button className="btn btn-primary" type="button">
                    {text.commentButton}
                </button>
            </Box>
        </Grid>
    );
};

export default Answers;