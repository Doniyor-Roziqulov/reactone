import React from "react";
import "./Blog.css";
import blogone from "../../images/blog1.png";
import blogtwo from "../../images/blog2.png";

function Blog() {
    return (
        <section className="blog">
            <div className="container">
                <p className="blog__text">LETEST NEWS</p>
                <h2 className="blog__title">From Our Blog</h2>
                <ul className="blog__list">
                    <li className="blog__item">
                        <img className="blog__img" src={blogone} alt="img" />
                        <h3 className="list__title">
                            2020 Interior Design Trends
                        </h3>
                        <p className="list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <a className="blog__link" href="#">
                            CONTINUE READING....
                        </a>
                    </li>
                    <li className="blog__item">
                        <img className="blog__img" src={blogtwo} alt="img" />
                        <h3 className="list__title">
                            28 Notable Product at ARC Interior Design
                        </h3>
                        <p className="list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <a className="blog__link" href="#">
                            CONTINUE READING....
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Blog;
