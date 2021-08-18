import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../assets/styles/thirdSec.scss";
import { RiAddBoxFill } from "react-icons/ri"

function ThirdSec () {
  return(
    <>
      <div className="third-section">
        <Container>
          <Row>
            <Col xs={4}>
              <div className="practice">
                PRACTICE
              </div>
            </Col>
            <Col xs={4}>
              <div className="inqueue-desg">
                <span>IN QUEUE</span>
                <RiAddBoxFill className="cancel-desg" />
              </div>
            </Col>
            <Col xs={4}>
              <div className="practice">
                LEAVE PARTY
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ThirdSec;