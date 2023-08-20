import { Logo } from "../assets";
import { NavLink } from "react-router-dom";
import { ShoppingBag, User } from "phosphor-react";
import { useState } from "react";
import useCartStore from "../zustand/store";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const totalItems = useCartStore((state) => state.totalItems);
  //console.log(getCartTotal);
  return (
    <nav className={`navbar is-spaced is-transparent is-fixed-top`}>
      <div className={`navbar-brand`}>
        <NavLink className={`navbar-item`} to="/" onClick={toggleMenu}>
          <img src={Logo} alt="L" width="300px" height="74px" />
        </NavLink>
        <a
          role={`button`}
          className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
          aria-label={`menu`}
          aria-expanded={`false`}
          data-target={`navbarBasicExample`}
          onClick={toggleMenu}
        >
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
        </a>
      </div>

      <div
        id={`navbarBasicExample`}
        className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
      >
        <div className={`navbar-start has-text-weight-semibold`}>
          <NavLink
            to="/OrderNow"
            className={`navbar-item is-uppercase`}
            onClick={toggleMenu}
          >
            menu
          </NavLink>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            deals
          </a>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            locations
          </a>
        </div>
        <div className={`navbar-end`}>
          <div className={`navbar-item`}>
            <span className={`icon is-medium`}>
              <User size={20} fontWeight={900} />
            </span>
            <NavLink to="/Cart">
              <span className={"icon-text"}>
                <span className={`icon is-medium`}>
                  <ShoppingBag size={20} fontWeight={900} />
                </span>
                <span
                  className={`tag is-rounded has-text-weight-bold has-text-white has-background-danger`}
                >
                  {totalItems}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
