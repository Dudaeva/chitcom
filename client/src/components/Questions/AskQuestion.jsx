import {forwardRef, useState} from 'react';
import {
    DialogTitle, TextField, Dialog, DialogActions, DialogContent,
    DialogContentText, Button, Slide
} from "@material-ui/core"
import {useDispatch} from "react-redux";
import {askNewQuestion} from "../../redux/feautures/questions";
import {useHistory} from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
}); //Этот компонент нужен для того, чтобы диалоговое окно открывало в виде "слайда"


const AskQuestion = () => {
    const token = "613b73ba9fbd2d296753e97d";
    const author = token;

    const [openForm, setOpenForm] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");

    const handleClickOpen = () => { //Если есть токен, то открывается диалог с формой, в ином же случае выскакивает диалог
         (token) ? setOpenForm(true) : setOpenAlert(true); //с ошибкой
    };

    const handleClose = () => { //Если открыт диалог с формой, то это окошко закрывается. В ином же случае закрывается
        openForm ? setOpenForm(false) : setOpenAlert(false); //диалог с ошибкой
    };

    const handleSubmit = () => {
        dispatch(askNewQuestion(inputTitle, inputText, author));
        setInputText("");
        setInputTitle("");
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Задать вопрос
            </Button>
            <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ваш вопрос...</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Чтобы задать вопрос, заполните пожалуйста парочку обязательных полей
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Заголовок"
                        type="text"
                        fullWidth
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="text"
                        label="Текст вашего вопроса"
                        type="text"
                        fullWidth
                        onChange={e => setInputText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Спросить
                    </Button>
                </DialogActions>
            </Dialog>

            {/*Если пользователь не авторизован, то ему открывается следующее окошко: ...*/}
            <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Упс.. что-то пошло не так"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Чтобы задать вопрос, вам нужно войти в свой аккаунт.. :(
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Закрыть
                    </Button>
                    <Button onClick={() => history.push("/sign-up")} color="primary">
                        Авторизоваться
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AskQuestion;