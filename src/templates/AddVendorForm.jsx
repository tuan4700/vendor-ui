import Input from "../components/Input";
import Button from "../components/Button";

const AddVendorForm = () => {
  return (
    <div className="addVendorForm">
      <div className="addVendorForm_title">Add Vendor</div>
      <div className="addVendorForm_form">
        <div className="addVendorForm_form-content">
          <div className="addVendorForm_form-left">
            <Input
              id="vendor-name-input"
              name="vendor-name-input"
              isRequired
              label={"Name"}
            />
            <Input
              id="vendor-type-input"
              name="vendor-type-input"
              isRequired
              label={"Type"}
            />
            <Input
              id="vendor-country-input"
              name="vendor-country-input"
              label={"Country of Registration"}
            />
            <Input
              id="vendor-companynumber-input"
              name="vendor-companynumber-input"
              isRequired
              label={"Company Registration Number"}
            />
            <Input
              id="vendor-stocksymbol-input"
              name="vendor-stocksymbol-input"
              isRequired
              label={"Stock Symbol"}
            />
            <Input
              id="vendor-companywebsite-input"
              name="vendor-companywebsite-input"
              isRequired
              label={"Company Website"}
              placeholder={"https://"}
            />
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Deal with"}
            />
          </div>
          <div className="addVendorForm_form-right">
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Internal Representative "}
            />
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Relationship Since"}
            />
            <div className="addVendorForm_form-section">
              Contact Information
            </div>
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Main Contact Person"}
            />
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Official Email"}
            />
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Secondary Email"}
            />
            <Input
              id="vendor-dealwith-input"
              name="vendor-dealwith-input"
              isRequired
              label={"Mobile Number"}
            />
          </div>
        </div>
        <div className="addVendorForm_form-actions">
          <div className="addVendorForm_form-actionBtn">
            <Button variant="primary">Submit</Button>
          </div>
          <div className="addVendorForm_form-actionBtn">
            <Button>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendorForm;
