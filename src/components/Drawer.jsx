import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Drawer = ({ open }) => {
  const location = useLocation();

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

  const handleCheckActive = (link) => {
    if (link === location.pathname) return true;
    else return false;
  };

  return (
    <div className={`drawer ${open ? "show" : ""}`}>
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
            <Link
              to="/add-vendor-form"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/add-vendor-form") ? "active" : ""
              }`}
            >
              Add Vendor
            </Link>
            <Link
              to="/my-vendor"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/my-vendor") ? "active" : ""
              }`}
            >
              My Vendor
            </Link>
            <Link
              to="/vendor-send-report"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/vendor-send-report") ? "active" : ""
              }`}
            >
              Vendor Send Report
            </Link>
            <Link
              to="/vendor-recommend"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/vendor-recommend") ? "active" : ""
              }`}
            >
              Recommend
            </Link>
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
            <Link
              to="/add-contact-form"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/add-contact-form") ? "active" : ""
              }`}
            >
              Add Contact
            </Link>
            <Link
              to="/my-contact"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/my-contact") ? "active" : ""
              }`}
            >
              My Contact
            </Link>
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
