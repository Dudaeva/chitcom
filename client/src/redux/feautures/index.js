import authReducer from "./auth";
import questionsReducer from "./questions";
import userReducer from "./users";
import languagesReducer from "./languages"

export const reducers = {
    auth: authReducer,
    questions: questionsReducer,
    users: userReducer,
    languages: languagesReducer
}