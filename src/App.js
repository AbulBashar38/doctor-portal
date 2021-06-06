import FullHomePage from "./Components/HomePage/FullHomePage/FullHomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <FullHomePage></FullHomePage>
        </Route>
        <Route exact path='/'>
          <FullHomePage></FullHomePage>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
