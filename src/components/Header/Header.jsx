import React from "react";
import logo from "../../assets/logo.svg";
import photo from "../../assets/front-section.avif";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-items">
          <section>
            {/*logo*/}
            <div class="nav-logo">
              <img src={logo} alt="loading" />
              <span>GeekFoods</span>
            </div>
          </section>
          <section className="nav-links-container">
            {" "}
            {/* Nav links */}
            <ul className="nav-links">
              <a href="#">Home</a>
              <a href="#">Quotes</a>
              <a href="#">Resturants</a>
              <a href="#">Foods</a>
              <a href="#">Contact</a>
            </ul>
          </section>
          <section className="nav-button">
            <button>Get started</button>
          </section>
        </div>
      </nav>
      <div className="main-area">
        <div className="white-shade">
          <div className="content">
            <h1>
              Let us find your <br />
              <span>Forever Food.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="buttons">
              <button className="search">Search Now</button>
              <button className="know">Know more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
