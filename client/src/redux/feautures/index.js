import authReducer from "./auth";
import questionsReducer from "./questions";
import userReducer from "./users";

export const reducers = {
    auth: authReducer,
    questions: questionsReducer,
    users: userReducer,
}