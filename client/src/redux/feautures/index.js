import authReducer from "./auth";
import questionsReducer from "./questions";
import languagesReducer from "./languages"

export const reducers = {
    auth: authReducer,
    questions: questionsReducer,
    languages: languagesReducer
}