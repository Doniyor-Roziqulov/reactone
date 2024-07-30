import React from "react";
import "./Service.css";

function Service() {
    return (
        <section className="service">
            <div className="container">
                <p className="service__text">WHAT WE DO</p>
                <h2 className="service__title">Our Service</h2>
                <ul className="service__list">
                    <li className="service__item">
                        <strong className="list__title">Interior Design</strong>
                        <p className="list__text">
                            Lorem ipsum dolor amet consectetur adipiscing elit
                            sed eiusmod tempor incididunt ut labore.
                        </p>
                    </li>
                    <li className="service__item">
                        <strong className="list__title">Architecture</strong>
                        <p className="list__text">
                            Lorem ipsum dolor amet consectetur adipiscing elit
                            sed eiusmod tempor incididunt ut labore.
                        </p>
                    </li>
                    <li className="service__item">
                        <strong className="list__title">Planning</strong>
                        <p className="list__text">
                            Lorem ipsum dolor amet consectetur adipiscing elit
                            sed eiusmod tempor incididunt ut labore.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Service;
