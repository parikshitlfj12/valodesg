import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/header.scss";


// Icons Import
import { GiPerson } from "react-icons/gi";
import { GiOpenGate, GiAirZigzag } from "react-icons/gi";
import { FiGithub, FiSlack } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { RiAddBoxFill } from "react-icons/ri"

import {Link} from "react-router-dom"

function Header() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="header-template">
      <Container fluid className="cont">
        <Row>
          <Col className="icon-adjust">
            <GiAirZigzag style={{fontSize: "30px"}} />
          </Col>

          <Col xs={9} className="Mid-Section">
            <Row>
              <Col>
                <div>
                  <GiPerson style={{ marginTop: "-2px" }} />{" 21 y/o "}
                </div>
              </Col>
              <Col>
                <Link to="/" className="link-style">HOME</Link>
              </Col>
              <Col>
                <Link to="/about" className="link-style">ABOUT</Link>
              </Col>
              <Col>
                <Link to="/projects" className="link-style">PROJECTS</Link>
              </Col>
              <Col>
                <div className="svg-style">
                  <span className="svg-text">
                    <span className="timetext">
                      {dateState.toLocaleString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric',
                          hour12: true,
                      })}
                    </span>
                    <span className="cancel-header">
                      <RiAddBoxFill className="cancel-desg" />
                    </span>
                  </span>
                  <svg height="70">
                    <path fill="#80C5B3" d="M 0 0 L40 55 L250 55 L290 0 L290 0 Z" />
                  </svg>
                </div>
              </Col>
              <Col>
                <Link to="/experience"  className="link-style">EXPERIENCE</Link>
              </Col>
              <Col>
                <Link to="/career" className="link-style">CAREER</Link>
              </Col>
              <Col>
                <Link to="/contact" className="link-style">CONTACT</Link>
              </Col>
              <Col>
                <div style={{ marginTop:"-4px" }}>
                  <GiOpenGate style={{ fontSize: "25px" }} />
                </div>
              </Col>
              <Col>
                <div style={{ fontSize: "12px", marginTop:"-8px" }}>
                  <FiGithub
                    style={{
                      border: "1px solid white",
                      borderRadius: "50px",
                      marginTop: "-2px",
                      padding: "0.5px",
                    }}
                  />{" 10 "}
                  <br />
                  <FiSlack
                    style={{
                      border: "1px solid white",
                      borderRadius: "50px",
                      marginTop: "-2px",
                      padding: "0.5px",
                    }}
                  />{" 20 "}
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={1}>
            <div style={{ textAlign: "right", marginRight: "15px" }}>
              <AiFillSetting 
                style={{
                  border: "1px solid white",
                  borderRadius: "50px",
                  marginTop: "-2px",
                  padding: "2px",
                  fontSize: "25px"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
