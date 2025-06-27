/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

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
    <div>
      <div>
        <div>
          {items.map((section) => (
            <div key={section.id} className="items-space">
              <h3>{section.title}</h3>
              <div className=" row justify-content-center gap-4 ">
                {section.product.map((product) => (
                  <ItemsList
                    key={product.id}
                    item={product}
                    setTotalPrice={setTotalPrice}
                    setAddList={setAddList}
                  ></ItemsList>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
