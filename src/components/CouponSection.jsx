import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const CouponSection = ({
  totalPrice,
  addList,
  setTotalPrice,
  setAddList,
}) => {
  const [coupon, setCoupon] = useState();
  const [newPrice, setNewPrice] = useState(totalPrice);
  const [discountPrice, setDiscountPrice] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTotalPrice(0);
    setAddList([]);
    setDiscountPrice(0);
  };
  const handleShow = () => setShow(true);

  const handelApplyCoupon = () => {
    if (coupon === "SELL200") {
      setDiscountPrice(Math.round(totalPrice * 0.2));
      setNewPrice(Math.round(totalPrice - totalPrice * 0.2));
    }
  };

  const handelChange = (e) => {
    setCoupon(e.target.value);
  };
  return (
    <div>
      <div id="coupon-section" className="">
        <h5>Have Coupon?</h5>
        <input
          type="input"
          id="coupon-Code"
          placeholder="Coupon Code"
          value={coupon}
          onChange={handelChange}
        />
        <button id="btn-Coupon" onClick={handelApplyCoupon}>
          Apply
        </button>
      </div>
      <div id="coupon-section-total" className="">
        <ol id="addItems">
          {addList.map((name, i) => (
            <li key={i} style={{ fontWeight: "bold" }}>
              {name}
            </li>
          ))}
        </ol>
        <hr></hr>
        <h5>
          Total Price:<span id="totalItemPrice">${totalPrice}.00</span>
        </h5>
        <h5>
          Discount:<span id="discountTotal">${discountPrice}.00</span>
        </h5>
        <h5>
          Total :<span id="total">${newPrice}.00</span>
        </h5>
        <button id="btn-Purchase" onClick={handleShow}>
          Make Purchase
        </button>

        <Modal
          size="sm"
          className=" cong-section "
          centered
          show={show}
          onHide={handleClose}
        >
          <img
            src="../public/images/tick 1.png"
            className=""
            alt="Congratulation image"
            id="cong-img"
          />
          <Modal.Header style={{ borderBottom: "none" }}>
            <Modal.Title id="cong-body">Congratulation</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center congra-title">
            <p> Your Purchase the product</p>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "none" }}>
            <Button
              variant="secondary"
              id="btn-gohome"
              className=""
              onClick={handleClose}
            >
              Go Home
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CouponSection;
