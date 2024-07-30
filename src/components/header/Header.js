import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="header__box">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <nav className="navbar">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    HOME
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    PROJECT
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    SERVICES
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    ABOUT
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    BLOG
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    SHOP
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a href="#" className="navbar__link">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a className="header__sign" href="#">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
