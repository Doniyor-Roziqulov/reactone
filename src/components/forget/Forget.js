import React from "react";
import "./Forget.css";

function Forget() {
    return (
        <section className="forget">
            <div className="container">
                <h2 className="forget__title">DON’T FORGET TO SIGN UP</h2>
                <p className="forget__text">
                    Find out early about all upcoming promotions and new product
                    releases with <br /> our newsletter.
                </p>
                <form className="forget__form" action="">
                    <input
                        required
                        className="forget__input"
                        type="email"
                        placeholder="Enter your email address....."
                    />
                    <button className="forget__btn">SUBSCRIBE</button>
                </form>
            </div>
        </section>
    );
}

export default Forget;
