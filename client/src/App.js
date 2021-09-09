import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authorization/SingUp";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
      <>
          <Switch>
              <Route exact path="/">
                 <HomePage />
              </Route>
              <Route path="/sign-up">
                  <SignUp />
              </Route>
              <Redirect to="/" />
          </Switch>
      </>
  );
}

export default App;
