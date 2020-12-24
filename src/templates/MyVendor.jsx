import { useState } from "react";
import TitleBar from "../components/TitleBar";
import VendorDrawer from "../components/VendorDrawer";
import VendorMiniForm from "../components/VendorMiniForm";

const MyVendor = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMiniFormClick = () => {
    setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="myVendor">
      <div className={`myVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer handleClose={handleDrawerClose} />
      </div>
      <div className="myVendor_titleBar">
        <TitleBar title="My Vendor" />
      </div>
      <div
        className={`myVendor_contentContainer  ${
          openDrawer ? "drawer-open" : ""
        }`}
      >
        {[...Array(20)].map((ele, index) => (
          <VendorMiniForm key={index} onClick={() => handleMiniFormClick()} />
        ))}
      </div>
    </div>
  );
};

export default MyVendor;
