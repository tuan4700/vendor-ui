import Button from "./Button";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const TitleBar = (props) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="titleBar">
      <div className="titleBar_title">{props.title}</div>
      <div className="titleBar_actions">
        {props.exportPdf && (
          <div className="titleBar_actions-btn titleBar_actions-export">
            <Button size="small" handleClick={props.exportPdf}>
              Export PDF
            </Button>
          </div>
        )}
        <div
          className={`titleBar_actions-btn titleBar_actions-search-input ${
            openSearch ? "show" : ""
          }`}
        >
          {props.search}
        </div>
        <div className="titleBar_actions-btn titleBar_actions-search">
          <Button
            size="small"
            handleClick={() => setOpenSearch((prev) => !prev)}
          >
            <Icon name="loupe" />
          </Button>
        </div>
        <div className="titleBar_actions-btn titleBar_actions-add">
          <Link to="/add-vendor-form">
            <Button size="small" variant="primary">
              <Icon name="whiteCross" />
            </Button>
          </Link>
        </div>
        <div className="titleBar_actions-btn titleBar_actions-menu">
          <Button size="small">
            <Icon name="menu" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
