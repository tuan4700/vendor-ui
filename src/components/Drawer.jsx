import { useState } from "react";

const Drawer = () => {
  const [accordionVar, setAccordionVar] = useState({
    vendor: false,
    contract: false,
    rating: false,
  });

  const handleAccordion = (name) => {
    setAccordionVar({
      ...accordionVar,
      [name]: !accordionVar[name],
    });
  };

  return (
    <div className="drawer">
      <div className="drawer_brand">Vendor</div>
      <div className="drawer_accordion">
        <div
          className={`drawer_accordion-item ${
            accordionVar.vendor ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title "
            onClick={() => handleAccordion("vendor")}
          >
            Vendors
          </div>
          <div className="drawer_accordion-childWrapper ">
            <div className="drawer_accordion-navigate">Add Vendor</div>
            <div className="drawer_accordion-navigate">My Vendor</div>
            <div className="drawer_accordion-navigate">Vendor Send Report</div>
            <div className="drawer_accordion-navigate">Recommend</div>
          </div>
        </div>
        <div
          className={`drawer_accordion-item ${
            accordionVar.contract ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title "
            onClick={() => handleAccordion("contract")}
          >
            Contracts
          </div>
          <div className="drawer_accordion-childWrapper ">
            <div className="drawer_accordion-navigate">Add Contact</div>
            <div className="drawer_accordion-navigate">My Contact</div>
            <div className="drawer_accordion-navigate">Edit History</div>
          </div>
        </div>{" "}
        <div
          className={`drawer_accordion-item ${
            accordionVar.rating ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title"
            onClick={() => handleAccordion("rating")}
          >
            Vendor Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
