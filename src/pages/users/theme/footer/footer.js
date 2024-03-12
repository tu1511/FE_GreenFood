import { memo } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__about">
              <h1 className="footer__about__logo">Green Food</h1>
              <ul>
                <li>Địa chỉ: 98 Trần Hưng Đạo</li>
                <li>Phone: 0337-731-011</li>
                <li>Email: minhtu15112K3@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="btn-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer__Widget__social">
                  <div>
                    {" "}
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    {" "}
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    {" "}
                    <AiOutlineLinkedin />
                  </div>
                  <div>
                    {" "}
                    <AiOutlineGithub />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
