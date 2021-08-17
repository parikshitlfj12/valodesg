import { React } from "react";
import NavBar from "../components/NavBar";
import "../assets/styles/navBar.scss";
import {BrowserRouter as Router, Route} from "react-router-dom";

function SecondNavBar() {
  return(
    <Router>
      <Route path="/">
        <NavBar />
      </Route>
    </Router>
  )
}
export default SecondNavBar;