import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import "../assets/styles/cardStyle.scss"
import image from "../assets/img/Hivemind_Card.jpg"

function MainCards() {
  var items = [1,2,3,4,5];
  var list = items.map(item => {
    return(
      <div className="card-style">
        <Card>
          <Card.Img variant="top" src={image} />
        </Card>
      </div>
    )
  })

  return (
    <>
      <div className="center">
        {list}
        
      </div>
    </>
  )
}

export default MainCards;