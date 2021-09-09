import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authorization/SignUp";
import SignIn from "./components/Authorization/SignIn";
import {Posts, OnePost} from "./components/posts/"
import {useSelector} from "react-redux";


const App = () => {

    const { token } = useSelector(store => store.users);


    return (
      <>
          <Switch>
              <Route exact path="/posts">
                  <Posts />
              </Route>
              <Route exact path="/posts/:id">
                  <OnePost />
              </Route>
              <Route path="/my-profile">
                  Мой профиль
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