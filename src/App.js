import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/home" component={Home} /> */}
        <Redirect from="/" to="/signup" />
      </Switch>
    </>
  );
}

export default App;
