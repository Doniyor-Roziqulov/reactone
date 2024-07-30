import React from "react";
import "./Says.css";

function Says() {
    return (
        <section className="says">
            <div className="container">
                <p className="says__text">TESTIMONIALS</p>
                <h2 className="says__title">Client says about us</h2>
                <ul className="says__list">
                    <li className="says__item">
                        <strong className="says__bold">
                            Louis Saville
                            <span className="says__span">
                                /CEO at Google inc
                            </span>
                        </strong>
                        <p className="says__deck">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </li>
                    <li className="says__item">
                        <strong className="says__bold">
                            Rekha Varadwaz
                            <span className="says__span">
                                /Manager at Nike inc
                            </span>
                        </strong>
                        <p className="says__deck">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Says;
