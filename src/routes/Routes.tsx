import { Route, Switch } from "react-router-dom";
import { Home } from "../home/Home";
import { ProblemSubmissionPage } from "../submit/ProblemSubmissionPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/submit" component={ProblemSubmissionPage} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
