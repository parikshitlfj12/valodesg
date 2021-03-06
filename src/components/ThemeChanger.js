import { React, useState } from "react";
import {BiToggleRight, BiToggleLeft} from "react-icons/bi";
import "../assets/styles/themeChanger.scss"

function ThemeChanger() {
  const [X, setX] = useState(true)
  const [toggleIcon, setToggleIcon] = useState(<BiToggleLeft className="leftToggle"/>);
  function changeToggle () {
    console.log("Blick on x");
    setX(!X);
    setToggleIcon(X ? <BiToggleRight className="rightToggle"/> : <BiToggleLeft className="leftToggle" />);
  }
  return(
    <div className="theme-changer">
      <div className="inner-div">
        <span className="change-text">CHANGE THEME</span>
        <div className="icons-style" onClick={changeToggle}>
          {toggleIcon}
        </div>
        
      </div>
    </div>
  )
}

export default ThemeChanger;