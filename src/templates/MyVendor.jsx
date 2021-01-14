import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeVendor } from "../fakeData";
import PdfDocument from "../components/PdfDocument";
import { PDFViewer } from "@react-pdf/renderer";

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

  return (
    <div className="myVendor">
      <div className="myVendor_titleBar">
        <TitleBar title="My Vendor" exportPdf={() => setOpenPdf(true)} />
      </div>

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
            {fakeVendor.map((ele, index) => (
              <tr
                key={index}
                className={`myVendor_contactTable-row ${
                  index.toString() === selectedInfo ? "selected" : ""
                }`}
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
                <td className="myVendor_contactTable-data">{ele.totalSpend}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <PdfDocument data={fakeVendor[selectedInfo]} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVendor;
