import FullHomePage from "./Components/HomePage/FullHomePage/FullHomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PraivetRoute/PrivateRoute";
import DashboardAppointment from "./Components/Dashboard/DashboardAppointment/DashboardAppointment";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import UnderdevelopedPage from "./Components/UnderdevelopedPage/UnderdevelopedPage";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <FullHomePage></FullHomePage>
          </Route>
          <Route exact path='/'>
            <FullHomePage></FullHomePage>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/appointment'>
            <DashboardAppointment></DashboardAppointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/mainDashboard'>
            <MainDashboard></MainDashboard>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/patients'>
            <UnderdevelopedPage></UnderdevelopedPage>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/prescriptions'>
            <UnderdevelopedPage></UnderdevelopedPage>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/setting'>
            <UnderdevelopedPage></UnderdevelopedPage>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
