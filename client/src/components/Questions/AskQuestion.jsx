import { useState } from 'react';
import { DialogTitle, TextField, Dialog, DialogActions, DialogContent,
        DialogContentText, Button } from "@material-ui/core"
import {useDispatch} from "react-redux";

const AskQuestion = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch();
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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="text"
                        label="Текст вашего вопроса"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Спросить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AskQuestion;