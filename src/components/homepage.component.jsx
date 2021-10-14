import React from "react";
import "./homepage.styles.scss"

function HomePage() {
  return (
    <div className="homepage">
      <div className="cardList">
        <div className="card">
          <div className="cardContent">
            <h1 className="title">HAT</h1>
            <span className="text">SHOP NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="title">SNEAKERS</h1>
            <span className="text">SHOP NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="title">JACKETS</h1>
            <span className="text">SHOP NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="title">WOMAN</h1>
            <span className="text">SHOP NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="title">MAN</h1>
            <span className="text">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;