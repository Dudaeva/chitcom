import HomePage from "../components/HomePage/HomePage";
import PostPage from "../components/Posts/PostPage";
import SinglePostPage from "../components/Posts/SinglePostPage";
import QuestionsPage from "../components/Questions/QuestionsPage";
import SingleQuestionPage from "../components/Questions/SingleQuestionPage";
import MyProfilePage from "../components/MyProfilePage";
import SignUpComponent from "../components/Authorization/SignUp"
import SignInComponent from "../components/Authorization/SignIn"

export const Home = () => <HomePage />

export const Posts = () => <PostPage />

export const OnePost = () => <SinglePostPage />

export const Questions = () => <QuestionsPage />

export const OneQuestion = () => <SingleQuestionPage />

export const SignUp = () => <SignUpComponent />

export const SignIn = () => <SignInComponent />

export const MyAccount = () => <MyProfilePage />