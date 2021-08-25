import React, {useEffect} from "react";
import "../assets/styles/navBar.scss";
import {Link} from "react-router-dom";
import $ from 'jquery';
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";

const NavBar = ({navItems}) => {
  function animation(){
    if(navItems){
      var tabsNewAnim = $('#navbarSupportedContent');
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
      $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
    }
  }

  useEffect(() => {
    animation();
  }, []);
  
  const history = useHistory();
  const pathname = history.location.pathname;
  
  let items;
  if(navItems){
    items = navItems.map(item => {
      return(
        <>
          <li className={"nav-item " + (navItems[0] === item ? 'active' : '')}>
            <Link to={pathname + "/" + item} exact>
              <i 
              className="fas fa-tachometer-alt">
              </i>{item}
            </Link>
          </li>
        </>
      )
    })
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Router>
          <div id="navbarSupportedContent">
            <ul>
              {/* The white Animation Part */}
              <div className="hori-selector"></div>
              {items}
            </ul>
          </div>
      </Router>
    </nav>
  )
}

export default NavBar;