import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeContract } from "../fakeData";
import PdfDocument from "../components/PdfDocument";
import { PDFViewer } from "@react-pdf/renderer";
import Input from "../components/Input";

const MyContract = () => {
  const tableHeader = [
    "Select",
    "Contract Member Correct",
    "Product(s)",
    "Title",
    "Contract",
    "Vendor",
    "Type",
  ];

  const [openPdf, setOpenPdf] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("0");
  const [searchTerm, setSearchTerm] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="myContract">
      <div className="myContract_titleBar">
        <TitleBar
          title="My Contract"
          exportPdf={() => setOpenPdf(true)}
          search={
            <Input
              id="contact-name-input"
              name="contractMemberCorrect"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>

      <div className="myContract_contactTable">
        <table className="myContract_contactTable-table">
          <thead>
            <tr className="myContract_contactTable-headLine">
              {tableHeader.map((ele, index) => (
                <td key={index} className="myContract_contactTable-headItem">
                  {ele}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="myContract_contactTable-body">
            {searchTerm !== ""
              ? fakeContract
                  .filter((ele) => ele.title.includes(searchTerm))
                  .map((ele, index) => (
                    <tr
                      key={index}
                      className={`myContract_contactTable-row ${
                        index.toString() === selectedInfo ? "selected" : ""
                      }`}
                    >
                      <td className="myContract_contactTable-radio">
                        <input
                          value={index}
                          id={`type_radio_${index}`}
                          checked={index.toString() === selectedInfo}
                          name="type_radio"
                          type="radio"
                          onChange={(e) => setSelectedInfo(e.target.value)}
                        />
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.contractMemberCorrect}
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.product}
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.title}
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.contract}
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.vendor}
                      </td>
                      <td className="myContract_contactTable-data">
                        {ele.type}
                      </td>
                    </tr>
                  ))
              : fakeContract.map((ele, index) => (
                  <tr
                    key={index}
                    className={`myContract_contactTable-row ${
                      index.toString() === selectedInfo ? "selected" : ""
                    }`}
                  >
                    <td className="myContract_contactTable-radio">
                      <input
                        value={index}
                        id={`type_radio_${index}`}
                        checked={index.toString() === selectedInfo}
                        name="type_radio"
                        type="radio"
                        onChange={(e) => setSelectedInfo(e.target.value)}
                      />
                    </td>
                    <td className="myContract_contactTable-data">
                      {ele.contractMemberCorrect}
                    </td>
                    <td className="myContract_contactTable-data">
                      {ele.product}
                    </td>
                    <td className="myContract_contactTable-data">
                      {ele.title}
                    </td>
                    <td className="myContract_contactTable-data">
                      {ele.contract}
                    </td>
                    <td className="myContract_contactTable-data">
                      {ele.vendor}
                    </td>
                    <td className="myContract_contactTable-data">{ele.type}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className={`myContract_exportPdf${openPdf ? " show" : ""}`}>
        <div className="myContract_exportPdf-modal ">
          <div
            className="myContract_exportPdf-close"
            onClick={() => setOpenPdf(false)}
          >
            X
          </div>
          <div className="myContract_exportPdf-pdfViewer">
            <PDFViewer>
              <PdfDocument data={fakeContract[selectedInfo]} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContract;
