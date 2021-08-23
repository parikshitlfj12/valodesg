import "../assets/styles/OneProject.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function OneProject({Content, image}) {
  return (
    <section className="OneProject container">
      <Container>
        <Row>
          <Col className="projecttext" >
            <Content />
          </Col>
          <Col style={{margin: "auto"}}>
            <div>
              <img src={image} alt="AS" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
