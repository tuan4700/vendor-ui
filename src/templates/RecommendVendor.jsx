import { useState } from "react";
import TitleBar from "../components/TitleBar";
import VendorDrawer from "../components/VendorDrawer";
import VendorMiniForm from "../components/VendorMiniForm";
import { fakeVendor } from "../fakeData";

const RecommendVendor = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectVendor, setSelectVendor] = useState(false);

  const handleMiniFormClick = (vendor) => {
    if (vendor !== selectVendor) setSelectVendor(vendor);
    else setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="recommendVendor">
      <div className={`recommendVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer vendor={selectVendor} handleClose={handleDrawerClose} />
      </div>
      <div className="recommendVendor_titleBar">
        <TitleBar title="Recommend Vendor" />
      </div>
      <div
        className={`recommendVendor_contentContainer  ${
          openDrawer ? "drawer-open" : ""
        }`}
      >
        {fakeVendor.map((ele, index) => (
          <VendorMiniForm
            vendor={ele}
            key={index}
            onClick={() => handleMiniFormClick(ele)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendVendor;
