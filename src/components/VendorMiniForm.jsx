import Icon from "./Icon";

const VendorMiniForm = ({ vendor, onClick }) => {
  return (
    <div className="vendorMiniForm" onClick={onClick}>
      <div className="vendorMiniForm_mainContent">
        <div className="vendorMiniForm_mainContent-info">
          <div className="vendorMiniForm_mainContent-title">
            {(vendor && vendor.vendorName) || "a"}
          </div>
          <div className="vendorMiniForm_mainContent-action">
            <Icon name="more" />
          </div>
        </div>
      </div>
      <div className="vendorMiniForm_externalInfo">
        <div className="vendorMiniForm_externalInfo-name">
          {(vendor && vendor.firstName) || "a"}
          {(vendor && vendor.lastName) || "a"}
        </div>
        <div className="vendorMiniForm_externalInfo-email">
          {(vendor && vendor.email) || "a@gmail.com"}
        </div>
        <div className="vendorMiniForm_externalInfo-total">
          ${(vendor && vendor.totalSpend) || "0.00"}
        </div>
      </div>
    </div>
  );
};

export default VendorMiniForm;
