import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Congratulation = () => {
  return (
    <div>
      <div
        className="container text-center modal show"
        id="cong-section"
        style={{ display: "block", position: "initial" }}
      >
        <img
          src="../public/images/tick 1.png"
          className="card-img-top"
          alt="Congratulation image"
          id="cong-img"
        />
        <Modal.Dialog>
          <Modal.Title>Congratulation</Modal.Title>
          <Modal.Body>
            <small className="text-body-secondary my-1">
              Your Purchase the product
            </small>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" id="btn-gohome">
              {" "}
              Go Home
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default Congratulation;
