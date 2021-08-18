import React from 'react'
import "../assets/styles/cardStyle.scss"
import imag1 from "../assets/img/12.png"
import imag2 from "../assets/img/14.png"
import imag3 from "../assets/img/2.png"
import imag4 from "../assets/img/3.png"
import imag5 from "../assets/img/4.png"

function MainCards() {
  var items = [imag1, imag2, imag3, imag4, imag5];
  var list = items.map(item => {
    return(
      <div className="card-style">
        <img src={item} alt="Reyna" className="image-style"/>
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