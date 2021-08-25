import NavBar from "../components/NavBar";
import ThemeChanger from "../components/ThemeChanger";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

// Importing Components
import OneProject from "../components/OneProject";
import HappyFarm from "../components/projects/HappyFarm";
import imageHappyFarm from "../assets/img/usr.png";
import Portfolio from "../components/projects/Portfolio";
import imagePortfolio from "../assets/img/Screenshot (471).png";
import WilsWork from "../components/projects/WilsWork";
import imageWils from "../assets/img/Screenshot (472).png";

export default function Projects() {
  const items = ["HappyFarm", "Portfolio", "WilsWork", "TradingApp", "Apis"];

  const { path } = useRouteMatch();

  return (
    <>
      <NavBar navItems={items} />
      <ThemeChanger />

      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/HappyFarm`} />
        </Route>
        <Route path={`${path}/HappyFarm`}>
          <OneProject Content={HappyFarm} image={imageHappyFarm} />
        </Route>
        <Route path={`${path}/Portfolio`}>
          <OneProject Content={Portfolio} image={imagePortfolio} />
        </Route>
        <Route path={`${path}/WilsWork`}>
          <OneProject Content={WilsWork} image={imageWils} />
        </Route>
      </Switch>
    </>
  );
}
