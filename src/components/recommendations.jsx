import React from "react";
import Carousel from "react-multi-carousel";
import Card from "./card";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  extraLargeDesktop: {
    breakpoint: { max: 4000, min: 1300 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  largeDesktop: {
    breakpoint: { max: 1300, min: 1200 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1100 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  tablet2: {
    breakpoint: { max: 1100, min: 820 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet1: {
    breakpoint: { max: 820, min: 665 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 665, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <header className="recommendations__heading">
      <h4>RECOMMENDED GROUPS</h4>
      <span>
        <button className="recommendations__button" onClick={() => previous()}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <button className="recommendations__button" onClick={() => next()}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </span>
    </header>
  );
};

const Recommendations = ({ data }) => {
  return (
    <article className="recommendations">
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

export default Recommendations;
