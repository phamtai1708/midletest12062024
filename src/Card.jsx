import "./Card.css";
import { useState } from "react";
const Card = (props) => {
  return (
    <>
      <div className="video" onClick={props.handleClick}>
        <div className="cardCarousel"></div>
        <img src={props.image} alt={props.name} />
        <p className="episode">{props.episode}</p>
        <p className="videoName">{props.name}</p>
      </div>
    </>
  );
};
export default Card;
