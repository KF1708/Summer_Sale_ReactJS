import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import "../src/components/styles/style.css";
import HeaderSection from "./components/HeaderSection";
import { ItemsSection } from "./components/ItemsSection";
import CouponSection from "./components/CouponSection";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [addlist, setAddList] = useState([]);

  console.log(addlist);

  return (
    <>
      {/* <FontAwesomeIcon icon={faStar} /> */}

      <HeaderSection></HeaderSection>

      <div className="d-flex container" id="item-section">
        <ItemsSection
          setTotalPrice={setTotalPrice}
          setAddList={setAddList}
        ></ItemsSection>

        <CouponSection
          totalPrice={totalPrice}
          addList={addlist}
          setAddList={setAddList}
          setTotalPrice={setTotalPrice}
        ></CouponSection>
      </div>

      {/* <Congratulation></Congratulation> */}
    </>
  );
}

export default App;
