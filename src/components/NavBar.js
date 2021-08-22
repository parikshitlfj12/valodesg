import React, {useEffect} from "react";
import "../assets/styles/navBar.scss";
import {NavLink} from "react-router-dom";
import $ from 'jquery';
import {BrowserRouter as Router, Route} from "react-router-dom";

const NavBar = () => {
  function animation(){
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

  useEffect(() => {
    animation();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Router>
        <Route path="/">
          <div id="navbarSupportedContent">
            <ul>
              {/* The white Animation Part */}
              <div className="hori-selector">
              </div>
              
              <li className="nav-item active">
                <NavLink to="/" exact>
                  <i 
                  className="fas fa-tachometer-alt">
                  </i>UNRATED
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" exact>
                  <i 
                  className="far fa-address-book">
                  </i>COMPETITIVE
                </NavLink> 
              </li>

              <li className="nav-item">
                <NavLink to="/service" exact>
                  <i 
                  className="far fa-clone">
                  </i>SPIKE RUSH
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/testimonial" exact>
                  <i 
                  className="far fa-chart-bar">
                  </i>DEADTHMATCH
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" exact>
                  <i 
                  className="far fa-copy">
                  </i>REPLICATION
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" exact>
                  <i 
                  className="fab fa-flickr">
                  </i>CUSTOM
                </NavLink>
              </li>
            </ul>
          </div>
        </Route>
      </Router>
    </nav>
  )
}

export default NavBar;