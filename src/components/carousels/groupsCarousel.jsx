import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../card/card";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

const responsive = {
  extraLargeDesktop2: {
    breakpoint: { max: 4000, min: 2000 },
    items: 6,
    partialVisibilityGutter: 0,
  },
  extraLargeDesktop1: {
    breakpoint: { max: 2000, min: 1480 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  largeDesktop: {
    breakpoint: { max: 1480, min: 1200 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1100 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  tablet2: {
    breakpoint: { max: 1100, min: 925 },
    items: 2,
    partialVisibilityGutter: 90,
  },
  tablet1: {
    breakpoint: { max: 925, min: 665 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile3: {
    breakpoint: { max: 665, min: 620 },
    items: 1,
    partialVisibilityGutter: 180,
  },
  mobile2: {
    breakpoint: { max: 620, min: 600 },
    items: 1,
    partialVisibilityGutter: 160,
  },
  mobile1: {
    breakpoint: { max: 600, min: 0 },
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
          <i className="fa fa-angle-left fa-lg" aria-hidden="true"></i>
        </button>
        <button className="carousel__button" onClick={() => next()}>
          <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
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
