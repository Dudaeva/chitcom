import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authorization/SingUp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div>Главная</div>
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
