import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export const CouponSection = ({
  totalPrice = 0,
  addList = [],
  setTotalPrice,
  setAddList,
}) => {
  const [coupon, setCoupon] = useState("");
  const [newPrice, setNewPrice] = useState(totalPrice);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setNewPrice(0);
    setTotalPrice(0);
    setAddList([]);
    setDiscountPrice(0);
    setCoupon("");
  };

  const handleShow = () => setShow(true);
  console.log(newPrice);

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SELL200") {
      const discount = Math.round(totalPrice * 0.2);
      setDiscountPrice(discount);
      setNewPrice(totalPrice - discount);
    }
  };

  const handleChange = (e) => {
    setCoupon(e.target.value);
  };

  return (
    <div>
      <div id="coupon-section">
        <h5>Have Coupon?</h5>
        <input
          type="text"
          id="coupon-Code"
          placeholder="Coupon Code"
          value={coupon}
          onChange={handleChange}
        />
        <button
          id="btn-Coupon"
          onClick={handleApplyCoupon}
          disabled={totalPrice < 200}
        >
          Apply
        </button>
      </div>

      <div id="coupon-section-total">
        <ol id="addItems">
          {addList.map((name, i) => (
            <li key={i} style={{ fontWeight: "bold" }}>
              {name}
            </li>
          ))}
        </ol>
        <hr />
        <h5>
          Total Price: <span id="totalItemPrice">${totalPrice}.00</span>
        </h5>
        <h5>
          Discount: <span id="discountTotal">${discountPrice}.00</span>
        </h5>
        <h5>
          Total: <span id="total">${totalPrice - discountPrice}.00</span>
        </h5>
        <button
          id="btn-Purchase"
          onClick={handleShow}
          disabled={addList.length === 0}
        >
          Make Purchase
        </button>

        <Modal
          size="sm"
          className="cong-section"
          centered
          show={show}
          onHide={handleClose}
        >
          <img src="/images/tick 1.png" alt="Congratulations" id="cong-img" />
          <Modal.Header style={{ borderBottom: "none" }}>
            <Modal.Title id="cong-body">Congratulations</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center congra-title">
            <p>You have purchased the product</p>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "none" }}>
            <Button variant="secondary" id="btn-gohome" onClick={handleClose}>
              Go Home
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

// ✅ Optional prop validation (JS only)
CouponSection.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  addList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  setAddList: PropTypes.func.isRequired,
};

export default CouponSection;
