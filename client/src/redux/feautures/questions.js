const initialState = {
    loading: false,
    asks: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
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

export default reducer;