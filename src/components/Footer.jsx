import { footerlogo, applestore, playstore } from "../assets";
import { BiPaperPlane } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={footerlogo} alt="logo" width="191" height="30" />
            <p className="mt-3 mb-3 has-text-white is-size-7 has-text-weight-semibold">
              Copyright © Pizza Cabana (NG) Ltd. All rights reserved.
            </p>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3">Menu</p>
            <ul className="is-size-7">
              <li className="mb-2">
                <Link to="/OrderNow">Pizzas</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Sides">Sides</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Drinks">Drinks</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Desserts">Desserts</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Folds">Folds</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Rice">Rice</Link>
              </li>
              <li className="mb-2">
                <Link to="/OrderNow/Pastas">Pastas</Link>
              </li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3">Support</p>
            <ul className="is-size-7">
              <li className="mb-2">
                <a>Help center</a>
              </li>
              <li className="mb-2">
                <a>Terms of service</a>
              </li>
              <li className="mb-2">
                <a>Legal</a>
              </li>
              <li className="mb-2">
                <a>Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a>Status</a>
              </li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-one-third">
            <p className="has-text-weight-bold mb-3 has-text-white">
              Stay Up to Date
            </p>
            <div className="field">
              <div className="control has-icons-right">
                <input
                  className="input is-hovered is-medium"
                  type="email"
                  placeholder="your email address"
                />

                <span className="icon is-small is-right">
                  <BiPaperPlane />
                </span>
              </div>
            </div>
            <div className="columns is-mobile is-variable is-1-desktop is-1-mobile is-multiline">
              <div className="column is-narrow">
                <img src={applestore} alt="applestore" width="" height="" />
              </div>
              <div className="column is-narrow">
                <img src={playstore} alt="playstore" width="" height="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
