import React, { useRef } from "react";
import Card from "../card/card";
import { debounce } from "../../utils/debounce";
import "./carousel.css";

const GroupsCarousel = ({ data }) => {
  const carouselRef = useRef(null);

  const scrollLeft = debounce(function () {
    carouselRef.current.scrollLeft -= 160;
  }, 300);

  const scrollRight = debounce(function () {
    carouselRef.current.scrollLeft += 160;
  }, 300);

  return (
    <article className="grid grid--carousel">
      <header className="carousel__heading">
        <h4>RECOMMENDED GROUPS</h4>
        <span>
          <button className="carousel__button" onClick={() => scrollLeft()}>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <button className="carousel__button" onClick={() => scrollRight()}>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </span>
      </header>
      <div className="carousel__items" ref={carouselRef}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
};

export default GroupsCarousel;
