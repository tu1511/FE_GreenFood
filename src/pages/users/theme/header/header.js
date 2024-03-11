import { memo, useState } from "react";
import "./header.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCT,
    },
    {
      name: "Sản phẩm",
      path: "",
      // set them menu con
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Trái cây",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  minhtu15112K3@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(150000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineGithub />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className=" col-xl-3">
            <div className="header__logo">
              <h1>Green Food</h1>
            </div>
          </div>
          <div className=" col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          // tranh trung key giua hai cai
                          <li key={`${menuKey} - ${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className=" col-xl-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
