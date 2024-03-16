import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import banner1 from "assets/users/images/banner/banner3.png";
import banner2 from "assets/users/images/banner/banner4.png";
import banner3 from "assets/users/images/banner/banner5.png";

import "./profilePage.scss";
const profilePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: banner1,
    },
    {
      bgImg: banner2,
    },
    {
      bgImg: banner3,
    },
  ];

  return (
    <>
      {/*Categories Begin*/}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            ></div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}
    </>
  );
};

export default memo(profilePage);
