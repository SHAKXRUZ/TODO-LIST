import { Route } from "react-router-dom";
import Active from "./active/Active";
import All from "./all/All";
import Completed from "./completed/Completed";
const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <All />
      </Route>
      <Route path="/active">
        <Active />
      </Route>
      <Route path="/completed">
        <Completed />
      </Route>
    </>
  );
};

export default Routes;
