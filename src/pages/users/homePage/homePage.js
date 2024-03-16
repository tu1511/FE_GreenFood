import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import "./homePage.scss";

import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";

import feature1Img from "assets/users/images/feature/feature1Img.jpg";
import feature2Img from "assets/users/images/feature/feature2Img.jpg";
import feature3Img from "assets/users/images/feature/feature3Img.jpg";
import feature4Img from "assets/users/images/feature/feature4Img.jpg";
import feature5Img from "assets/users/images/feature/feature5Img.jpg";
import feature6Img from "assets/users/images/feature/feature6Img.jpg";
import feature7Img from "assets/users/images/feature/feature7Img.jpg";
import feature8Img from "assets/users/images/feature/feature8Img.jpg";

import banner1 from "assets/users/images/banner/banner1.png";
import banner2 from "assets/users/images/banner/banner2.jpg";

import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Cam tươi",
    },
    {
      bgImg: cat2Img,
      name: "Hoa củ khô",
    },
    {
      bgImg: cat3Img,
      name: "Hoa củ tươi",
    },
    {
      bgImg: cat4Img,
      name: "Sữa bò",
    },
    {
      bgImg: cat5Img,
      name: "Thịt bò",
    },
  ];

  // products
  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạt",
          price: 100000,
        },
        {
          img: feature2Img,
          name: "Chuối",
          price: 10000,
        },
        {
          img: feature3Img,
          name: "Ổi hồng",
          price: 20000,
        },
        {
          img: feature4Img,
          name: "Dưa hấu",
          price: 30000,
        },
        {
          img: feature5Img,
          name: "Bò mỹ",
          price: 170000,
        },
        {
          img: feature6Img,
          name: "Pizza phô mai",
          price: 89000,
        },
        {
          img: feature7Img,
          name: "Hamberger bò",
          price: 69000,
        },
        {
          img: feature8Img,
          name: "Sầu riêng",
          price: 150000,
        },
      ],
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạt",
          price: 100000,
        },
        {
          img: feature5Img,
          name: "Bò mỹ",
          price: 170000,
        },
      ],
    },
    fruits: {
      title: "Trái cây",
      products: [
        {
          img: feature2Img,
          name: "Chuối",
          price: 10000,
        },
        {
          img: feature3Img,
          name: "Ổi hồng",
          price: 20000,
        },
        {
          img: feature4Img,
          name: "Dưa hấu",
          price: 30000,
        },
        {
          img: feature8Img,
          name: "Sầu riêng",
          price: 150000,
        },
      ],
    },
    fastFood: {
      title: "Thức ăn nhanh",
      products: [
        {
          img: feature6Img,
          name: "Pizza phô mai",
          price: 89000,
        },
        {
          img: feature7Img,
          name: "Hamberger bò",
          price: 69000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <Link to={""}>{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {/* render bi loi thi doi {} thanh () */}
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row hero_categories__container">
          <div className="col-lg-12 hero__search__container">
            <div className="hero__item">
              <div className="hero__text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to={""} className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Categories Begin*/}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}

      {/* Feature Begin */}
      <div className="container container__temp">
        <div className="feature">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Feature End */}

      {/* Banner Begin */}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={banner2} alt="banner" />
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
};

export default memo(HomePage);
