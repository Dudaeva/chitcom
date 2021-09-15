import {Box} from "@material-ui/core";
import {useRef} from "react";
import {useSelector} from "react-redux";

const AddAnswer = () => {
    const inputText = useRef("");
    const { text } = useSelector(store => store.languages);

    return (
        <div>
            <Box>
                <Box>
                    <h3>{text.comment}</h3>
                    <textarea rows="10" cols="100" name="text" ref={inputText} />
                </Box>
                <button className="btn btn-primary" type="button">
                    {text.commentButton}
                </button>
            </Box>
        </div>
    );
};

export default AddAnswer;