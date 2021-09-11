const cookieToken = document.cookie // eslint-disable-next-line
    .replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    .split(" ");

const initialState = {
    token: cookieToken.length ? cookieToken[1] : null,
    error: null,
    success: null,
    signingUp: false,
    signingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        //Авторизация
        case "users/signout" : //Выход из аккаунта
            return {...state, token: null}

        case "users/signin/pending" : //Ожидание
            return {...state, signingIn: true, error: null, success: null}

        case "users/signin/rejected" : //Отказ
            return {...state, signingIn: false, error: action.error}

        case "users/signin/fulfilled" : //Успех
            return {...state, signingIn: false, success: action.payload.success, token: action.payload.token }

        //Регистрация
        case "users/createUser/pending" :
            return {...state, signingUp: true, error: null, success: null}

        case "users/createUser/rejected" :
            return {...state, signingUp: false, error: action.error}

        case "users/createUser/fulfilled" :
            return {...state, success: action.success}

        case "users/data/clear" :
            return {...state, signingUp: false, signingIn: false, success: null, error: null}

        default:
            return state;
    }
}

const aURI = "https://krot.mobi/uploads/posts/2020-10/1603480760_1-p-fon-dlya-avatarki-3.jpg";

export const createUser = (data) => async (dispatch) => {
    const { name, login, password, avatar_URI = aURI, telegram_URI = "eva_sbn" } = data;

    dispatch({type: "users/createUser/pending"});

    const res = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({name, login, password, avatar_URI, telegram_URI }),
        headers: { "Content-Type" : "application/json" }
    });
    const json = await res.json();

    if (json.error)
        dispatch({type: "users/createUser/rejected", error: json.error});
    else
        dispatch({type: "users/createUser/fulfilled", success: `${json.success}
        Вы будете автоматически переправлены на страницу авторизации`});
}

export const clearData = () => (dispatch) =>
    dispatch({type: "users/data/clear"});


export const signInAccount = (login, password) => async dispatch => {
    dispatch({type: "users/signin/pending"});

    const res = await fetch("/signin", {
        method: "POST",
        body: JSON.stringify({login, password}),
        headers: {"Content-Type" : "application/json"}
    })
    const json = await res.json();

    if (json.error)
        dispatch({type: "users/signin/rejected", error: json.error});
    else
        dispatch({type: "users/signin/fulfilled", payload: {success: json.success, token: json.token}});
}

export const signOut = () => (dispatch) => {
    dispatch({type: "users/signOut/fulfilled"});
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export default reducer;
