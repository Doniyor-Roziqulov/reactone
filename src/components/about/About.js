import React from "react";
import "./About.css";
import aboutbg from "../../images/aboutbg.png";

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__box">
                    <img className="about__img" src={aboutbg} alt="About bg" />
                    <div className="about__small">
                        <p className="about__text">ABOUT US</p>
                        <h2 className="about__title">
                            Interioris The Will of An Epoch Mextreo
                        </h2>
                        <p className="about__deck">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form injected humour, or randomised words
                            which don't look even slightly believable.If you are
                            going to use a passage of Lorem Ipsum, sure there
                            isn't anything embarrassing hidden the middleof
                            text. All the Lorem Ipsum generators on the
                            Internettend to repeat predefined chunks as
                            necessary,making this the first true generator on
                            the Internet.
                        </p>
                        <a className="about__link" href="#">
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
