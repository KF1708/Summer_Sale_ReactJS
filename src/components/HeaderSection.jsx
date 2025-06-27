export const HeaderSection = () => {
  return (
    <div>
      <div
        className="container-fluid d-flex py-4 align-items-center justify-content-center gap-5 flex-lg-row flex-column"
        id="header"
      >
        <div id="hearde-section">
          <h3 id="sale-fever">---SALE FEVER---</h3>
          <h1 id="purchase">
            Purchase $200 or <br></br> Above & Get{" "}
            <span id="sell-off">20% off</span>
          </h1>
          <h3 id="sell-promo">
            Use Promo Code <span id="sell">SELL200</span>
          </h3>
        </div>
        <div>
          <img src="/images/Summer 1.png" alt="Summer Sale" id="img-summer" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
