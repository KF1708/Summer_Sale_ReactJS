import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ItemsSection = ({ setTotalPrice, setAddList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(" ./Product.json ")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  console.log(items);

  return (
    <div className="">
      <div id="item-section">
        <h1>Kitchenware</h1>

        <div className=" row justify-content-center gap-3">
          {items.map((item, index) => (
            <ItemsList
              key={index}
              item={item}
              setTotalPrice={setTotalPrice}
              setAddList={setAddList}
            ></ItemsList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
