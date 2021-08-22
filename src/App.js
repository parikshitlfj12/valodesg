import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Project from "./pages/projects";
import Contact from "./pages/contact";
import Career from "./pages/career";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <br />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/experience" component={Experience} />
        <Route path="/career" component={Career} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
  );
}

export default App;
