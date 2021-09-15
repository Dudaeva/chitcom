import {Box, CardMedia, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import {BlurOn, Comment as CommentIcon} from "@material-ui/icons";
import {useSelector} from "react-redux";
import { useStyles } from "../SingleQuestionPage";
import {ThumbDown, ThumbUp} from "@mui/icons-material";
import AddAnswer from "./AddAnswer";

const Answers = ({correctTime}) => {
    const { currentAsk } = useSelector(store => store.questions);
    const { myData } = useSelector(store => store.auth);
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
                            <Box textAlign="center" width={90} mb={2}>
                                <Box p={1}>
                                    {/*<IconButton disabled aria-label="delete" size={"medium"} >*/}
                                    {/*    <BlurCircular htmlColor={"#6fe02e"} fontSize={"large"} />*/}
                                    {/*</IconButton>*/}
                                    <IconButton
                                        disabled={currentAsk?.author._id !== myData?._id}
                                        aria-label="delete"
                                        size={"medium"}
                                        onClick={(e) => console.log("Произошёл клик")}
                                    >
                                        <BlurOn htmlColor={"#bdb1b1"} fontSize={"large"} />
                                    </IconButton>
                                    {/*<IconButton disabled aria-label="delete" size={"medium"} >*/}
                                    {/*    <BlurOn htmlColor={"#bdb1b1"} fontSize={"large"} />*/}
                                    {/*</IconButton>*/}

                                </Box>
                                <IconButton disabled={item.author._id === myData?._id} aria-label="like" size={"medium"} >
                                    <ThumbUp htmlColor={"#d2cfcf"} fontSize={"medium"} />
                                </IconButton>
                                <h4>0</h4>
                                <IconButton disabled={item.author._id === myData?._id} aria-label="unlike" size={"medium"} >
                                    <ThumbDown htmlColor={"#d2cfcf"} fontSize={"medium"} />
                                </IconButton>
                            </Box>
                            <Box width="90%">
                                <Box
                                    p={1}
                                    mt={2}
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Box display="flex" alignItems={"center"} >
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
                                <Box p={1} mb={1}>
                                    <Typography>
                                        {item.text}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Paper>
            </Paper>

            <AddAnswer />
        </Grid>
    );
};

export default Answers;