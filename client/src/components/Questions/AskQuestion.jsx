import { useState } from 'react';
import { DialogTitle, TextField, Dialog, DialogActions, DialogContent,
        DialogContentText, Button } from "@material-ui/core"
import {useDispatch} from "react-redux";
import {askNewQuestion} from "../../redux/feautures/questions";

const AskQuestion = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(askNewQuestion(inputTitle, inputText));
        setInputText("");
        setInputTitle("");
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                        autoFocus
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
        </div>
    );
}

export default AskQuestion;