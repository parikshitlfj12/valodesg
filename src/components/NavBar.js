import React, { useEffect } from "react";
import "../assets/styles/navBar.scss";
import { NavLink, useRouteMatch } from "react-router-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const NavBar = ({ navItems }) => {
  const selectorNode = $(".hori-selector");

  function animation() {
    if (navItems && selectorNode && selectorNode.css) {
      var tabsNewAnim = $("#navbarSupportedContent");
      var activeItemNewAnim = tabsNewAnim.find(".active");
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
      });
    }
  }

  useEffect(() => {
    animation();
  }, []);

  const { url } = useRouteMatch();

  let items;
  if (navItems) {
    items = navItems.map((item) => {
      return (
        <li className={"nav-item " + (navItems[0] === item ? "active" : "")}>
          <NavLink to={url + "/" + item}>
            <i className="fas fa-tachometer-alt"></i>
            {item}
          </NavLink>
        </li>
      );
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div id="navbarSupportedContent">
        <ul>
          {/* The white Animation Part */}
          <div className="hori-selector"></div>

          {items}

          {/* <li className="nav-item active">
                <NavLink to="/" exact>
                  <i 
                  className="fas fa-tachometer-alt">
                  </i>SAMPLE
                </NavLink>
              </li> */}

          {/*<li className="nav-item">
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
              </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
