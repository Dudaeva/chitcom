const initialState = {
    settingTheBestAnswer: false,
    adding: false,
    liking: false,
    disliking: false,
    error: null,
    success: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "answers/clearData":
            return {...state, error: null, success: null}

        //Добавить ответ
        case "answers/addAnswer/pending" :
            return {...state, adding: true, error: null, success: null}
        case "answers/addAnswer/rejected" :
            return {...state, adding: false, error: action.error}
        case "answers/addAnswer/fulfilled" :
            return {...state, adding: false, success: action.success}

        //Лайкнуть
        case "answers/dislikeAnswer/pending" :
            return {...state, disliking: true, error: null, success: null}
        case "answers/dislikeAnswer/rejected" :
            return {...state, disliking: false, error: action.error}
        case "answers/dislikeAnswer/fulfilled" :
            return {...state, disliking: false, success: action.success}

        //дизлайкнуть
        case "answers/likeAnswer/pending" :
            return {...state, liking: true, error: null, success: null}
        case "answers/likeAnswer/rejected" :
            return {...state, liking: false, error: action.error}
        case "answers/likeAnswer/fulfilled" :
            return {...state, liking: false, success: action.success}

        //Выбрать лучший ответ
        case "answers/chooseBest/pending" :
            return {...state, choosing: true, error: null, success: null}
        case "answers/chooseBest/rejected" :
            return {...state, choosing: false, choosingError: action.error}
        case "answers/chooseBest/fulfilled" :
            return {...state, choosing: false, choosingSuccess: action.success}

        default:
            return state;
    }
}

export const addAnswer = (text) => async (dispatch, getStore) => {
    const store = getStore();

    dispatch({type: "answers/addAnswer/pending"});

    const res = await fetch("/answers", {
        method: "POST",
        body: JSON.stringify({text, toQuestion: store.questions.currentAsk._id}),
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : store.auth.token,
        }
    });
    const json = await res.json();

    if (json.error) {
        dispatch({type: "answers/addAnswer/rejected", error: json.error});
    } else {
        dispatch({type: "answers/addAnswer/fulfilled", success: json.success});
        dispatch({type: "questions/addQuestion", payload: {...json.answer, author: store.auth.myData}});
    }
}

export const chooseBest = (questionId, answerId, resolve) => async (dispatch, getStore) => {
    const store = getStore();

    dispatch({type: "answers/chooseBest/pending"});

    const res = await fetch(`/question/${questionId}/${answerId}/${resolve}`, {
        method: "POST",
        headers: {
            "Authorization" : store.auth.token,
            "Content-Type" : "application/json",
        }
    });
    const json = await res.json();

    if (json.error) {
        dispatch({type: "answers/chooseBest/rejected", error: json.error});
    } else {
        dispatch({type: "answers/chooseBest/fulfilled", success: json.success});
    }
}

export const likeAnswer = (answerId) => async (dispatch, getStore) => {
    const store = getStore();

    dispatch({type: "answers/likeAnswer/pending"});

    const res = await fetch("/answer/like", {
        method: "POST",
        body: JSON.stringify({answerId}),
        headers: {
            "Authorization" : store.auth.token,
            "Content-Type" : "application/json",
        }
    });
    const json = await res.json();

    if (json.error) {
        dispatch({type: "answers/likeAnswer/rejected", error: json.error});
    } else {
        dispatch({type: "answers/likeAnswer/fulfilled", success: json.success});
    }
}

export const dislikeAnswer = (answerId) => async (dispatch, getStore) => {
    const store = getStore();

    dispatch({type: "answers/dislikeAnswer/pending"});

    const res = await fetch("/answer/dislike", {
        method: "POST",
        body: JSON.stringify({ answerId }),
        headers: {
            "Authorization" : store.auth.token,
            "Content-Type" : "application/json",
        }
    });
    const json = await res.json();

    if (json.error) {
        dispatch({type: "answers/dislikeAnswer/rejected", error: json.error});
    } else {
        dispatch({type: "answers/dislikeAnswer/fulfilled", success: json.success});
    }
}

export default reducer;