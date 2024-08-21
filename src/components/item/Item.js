import React from "react";
import "./Item.css";

function Item({ name, rating, price, saleDiscount, image, brand }) {
  // Construct the full image path
  //const imageUrl = `${process.env.PUBLIC_URL}${image}`;
  //console.log(imageUrl);

  return (
    <div className="item-card">
      <img src={image} alt={name} width="100%" />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div className="item-price">${price}</div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;