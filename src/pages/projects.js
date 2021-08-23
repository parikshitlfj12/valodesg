import NavBar from "../components/NavBar"
import ThemeChanger from "../components/ThemeChanger"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

// Importing Components
import OneProject from "../components/OneProject";
import HappyFarm from "../components/projects/HappyFarm";
import imageHappyFarm from "../assets/img/usr.png";
import Portfolio from "../components/projects/Portfolio";
import imagePortfolio from "../assets/img/Screenshot (471).png";
import WilsWork from "../components/projects/WilsWork"
import imageWils from "../assets/img/Screenshot (472).png"

export default function Projects () {
  const items = ["Happy Farm", "Portfolio", "WilsWork", "Trading app", "Apis"];

  return(
    <>
      <NavBar navItems={items}/>
      <ThemeChanger />
      {/* <OneProject Content={HappyFarm} image={imageHappyFarm}/>
      <OneProject Content={Portfolio} image={imagePortfolio}/> */}
      <OneProject Content={WilsWork} image={imageWils}/>

    </>
  )
}

