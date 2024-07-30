import React from "react";
import "./Hero.css";
import heroimg from "../../images/herobg.png";

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <div className="hero__small">
                        <p className="hero__text">MODERN INTERIOR</p>
                        <h1
                            className="hero__title"
                            title="Create Your Interior Design.">
                            Create Your Interior Design.
                        </h1>
                        <p className="hero__deck">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                        </p>
                        <a className="hero__link" href="#">
                            CONTACT
                        </a>
                    </div>
                    <img className="hero__img" src={heroimg} alt="Hero bg" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
