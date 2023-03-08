import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <span className="main-card--cointainer">
        {menuData.map((curEle) => {
          const { id, name, category, image, description } = curEle;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h1 className="card-title">{name}</h1>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media"></img>
                  <span className="card-tag subtle"> Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </span>
    </>
  );
};

export default MenuCard;
