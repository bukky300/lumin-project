import React, { Fragment } from "react";
import luminLogo from "../../assets/lumin.png";
import CartIcon from "../../assets/cart-icon.png";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import MenuBtn from "../../ui/MenuBtn";
import cn from "classnames";


const Header = () => {
  const dispatch = useDispatch();

  const cartItemTotal = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const showMobileNav = useSelector((state) => state.ui.mobileNav);

  const togglemobileNavHandler = () => {
    dispatch(uiActions.toggleMobileNav());
  };

  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-light desktop-nav">
          <MenuBtn
            className="d-block d-lg-none"
            onClick={togglemobileNavHandler}
          />
          <ul className="nav justify-content-end d-none d-lg-flex">
            <li className="nav-item">
              <a href="/" className="navbar-brand">
                <img src={luminLogo} alt="lumin logo" className="logo" />
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Account
              </a>
            </li>
            <li className="nav-item">
              <div
                className="cart-icon-wrapper nav-link"
                onClick={toggleCartHandler}
              >
                <img src={CartIcon} alt="cart icon" className="cart-icon" />
                <span className="cart-icon-span">{cartItemTotal}</span>
              </div>
            </li>
            <li className="nav-item">
              <select className="form-select">
                <option>EN</option>
                <option value="1">AR</option>
                <option value="2">FR</option>
                <option value="3">ES</option>
              </select>
            </li>
          </ul>
        </nav>

        <div className={cn("modal-overlay", { show: showMobileNav })}></div>
        <nav className={cn("mobile-nav", { show: showMobileNav })}>
          <div className="mobile-nav-wrapper">
            <a className="active" href="/">
              Shop
            </a>
            <a href="/">About</a>
            <a href="/">Support</a>
            <button onClick={togglemobileNavHandler}>
              <svg viewBox="0 0 256 512" focusable="false" role="presentation">
                <path
                  fill="currentColor"
                  d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="categories-wrapper">
            <a className="active" href="/">
              Skin
            </a>
            <a href="/">Hair & Body</a>
            <a href="/">Sets</a>
            <a href="/">Accessories</a>
            <a href="/">Shop All</a>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
