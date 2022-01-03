import {Box, CardMedia, IconButton, Typography} from "@material-ui/core";
import {BlurCircular, ThumbDown, ThumbUp} from "@mui/icons-material";
import {BlurOn} from "@material-ui/icons";
import {useSnackbar} from "notistack";
import {useStyles} from "../SingleQuestionPage";
import {chooseBest, dislikeAnswer, likeAnswer} from "../../../redux/feautures/answers";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Answer = ({item, index, correctTime}) => {
    const { currentAsk } = useSelector(store => store.questions);
    const { liking, disliking } = useSelector(store => store.answers);
    const { myData } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [state, setState] = useState(0);
    //const [countState, setCountState] = useState(item.dislikes.length - item.likes.length);

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const handleClickVariant = () => {
        enqueueSnackbar("Действие выполнено успешно", { variant: "success"});
        dispatch({type: "answers/clearData"});
    };

    const handleChooseBest = (answerId, resolve = "resolve") => {
        dispatch(chooseBest(currentAsk._id, answerId, resolve));
        handleClickVariant()
    }

    const handleLike = () => {
        dispatch(likeAnswer(item._id));
        setState(state + 1);
        handleClickVariant()

    }

    const handleDislike = () => {
        dispatch(dislikeAnswer(item._id));
        setState(state + 1);
        handleClickVariant()
    }

    return (
        <span key={item._id} >
            <Box display="flex" >
                <Box textAlign="center" width={90}>
                    <Box p={1}>
                        {item.resolved ?
                            (
                                <IconButton disabled={currentAsk?.author._id !== myData?._id}
                                            size={"medium"}
                                            onClick={() => handleChooseBest(item._id, 'unresolve')}
                                >
                                    <BlurCircular htmlColor={"#6fe02e"} fontSize={"large"} />
                                </IconButton>
                            )
                            :
                            (
                                <IconButton
                                    disabled={currentAsk.answers.find(item => item.resolved) ? true : currentAsk?.author._id !== myData?._id}
                                    size={"medium"}
                                    onClick={() => handleChooseBest(item._id)}
                                >
                                    <BlurOn htmlColor={"#bdb1b1"} fontSize={"large"} />
                                </IconButton>
                            )
                        }
                    </Box>

                    <IconButton
                        onClick={() => handleLike(item._id)}
                        disabled={!myData ? true : liking ? true : item.author._id === myData?._id}
                        aria-label="like"
                        size={"medium"}
                    >
                        <ThumbUp htmlColor={(currentAsk.answers[index].likes
                            .find(like => like === myData?._id) )? "#288ab4" : "#d2cfcf"} fontSize={"medium"} />
                    </IconButton>

                    <h4>{item.likes.length - item.dislikes.length}</h4>

                    <IconButton
                        onClick={handleDislike}
                        disabled={!myData ? true : disliking ? true : item.author._id === myData?._id}
                        aria-label="unlike"
                        size={"medium"}
                    >
                        <ThumbDown htmlColor={currentAsk.answers[index].dislikes
                            .find(dislike => dislike === myData?._id) ? "#cc4343" : "#d2cfcf"} fontSize={"medium"} />
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
            <hr />
        </span>
    );
};

export default Answer;