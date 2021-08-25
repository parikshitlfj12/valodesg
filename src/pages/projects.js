import NavBar from "../components/NavBar";
import ThemeChanger from "../components/ThemeChanger";
import { Tabs, Tab } from "react-bootstrap";

// Importing Components
import OneProject from "../components/OneProject";
import HappyFarm from "../components/projects/HappyFarm";
import imageHappyFarm from "../assets/img/usr.png";
import Portfolio from "../components/projects/Portfolio";
import imagePortfolio from "../assets/img/Screenshot (471).png";
import WilsWork from "../components/projects/WilsWork";
import imageWils from "../assets/img/Screenshot (472).png";
import TradingApp from "../components/projects/TradingApp";
import imageTradingApp from "../assets/img/Screenshot (479).png";
import { Switch, BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default function Projects() {
  const items = ["Happy Farm", "Portfolio", "WilsWork", "Trading app"];

  return (
    <>
      <NavBar navItems={items} />
      <NavLink to="/projects/Portfolio" className="text-white">Profile</NavLink>
      {/* <ThemeChanger /> */}

      {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          alksndalks
        </Tab>
        <Tab eventKey="profile" title="Profile">
          2nd
        </Tab>
        <Tab eventKey="contact" title="Contact" >
          3rd
        </Tab>
      </Tabs> */}
      <Switch>
        <Route path="projects/Portfolio" component={ThemeChanger} exact/>
      </Switch>


      {/* <OneProject Content={HappyFarm} image={imageHappyFarm}/>
      <OneProject Content={Portfolio} image={imagePortfolio}/>
      <OneProject Content={WilsWork} image={imageWils}/>
      <OneProject Content={TradingApp} image={imageTradingApp}/> */}
    </>
  );
}
