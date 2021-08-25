import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Project from "./pages/projects";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <br />
          <br />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
