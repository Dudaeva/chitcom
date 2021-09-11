const initialState = {
    loading: false,
    asks: [],
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Вывод одного вопроса
        case "questions/getOneQuestion/pending" :
            return {...state, loading: true, error: null}
        case "questions/getOneQuestion/rejected" :
            return {...state, loading: false, error: action.error};
        case "questions/getOneQuestion/fulfilled" :
            return {...state, loading: false, currentAsk: action.payload.data};
            
        case "questions/getQuestions/pending" :
            return {...state, loading: true}
        case "questions/getQuestions/rejected" :
            return {...state, loading: false, error: action.error}
        case "questions/getQuestions/fulfilled" :
            return {...state, loading: false, asks: action.payload}
        default:
            return state;
    }
}

export const getQuestions = () => async (dispatch) => {
    dispatch({type: "questions/getQuestions/pending"});

    const res = await fetch("/questions");
    const data = await res.json();

    if (data.error) {
        dispatch({type: "questions/getQuestions/rejected", error: data.error});
    } else {
        dispatch({type: "questions/getQuestions/fulfilled", payload: data});
    }
}

export const askNewQuestion = (title, text, author) => async (dispatch) => {
    dispatch({type: "questions/askQuestion/pending"});

    const res = await fetch("/questions", {
        method: "POST",
        body: JSON.stringify({author, title, text}),
        headers: {"Content-Type" : "application/json"}
    })

    const json = await res.json();

    if (json.error) {
        dispatch({type: "questions/askQuestion/rejected", error: json.error})
    } else {
        dispatch({type: "questions/askQuestion/fulfilled", success: json.success});
    }
}

export const getOneQuestion = (questionId) => async (dispatch) => {
    dispatch({type: "questions/getOneQuestion/pending"});

    const res = await fetch("/question/" + questionId);
    const json = await res.json();

    if (json.error) {
        dispatch({type: "questions/getOneQuestion/rejected", error: json.error});
    } else {
        dispatch({type: "questions/getOneQuestion/fulfilled", payload: {success: json.success, data: json.question}});
    }
}


export default reducer;