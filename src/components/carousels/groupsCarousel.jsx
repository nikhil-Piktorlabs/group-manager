import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../card/card";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 7000, min: 1500 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  tablet4: {
    breakpoint: { max: 1500, min: 1250 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet3: {
    breakpoint: { max: 1250, min: 1050 },
    items: 4,
    partialVisibilityGutter: 0,
  },
  tablet2: {
    breakpoint: { max: 1050, min: 900 },
    items: 3,
    partialVisibilityGutter: 0,
  },
  tablet1: {
    breakpoint: { max: 900, min: 770 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 770, min: 426 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 610, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <header className="carousel__heading">
      <h4>RECOMMENDED GROUPS</h4>
      <span>
        <button className="carousel__button" onClick={() => previous()}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <button className="carousel__button" onClick={() => next()}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </span>
    </header>
  );
};

const GroupsCarousel = ({ data }) => {
  return (
    <article className="grid grid--carousel">
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        partialVisible
      >
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Carousel>
    </article>
  );
};

export default GroupsCarousel;
