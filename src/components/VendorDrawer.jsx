import { Link } from "react-router-dom";
import Button from "./Button";

const VendorDrawer = ({ handleClose }) => {
  const infoOverview = [
    { title: "Name", value: "a" },
    { title: "Type", value: "a" },
    { title: "Total spend", value: "a" },
    { title: "Status", value: "a" },
    { title: "Country of Registration", value: "a" },
    { title: "Company Registration Number", value: "a" },
    { title: "Stock Symbol", value: "a" },
    { title: "Company Website", value: "a" },
    { title: "Relationship Since", value: "a" },
    { title: "Status", value: "a" },
  ];
  const infoContact = [
    { title: "Main Contact Person", value: "a" },
    { title: "Official Email", value: "a@gmail.com" },
    { title: "Secondary Email", value: "a@gmail.com" },
    { title: "Mobile Number", value: "a" },
  ];

  return (
    <div className="vendorDrawer">
      <div className="vendorDrawer_actionBar">
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-archive">
          <Button variant="outlined">Archive</Button>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-edit">
          <Link to="/add-vendor-form">
            <Button variant="outlined primary">Edit</Button>
          </Link>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-more">
          <Button variant="outlined"> More</Button>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-close">
          <Button variant="outlined" handleClick={handleClose}>
            Close
          </Button>
        </div>
      </div>

      <div className="vendorDrawer_section">Overview</div>
      <div className="vendorDrawer_informationTable">
        {infoOverview.map((ele, index) => (
          <div className="vendorDrawer_informationTable-line">
            <div className="vendorDrawer_informationTable-title">
              {ele.title}
            </div>
            <div className="vendorDrawer_informationTable-value">
              {ele.value}
            </div>
          </div>
        ))}
      </div>

      <div className="vendorDrawer_section">Contact Information</div>
      <div className="vendorDrawer_informationTable">
        {infoContact.map((ele, index) => (
          <div key={index} className="vendorDrawer_informationTable-line">
            <div className="vendorDrawer_informationTable-title">
              {ele.title}
            </div>
            <div className="vendorDrawer_informationTable-value">
              {ele.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDrawer;
