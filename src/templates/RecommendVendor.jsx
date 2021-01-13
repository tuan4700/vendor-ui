import { useState } from "react";
import TitleBar from "../components/TitleBar";
import VendorDrawer from "../components/VendorDrawer";
import VendorMiniForm from "../components/VendorMiniForm";

const RecommendVendor = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMiniFormClick = () => {
    setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="recommendVendor">
      <div className={`recommendVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer handleClose={handleDrawerClose} />
      </div>
      <div className="recommendVendor_titleBar">
        <TitleBar title="Recommend Vendor" />
      </div>
      <div
        className={`recommendVendor_contentContainer  ${
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

export default RecommendVendor;
