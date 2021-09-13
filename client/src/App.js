import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authorization/SignUp";
import SignIn from "./components/Authorization/SignIn";
import {Posts, OnePost} from "./components/Posts/"
import {useSelector} from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import QuestionsPage from "./components/Questions/QuestionsPage";
import SingleQuestionPage from "./components/Questions/SingleQuestionPage";
import MyProfilePage from "./components/MyProfilePage";

const App = () => {

    const { token } = useSelector(store => store.users);

    return (
      <>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/asks">
                  <QuestionsPage />
              </Route>
              <Route exact path="/asks/:questionId">
                  <SingleQuestionPage />
              </Route>
              <Route exact path="/posts">
                  <Posts />
              </Route>
              <Route exact path="/posts/:id">
                  <OnePost />
              </Route>
              <Route path="/my-profile">
                  <MyProfilePage />
              </Route>
              <Route exact path="/sign-up">
                  <SignUp />
              </Route>
              <Route exact path="/sign-in">
                  <SignIn />
              </Route>
              <Redirect to="/" />
          </Switch>
      </>
    );
}

export default App;