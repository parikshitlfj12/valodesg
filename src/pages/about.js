import { Container, Row, Col } from "react-bootstrap";
import ThemeChanger from "../components/ThemeChanger";
import myImage from "../assets/img/ppngg.png";
import "../assets/styles/about.scss";

export default function About() {
  const me =
    "I have just over a year of experience as a junior software engineer with First Technology. In my short time there, I've already contributed to over a dozen projects and assisted with managing one project for one of the firm's long-time clients. Prior to this role, I completed a two-year internship with Mobile First, where I honed my mobile app development skills. Ideally, I would like to continue to specialize in mobile software engineering, an area where I know your firm excels.";
  return (
    <>
      <ThemeChanger /> <br />
      <Container>
        <Row>
          <Col>
            <div className="style-image">
              <img src={myImage} alt="Parikshit Singh" height="80%" />
            </div>
          </Col>
          <Col className="my-style">
            <div>
              <span>{me}</span> <br />
              <br />
              <div style={{backgroundColor: "white", color: "black"}}>
                Interests - <br /> Stock Market <br /> CryptoCurrency <br /> Football <br /> Gym Freak <br />
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
