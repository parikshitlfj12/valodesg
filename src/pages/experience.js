import { Card, Button, Container, Row, Col } from "react-bootstrap"
import "../assets/styles/experience.scss"

export default function Experience () {

  const items = [1,2,3,4,5,6];
  const renderItem = items.map(item => {
    return(
      <Col xs={3} style={{ marginTop: '25px' }} className="item">
        <Card>
          <Card.Img variant="top" src="https://cx.valorbuff.com/blob/B8CfBcCUanqN5tKbK+cOKnsOlN-rBtc7KtcS5t-OlIssltp7i+iNhVKrhX-GkEWqiZ?w=1200" />
          <Card.Body>
            <Card.Title>DrillMaps Corporation</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return(
    <div className="experience-div">
      <Container>
        <Row>
          {renderItem}
        </Row>
      </Container>
    </div>
  )
}

