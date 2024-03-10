import { memo } from "react";
import "./header.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

const Header = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top_left">
            <ul>
              <li>
                {" "}
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
  );
};

export default memo(Header);