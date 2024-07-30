import React from "react";
import "./Market.css";
import marketbg from "../../images/marketbg.png";

function Market() {
    return (
        <section className="market">
            <div className="container">
                <div className="market__box">
                    <div className="market__small">
                        <h2 className="market__title">
                            Years Of Successful Working <br /> The Market
                        </h2>
                        <a className="market__link" href="#">
                            READ MORE
                        </a>
                    </div>
                    <img
                        className="market__img"
                        src={marketbg}
                        alt="Market bg"
                    />
                </div>
            </div>
        </section>
    );
}

export default Market;
