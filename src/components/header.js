import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/header.scss";
import { HiOutlineClock } from "react-icons/hi";
import { GiOpenGate, GiAirZigzag } from "react-icons/gi";
import { FiGithub, FiSlack } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai"

function Header() {
  return (
    <>
      <div className="header-template">
        <Container fluid className="cont">
          <Row className="justify-content-xs-between">
            <Col className="icon-adjust">
              <GiAirZigzag style={{fontSize: "25px"}} />
            </Col>

            <Col xs={8}>
              <Row>
                <Col>
                  <div>
                    <HiOutlineClock style={{ marginTop: "-2px" }} />{" "}
                    <small>2/2</small>
                  </div>
                </Col>
                <Col>
                  <div>HOME</div>
                </Col>
                <Col>
                  <div>BATTLEPASS</div>
                </Col>
                <Col>
                  <div>AGENTS</div>
                </Col>
                <Col>
                  <div className="svg-style">
                    <svg height="70">
                      <path fill="#80C5B3" d="M 0 0 L50 70 L250 70 L300 0 L300 0 Z" />
                    </svg>
                  </div>
                </Col>
                <Col>
                  <div>CAREER</div>
                </Col>
                <Col>
                  <div>COLLECTION</div>
                </Col>
                <Col>
                  <div>STORE</div>
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

            <Col>
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
    </>
  );
}

export default Header;
