import './App.css';
import Header from "./components/header";
import ThemeChanger from './components/ThemeChanger';
import MainCards from './components/mainCards';
import ThirdSec from './components/ThirdSec';
import FourthSec from './components/FourthSec';

function App() {
  return (
    <div className="App">
      <Header/>
      <ThemeChanger />
      <MainCards />
      <br />
      <small style={{color:"white", fontSize: "12px", fontWeight:"400"}}>Competitive: Standard VALORANT gameplay. Same rules as unrated, but at a higher stakes mode where you earn and compete for rank.</small>
      <ThirdSec />
      <FourthSec />
    </div>
  );
}

export default App;
