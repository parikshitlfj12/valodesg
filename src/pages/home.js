import MainCards from "../components/mainCards";
import ButtonSec from "../components/ButtonSec";
import InputSec from "../components/inputSec";
import NavBar from "../components/NavBar";
import ThemeChanger from "../components/ThemeChanger";
export default function Home () {
  return(
    <>
      {/* Theme Changer Instead */}
      <NavBar />
      <ThemeChanger />
      <MainCards />
      <br/>
      <small className="competitive">
        HINTS: Hover-over any cards or click any card to go to the particular Section.<br/>
        <i>"What you do makes a difference, and you have to decide what kind of difference you want to make." - Jane Goodall</i>
      </small>
      <ButtonSec />
      <InputSec />
    </>
  )
}

