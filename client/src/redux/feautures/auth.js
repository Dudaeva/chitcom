const tokenFromCookie = document.cookie // eslint-disable-next-line
    .replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")

const initialState = {
    isSigningUp : Boolean(false),
    isSigningIn : Boolean(false),
    isSignedIn : Boolean(!!tokenFromCookie),
    error: null,
    token: tokenFromCookie || null,
    success: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Уборщик
        case "auth/data/clear" :
            return {...initialState}
        //Уборщик, если вход был выполнен
        case "auth/data/loginClear" :
            return {...initialState, isSignedIn: true}

        //Выход из аккаунта
        case "auth/signOut" : {
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1`
            return {...state, token: null, isSignedIn: false}
        }

        //Авторизация
        case "auth/logIn/pending" :
            return {...state, error: null, success: null, isSigningIn: true}
        case "auth/logIn/rejected" :
            return {...state, error: action.error}
        case "auth/logIn/fulfilled" : {
            return {...state, success: action.success}
        }

        //Регистрация
        case "auth/signUp/pending" :
            return {...state, error: null, success: null, isSigningUp: true}
        case "auth/signUp/rejected" :
            return {...state, error: action.error}
        case "auth/signUp/fulfilled" :
            return {...state, success: action.success}

        default:
            return state
    }
}

const aURI = "https://cdn.icon-icons.com/icons2/643/PNG/512/ninja-cat-figure-avatar-face_icon-icons.com_59284.png";

const fetchOptions = (method = "GET", data) => ({
    method,
    body: JSON.stringify(data),
    headers: { "Content-Type" : "application/json" }
})

export const signUp = (data) => async (dispatch) => {
    const { name, login, password, avatar_URI = aURI, telegram_URI = "bimurzaew" } = data;

    dispatch({type: "auth/signUp/pending"});

    const res = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({name, login, password, avatar_URI, telegram_URI }),
        headers: { "Content-Type" : "application/json" }
    });
    const json = await res.json();

    if (json.error) {
        dispatch({type: "auth/signUp/rejected", error: json.error});
    } else {
        const successMessage = " Вы будете автоматически переправлены на страницу авторизации";
        dispatch({type: "auth/signUp/fulfilled", success: json.success + successMessage});
    }
}


export const logIn = (login, password) => async (dispatch) => {
    dispatch({type: "auth/logIn/pending"});

    const res = await fetch("/signin", fetchOptions("POST", {login, password}));
    const json = await res.json();

    if (json.error) {
        return dispatch({type: "auth/logIn/rejected", error: json.error});
    } else {
        const {success, token, expires} = json;
        const successMessage = success + " Вы будете автоматически перенаправлены на главную страницу";

        dispatch({type: "auth/logIn/fulfilled", success: successMessage });
        document.cookie = encodeURIComponent("token") + `=Bearer ${token};expires=${expires}; path=/;`;
    }
}

export default reducer;