/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export const ItemsList = ({ item, setTotalPrice, setAddList }) => {
  const { name, img, rating, price } = item;

  const handleAdd = () => {
    setTotalPrice((prev) => prev + price);
    setAddList((prev) => [...prev, name]);
  };
  console.log(img, rating);

  return (
    <div
      className="card text-center list-items col-lg-3 col-md-2 col-sm-1"
      style={{}}
      onClick={handleAdd}
    >
      <img
        src={item.img}
        alt={item.name}
        loading="lazy"
        className="img card-body  bg-body-secondary "
      />

      <Rating
        initialRating={item.rating}
        readonly={true}
        emptySymbol={<CiStar style={{ color: "orange" }} />}
        fullSymbol={<FaStar style={{ color: "orange" }} />}
      />
      <h5>{item.name}</h5>

      <p>${item.price}.00</p>
    </div>
  );
};

export default ItemsList;
