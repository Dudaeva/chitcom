import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authorization/SignUp";
import PostPage from "./components/posts/PostPage";
import SinglePostPage from "./components/posts/SinglePostPage";
import SignIn from "./components/Authorization/SignIn";

function App() {
  return (
      <>
          <Switch>
              <Route exact path="/posts">
                  <PostPage />
              </Route>
              <Route exact path="/posts/:id">
                  <SinglePostPage />
              </Route>
              <Route path="/sign-up">
                  <SignUp />
              </Route>
              <Route path="/sign-in">
                  <SignIn />
              </Route>
              <Redirect to="/" />
          </Switch>
      </>
  );
}

export default App;
