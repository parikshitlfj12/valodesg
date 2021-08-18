import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/header.scss";
import { HiOutlineClock } from "react-icons/hi";
import { GiOpenGate, GiAirZigzag } from "react-icons/gi";
import { FiGithub, FiSlack } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { RiAddBoxFill } from "react-icons/ri"

function Header() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <>
      <div className="header-template">
        <Container fluid className="cont">
          <Row className="justify-content-xs-between">
            <Col xs={2} className="icon-adjust">
              <GiAirZigzag style={{fontSize: "30px"}} />
            </Col>

            <Col xs={8} className="Mid-Section">
              <Row>
                <Col>
                  <div>
                    <HiOutlineClock style={{ marginTop: "-2px" }} />{" 2/2 "}
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
                    <span className="svg-text">
                      <span>
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

            <Col xs={2}>
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
