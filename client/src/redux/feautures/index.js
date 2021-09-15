import authReducer from "./auth";
import questionsReducer from "./questions";
import languagesReducer from "./languages"
import answersReducer from "./answers";
import postsReducer from "./posts"

export const reducers = {
    auth: authReducer,
    questions: questionsReducer,
    languages: languagesReducer,
    answers: answersReducer,
    posts:postsReducer
}