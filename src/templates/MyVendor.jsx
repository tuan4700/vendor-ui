import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeVendor } from "../fakeData";
import PdfDocument from "../components/PdfDocument";
import { PDFViewer } from "@react-pdf/renderer";
import Input from "../components/Input";
import VendorDrawer from "../components/VendorDrawer";

const MyVendor = () => {
  const tableHeader = [
    "Select",
    "Name",
    "Current Contracts",
    "Main Contact Person",
    "Official Email",
    "Total Spend",
  ];

  const [openPdf, setOpenPdf] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectVendor, setSelectVendor] = useState(false);

  const handleRowClick = (vendor) => {
    console.log("haha");
    if (vendor !== selectVendor) setSelectVendor(vendor);
    else setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(searchTerm);

  return (
    <div className="myVendor">
      <div className="myVendor_titleBar">
        <TitleBar
          title="My Vendor"
          exportPdf={() => setOpenPdf(true)}
          search={
            <Input
              id="vendor-name-input"
              name="name"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>
      <div className="myVendor_contactTable-container">
        <div className="myVendor_contactTable">
          <table className="myVendor_contactTable-table">
            <thead>
              <tr className="myVendor_contactTable-headLine">
                {tableHeader.map((ele, index) => (
                  <td key={index} className="myVendor_contactTable-headItem">
                    {ele}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="myVendor_contactTable-body">
              {searchTerm !== ""
                ? fakeVendor
                    .filter((ele) => ele.name.includes(searchTerm))
                    .map((ele, index) => (
                      <tr
                        key={index}
                        className={`myVendor_contactTable-row ${
                          index.toString() === selectedInfo ? "selected" : ""
                        }`}
                        onClick={() => handleRowClick(ele)}
                      >
                        <td className="myVendor_contactTable-radio">
                          <input
                            value={index}
                            id={`type_radio_${index}`}
                            checked={index.toString() === selectedInfo}
                            name="type_radio"
                            type="radio"
                            onChange={(e) => setSelectedInfo(e.target.value)}
                          />
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.name}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.currentContact}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.mainContactPerson}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.officialEmail}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.totalSpend}
                        </td>
                      </tr>
                    ))
                : fakeVendor.map((ele, index) => (
                    <tr
                      key={index}
                      className={`myVendor_contactTable-row ${
                        index.toString() === selectedInfo ? "selected" : ""
                      }`}
                      onClick={() => handleRowClick(ele)}
                    >
                      <td className="myVendor_contactTable-radio">
                        <input
                          value={index}
                          id={`type_radio_${index}`}
                          checked={index.toString() === selectedInfo}
                          name="type_radio"
                          type="radio"
                          onChange={(e) => setSelectedInfo(e.target.value)}
                        />
                      </td>
                      <td className="myVendor_contactTable-data">{ele.name}</td>
                      <td className="myVendor_contactTable-data">
                        {ele.currentContact}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.mainContactPerson}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.officialEmail}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.totalSpend}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`myVendor_exportPdf${openPdf ? " show" : ""}`}>
        <div className="myVendor_exportPdf-modal ">
          <div
            className="myVendor_exportPdf-close"
            onClick={() => setOpenPdf(false)}
          >
            X
          </div>
          <div className="myVendor_exportPdf-pdfViewer">
            <PDFViewer>
              <PdfDocument data={fakeVendor[selectedInfo]} vendor />
            </PDFViewer>
          </div>
        </div>
      </div>

      <div className={`myVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer vendor={selectVendor} handleClose={handleDrawerClose} />
      </div>
    </div>
  );
};

export default MyVendor;
