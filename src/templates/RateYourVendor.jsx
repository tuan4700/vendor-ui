import Input from "../components/Input";
import Radio from "../components/Radio";
import Button from "../components/Button";
import Select from "../components/Select";
import { useState } from "react";
import { fakeContract } from "../fakeData";

const vendorOptions = [
  { value: "vendor", label: "Vendor" },
  { value: "vvendor", label: "VVendor" },
];

const contractOptions = [
  { value: "hehe", label: "Hehe" },
  { value: "hihi", label: "Hihi" },
];

const contractProductOptions = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "USA" },
];

const RateYourVendor = () => {
  const [formData, setFormData] = useState({
    contractNumber: "4",
    contractMemberCorrect: "wwhuttt",
    product: "haaaaa",
    title: "That's right",
    contract: "huh",
    vendor: "me",
    type: "ohh",
  });

  const [selectedType, setSelectedType] = useState("new");

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fakeContract.push({ ...formData, type: selectedType });
  };

  return (
    <div className="rateYourVendor">
      <div className="rateYourVendor_title">Rate Your Vendor</div>
      <div className="rateYourVendor_form">
        <div className="rateYourVendor_form-content">
          <div className="rateYourVendor_form-input">
            <Select
              id="contract-vendor-select"
              name="vendor"
              isRequired
              label="Vendor"
              options={vendorOptions}
              getValue={(selectedOption) =>
                setFormData({
                  ...formData,
                  vendor: selectedOption.value,
                })
              }
            />
          </div>
          <div className="rateYourVendor_form-input">
            <Select
              id="contract-contract-select"
              name="contract"
              isRequired
              label="Contract"
              options={contractOptions}
              getValue={(selectedOption) =>
                setFormData({
                  ...formData,
                  contract: selectedOption.value,
                })
              }
            />
          </div>
          <div className="rateYourVendor_form-input">
            <Select
              id="contract-productService-select"
              name="productService"
              isRequired
              label="Product/Service"
              options={contractProductOptions}
              getValue={(selectedOption) =>
                setFormData({
                  ...formData,
                  productService: selectedOption.value,
                })
              }
            />
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Quality</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`type_radio_poor`}
                checked={selectedType === "poor"}
                name="type_radio"
                type="radio"
                label="Poor"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="average"
                label="Average"
                id={`type_radio_average`}
                checked={selectedType === "average"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`type_radio_renewal`}
                checked={selectedType === "excellent"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Quality</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`type_radio_poor`}
                checked={selectedType === "poor"}
                name="type_radio"
                type="radio"
                label="Poor"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="average"
                label="Average"
                id={`type_radio_average`}
                checked={selectedType === "average"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`type_radio_renewal`}
                checked={selectedType === "excellent"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Quality</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`type_radio_poor`}
                checked={selectedType === "poor"}
                name="type_radio"
                type="radio"
                label="Poor"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="average"
                label="Average"
                id={`type_radio_average`}
                checked={selectedType === "average"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`type_radio_renewal`}
                checked={selectedType === "excellent"}
                name="type_radio"
                type="radio"
                handleChange={(e) => setSelectedType(e.target.value)}
              />
            </div>
          </div>

          <div className="rateYourVendor_form-input">
            <Input
              id="contract-productService-input"
              name="productService"
              isRequired
              label="Product/Service"
              handleChange={handleTextChange}
            />
          </div>

          <div className="rateYourVendor_form-actions">
            <div className="rateYourVendor_form-actionBtn">
              <Button variant="primary" handleClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <div className="rateYourVendor_form-actionBtn">
              <Button>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateYourVendor;
