import FullHomePage from "./Components/HomePage/FullHomePage/FullHomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <FullHomePage></FullHomePage>
        </Route>
        <Route path='/'>
          <FullHomePage></FullHomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
