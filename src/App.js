import MainLayout from "./components/MainLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.link}>{item.component}</Route>
            ))}
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
